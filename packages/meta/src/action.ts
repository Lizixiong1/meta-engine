export interface ActionMeta {
  type: 'action';
  name: string;
  label: string;
  onClick?: any;
  disabled?: boolean;
  visible?: boolean;
}
