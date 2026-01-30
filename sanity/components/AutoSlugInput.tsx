import { useEffect } from 'react';
import { set, unset } from 'sanity';
import { StringInputProps } from 'sanity';

interface AutoSlugInputProps extends StringInputProps {
  source?: string | ((doc: any) => string);
}

export function AutoSlugInput(props: AutoSlugInputProps) {
  const { onChange, value, schemaType } = props;
  const document = props.document;

  // Generate slug from source field
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

    const sourceConfig = (schemaType.options as any)?.source;

    if (typeof sourceConfig === 'function') {
      return sourceConfig(document);
    }

    if (typeof sourceConfig === 'string') {
      const keys = sourceConfig.split('.');
      let value: any = document;
      for (const key of keys) {
        value = value?.[key];
        if (!value) return '';
      }
      return value;
    }

    return '';
  };

  useEffect(() => {
    const sourceValue = getSourceValue();
    if (sourceValue) {
      const newSlug = generateSlug(sourceValue);
      const currentSlug = typeof value === 'object' && value?._type === 'slug'
        ? value.current
        : value;

      // Only update if the slug has changed
      if (currentSlug !== newSlug) {
        onChange(set({ _type: 'slug', current: newSlug }));
      }
    } else if (!value) {
      // Set initial timestamp-based slug if no source value yet
      const initialSlug = `draft-${Date.now()}`;
      onChange(set({ _type: 'slug', current: initialSlug }));
    }
  }, [document, onChange, value, schemaType]);

  // Return null to hide the input completely
  return null;
}
