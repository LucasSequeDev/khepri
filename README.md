# Template Library

Este proyecto es template para crear una biblioteca de componentes con Storybook y MDX.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```sh
npm install
```

## Levantar Entorno de Desarrollo

Para iniciar el entorno de desarrollo y visualizar los componentes, ejecuta:

```sh
npm run dev
```

## Levantar Entorno Storybook

Para iniciar el entorno de Storybook y visualizar los componentes, ejecuta:

```sh
npm run storybook
```

## Crear Stories

1. Navega a la carpeta del componente que creaste.
2. Crea un archivo `my-component.stories.tsx`.

Ejemplo:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from ".";

const meta: Meta<typeof MyComponent> = {
  title: "Components/Atoms/MyComponent",
  component: MyComponent,
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {},
};
```

## Testear Componente Nuevo

1. Navega a la carpeta del componente que creaste.
2. Crea un archivo `my-component.test.tsx`.

Ejemplo:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("debe renderizar correctamente", () => {
    render(<MyComponent />);
    expect(screen.getByText("My New Component")).toBeInTheDocument();
  });
});
```

Para ejecutar las pruebas, ejecuta:

```sh
npm run test
```

## Publicar NPM Package

Para publicar el paquete en NPM debes ejecutar el action de GitHub y crear la variable de entorno `NPM_TOKEN` en los secretos del repositorio.

¡Listo! Ahora puedes comenzar a crear tus componentes y documentarlos con Storybook y MDX.
