export interface Schema {
  type: string;
  properties?: Record<string, Schema>;
  required?: string[];
  default?: any;
}
