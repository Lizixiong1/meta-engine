# Meta API

The Meta API defines the structure and behavior of metadata in Meta Engine.

## Meta Types

### BaseMeta

The base interface for all metadata objects:

```typescript
interface BaseMeta {
  id?: string;
  type: string;
  props?: any;
  children?: Meta[];
}
```

### FormMeta

Metadata for form components:

```typescript
interface FormMeta {
  type: 'form';
  fields: FieldMeta[];
  layout?: any;
  submitButton?: boolean;
}

interface FieldMeta {
  name: string;
  label: string;
  component: string;
  required?: boolean;
  visibleWhen?: any;
  props?: any;
}
```

### TableMeta

Metadata for table components:

```typescript
interface TableMeta {
  type: 'table';
  columns: ColumnMeta[];
  dataSource?: any[];
  pagination?: any;
  rowKey?: string;
}

interface ColumnMeta {
  title: string;
  dataIndex: string;
  key?: string;
  render?: any;
  width?: number | string;
}
```

### ActionMeta

Metadata for action components:

```typescript
interface ActionMeta {
  type: 'action';
  name: string;
  label: string;
  onClick?: any;
  disabled?: boolean;
  visible?: boolean;
}
```

## Usage

To use the Meta API:

1. Import the necessary types
2. Define your metadata objects
3. Pass them to the Meta Engine

```typescript
import { FormMeta, TableMeta } from '@meta-engine/meta';

const formMeta: FormMeta = {
  type: 'form',
  fields: [
    // field definitions
  ]
};

const tableMeta: TableMeta = {
  type: 'table',
  columns: [
    // column definitions
  ]
};
```

## Advanced Features

### Conditional Visibility

Use `visibleWhen` to conditionally show fields:

```typescript
const fieldMeta = {
  name: 'role',
  label: 'Role',
  component: 'Select',
  visibleWhen: {
    field: 'username',
    notEmpty: true
  }
};
```

### Interactions

Define interactions between fields:

```typescript
const fieldMeta = {
  name: 'country',
  label: 'Country',
  component: 'Select',
  onChange: (value) => {
    // update other fields based on country
  }
};
```

## Best Practices

- Keep metadata focused and maintainable
- Use consistent naming conventions
- Leverage TypeScript for type safety
- Reuse metadata patterns across components