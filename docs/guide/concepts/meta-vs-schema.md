# Meta vs Schema

In Meta Engine, there are two key concepts that work together to define and power your UI:

## Schema

**Schema** describes the **data structure** and **validation rules** (static):

- Defines the shape of your data
- Specifies validation rules (required, min/max length, etc.)
- Used for type checking and data integrity
- Typically static and focused on data

### Example Schema

```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "minLength": 3
    },
    "email": {
      "type": "string",
      "format": "email"
    }
  },
  "required": ["username", "email"]
}
```

## Meta

**Meta** describes the **components**, **behavior**, **layout**, **permissions**, and **interactions** (runtime):

- Defines which components to render
- Specifies layout and styling
- Controls visibility and permissions
- Handles interactions and state management
- Typically dynamic and focused on UI

### Example Meta

```json
{
  "type": "form",
  "fields": [
    {
      "name": "username",
      "label": "Username",
      "component": "Input",
      "required": true
    },
    {
      "name": "email",
      "label": "Email",
      "component": "Input",
      "type": "email",
      "required": true
    }
  ]
}
```

## How They Work Together

- **Schema** provides the foundation for data structure and validation
- **Meta** builds on top of Schema to create the actual UI and behavior
- Schema ensures data integrity
- Meta ensures a good user experience

This separation allows you to:

- Reuse schemas across different UIs
- Change UI behavior without modifying data structure
- Validate data consistently regardless of UI
- Maintain clear separation of concerns