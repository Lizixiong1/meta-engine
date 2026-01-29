export interface FormOptions {
  fields?: any[];
  initialValues?: any;
  onSubmit?: (values: any) => void;
}

export interface FormState {
  values: any;
  errors: any[];
  touched: Set<string>;
}
