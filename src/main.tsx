import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { State } from "../lib/components/khepri";
import { Submit } from "../lib/interface";
import { Khepri } from "../lib/main";
// Simula la importación de un paquete
import { nativeComponentsMap } from "./native/ComponentsMap";
import { nativeContactFormSchema } from "./native/examples/NativeContactFormSchema";

const submit: Submit = async (data: State) => {
  console.log(data);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Khepri
      componentsMap={nativeComponentsMap}
      submit={submit}
      schema={nativeContactFormSchema}
    />
  </StrictMode>
);
