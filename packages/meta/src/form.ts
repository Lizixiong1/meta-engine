export interface FormMeta {
  type: 'form';
  fields: FieldMeta[];
  layout?: any;
  submitButton?: boolean;
}

export interface FieldMeta {
  name: string;
  label: string;
  component: string;
  required?: boolean;
  visibleWhen?: any;
  props?: any;
}
