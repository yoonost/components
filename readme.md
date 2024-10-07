# Dynamic Components for Next.js

[![tests](https://github.com/yoonost/components/actions/workflows/tests.yml/badge.svg)](https://github.com/yoonost/components/actions/workflows/tests.yml)

This repository contains a set of dynamic and reusable components designed for your Next.js web applications. Each component is organized and documented for quick integration and customization.

## Examples

All usage examples are located in the `src/app/*/page.tsx` files, where `*` is the component name. You can refer to these files to learn how to use each component in practice in your application.

## Installation

To use these components in your Next.js project, follow these steps:

1. **Clone the repository**  
   Download or clone the repository:
   ```bash
   git clone https://github.com/yoonost/components.git
   ```

2. **Copy the necessary files**  
   Copy the `components` and `libs` folders from this repository into your Next.js project.

3. **Configure TailwindCSS**  
   Adjust the `tailwind.config.ts` and `globals.css` files in your project to match the configuration provided in this repository. This is necessary for the correct functioning of the styles and utilities used in the components.

## Folder Structure

- `components/` – Contains all dynamic components.
- `libs/` – Contains helper libraries and utilities used by the components.
- `tailwind.config.ts` – Example Tailwind configuration to be merged with your existing setup.
- `globals.css` – Example global styles for your project.

## Usage

After copying the necessary files and configuring the setup, you can import and use the components in your Next.js pages like this:

```tsx
import { MyComponent } from '@/components/MyComponent';

export default function HomePage() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

## Customization

Feel free to customize the components and TailwindCSS configuration to fit your project's design and requirements.