import { useEffect } from 'react';
import { set } from 'sanity';
import { SlugInputProps } from 'sanity';

export function AutoSlugInput(props: SlugInputProps) {
  const { onChange, value, schemaType, document } = props;

  // Generate slug from text
  const generateSlug = (text: string): string => {
    if (!text) return '';
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
      .slice(0, 96);
  };

  // Get source value from document
  const getSourceValue = (): string => {
    if (!document) return '';

    const sourceConfig = schemaType.options?.source;

    if (typeof sourceConfig === 'function') {
      try {
        return sourceConfig(document) || '';
      } catch (error) {
        console.error('Error getting source value:', error);
        return '';
      }
    }

    if (typeof sourceConfig === 'string') {
      const keys = sourceConfig.split('.');
      let val: any = document;
      for (const key of keys) {
        val = val?.[key];
        if (!val) return '';
      }
      return String(val);
    }

    return '';
  };

  useEffect(() => {
    const sourceValue = getSourceValue();
    const currentSlug = value?.current || '';

    if (sourceValue) {
      const newSlug = generateSlug(sourceValue);

      // Only update if the slug has changed
      if (currentSlug !== newSlug && newSlug) {
        onChange(set({ _type: 'slug', current: newSlug }));
      }
    } else if (!currentSlug) {
      // Set initial timestamp-based slug if no source value yet
      const initialSlug = `draft-${Date.now()}`;
      onChange(set({ _type: 'slug', current: initialSlug }));
    }
  }, [document?.title, document?.name, value, onChange]);

  // Return null to hide the input completely
  return null;
}
