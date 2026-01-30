import React, { useCallback, useState } from 'react';
import { Stack, Button, Card, Text, Flex, Box } from '@sanity/ui';
import { set, insert, unset } from 'sanity';
import { useClient } from 'sanity';
import { ArrayOfObjectsInputProps, ObjectSchemaType } from 'sanity';
import { UploadIcon, TrashIcon } from '@sanity/icons';

export function MultiImageInput(props: ArrayOfObjectsInputProps) {
  const { onChange, value = [], schemaType, renderDefault } = props;
  const client = useClient({ apiVersion: '2024-01-01' });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');

  const handleMultipleFileUpload = useCallback(
    async (files: FileList) => {
      if (!files || files.length === 0) return;

      setIsUploading(true);
      const totalFiles = files.length;

      try {
        const uploadPromises = Array.from(files).map(async (file, index) => {
          setUploadProgress(`Uploading ${index + 1} of ${totalFiles}...`);

          // Upload the file to Sanity
          const asset = await client.assets.upload('image', file, {
            filename: file.name,
          });

          // Create the image object with empty captions
          return {
            _type: 'image',
            _key: `image-${Date.now()}-${index}`,
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
            caption: {
              am: '',
              en: '',
              ru: '',
            },
          };
        });

        const uploadedImages = await Promise.all(uploadPromises);

        // Add all uploaded images to the array at once
        const newValue = [...value, ...uploadedImages];
        onChange(set(newValue));

        setUploadProgress(`Successfully uploaded ${totalFiles} images!`);
        setTimeout(() => setUploadProgress(''), 2000);
      } catch (error) {
        console.error('Error uploading images:', error);
        setUploadProgress('Error uploading images. Please try again.');
        setTimeout(() => setUploadProgress(''), 3000);
      } finally {
        setIsUploading(false);
      }
    },
    [client, onChange, value]
  );

  const handleFileInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        handleMultipleFileUpload(files);
      }
      // Reset input value to allow re-uploading same files
      event.target.value = '';
    },
    [handleMultipleFileUpload]
  );

  return (
    <Stack space={3}>
      {/* Upload Multiple Images Button */}
      <Card padding={3} tone="primary" radius={2}>
        <Stack space={3}>
          <Flex align="center" justify="space-between">
            <Text weight="semibold">Upload Multiple Images</Text>
            <Button
              icon={UploadIcon}
              text={isUploading ? 'Uploading...' : 'Select Multiple Files'}
              tone="primary"
              disabled={isUploading}
              onClick={() => document.getElementById('multi-image-input')?.click()}
            />
          </Flex>
          {uploadProgress && (
            <Card padding={2} tone="positive" radius={2}>
              <Text size={1}>{uploadProgress}</Text>
            </Card>
          )}
          <Text size={1} muted>
            Click the button above to select multiple image files at once, or drag and drop
            multiple files onto the images below.
          </Text>
        </Stack>
      </Card>

      {/* Hidden file input with multiple attribute */}
      <input
        id="multi-image-input"
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />

      {/* Render the default array input for displaying/editing images */}
      {renderDefault(props)}
    </Stack>
  );
}
