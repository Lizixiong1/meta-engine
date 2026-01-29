# Getting Started

This guide will help you get started with Meta Engine quickly.

## Prerequisites

Before you begin, make sure you have:

- Node.js 16.0.0 or later
- pnpm 8.0.0 or later
- A framework of your choice (React, Vue, Angular, etc.)

## Installation

### 1. Install the core package

```bash
pnpm add @meta-engine/core
```

### 2. Install the adapter for your framework

For React:

```bash
pnpm add @meta-engine/adapter-react
```

For Vue:

```bash
pnpm add @meta-engine/adapter-vue
```

### 3. Install optional packages

```bash
pnpm add @meta-engine/form @meta-engine/table
```

## Basic Usage

### 1. Define your metadata

```javascript
const formMeta = {
  type: 'form',
  fields: [
    {
      name: 'username',
      label: 'Username',
      component: 'Input',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      component: 'Input',
      type: 'email',
      required: true
    },
    {
      name: 'submit',
      label: 'Submit',
      component: 'Button',
      type: 'submit'
    }
  ]
};
```

### 2. Create an adapter

```javascript
const antdAdapter = {
  components: {
    Input: AntdInput,
    Button: AntdButton
  },
  mapProps(metaProps) {
    return { ...metaProps };
  }
};
```

### 3. Render the component

```javascript
import { MetaEngine } from '@meta-engine/core';
import { render } from '@meta-engine/adapter-react';

const engine = new MetaEngine({
  adapters: [antdAdapter]
});

const App = () => {
  return render(formMeta, engine);
};
```

## Next Steps

- Explore the API documentation
- Learn about advanced features like permissions and interactions
- Check out the examples for different frameworks and component libraries

Happy building!