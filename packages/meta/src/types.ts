export interface BaseMeta {
  id?: string;
  type: string;
  props?: any;
  children?: Meta[];
}

export type Meta = FormMeta | TableMeta | ActionMeta | BaseMeta;

// Import other types to resolve dependencies
export * from './form';
export * from './table';
export * from './action';
