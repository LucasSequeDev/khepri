import "react-json-pretty/themes/acai.css";

import { useState } from "react";
import JSONPretty from "react-json-pretty";

import { State } from "../../lib/components/khepri";
import { Submit } from "../../lib/interface";
import { Khepri } from "../../lib/main"; // Simula la importación de un paquete
import { nativeComponentsMap } from "../native/ComponentsMap";
import { nativeContactFormSchema } from "../native/examples/NativeContactFormSchema";

export const Layout = () => {
  const [state, setState] = useState<State>({});

  const submit: Submit = async (data: State) => {
    setState(data);
  };

  return (
    <div className="text-white grid grid-cols-3 p-4 gap-4">
      <div className="flex flex-col gap-2">
        <section className="border-2 rounded-md border-[#1a0328] p-2 shadow-2xl shadow-[#1a0328] flex flex-col gap-2">
          <span className="font-semibold">Schema</span>
          <JSONPretty
            id="json-pretty"
            className="h-[45vh] overflow-y-auto rounded-md custom-scroll"
            data={nativeContactFormSchema}
          ></JSONPretty>
        </section>
        <section className="border-2 rounded-md border-[#1a0328] p-2 shadow-2xl shadow-[#1a0328] flex flex-col gap-2">
          <span className="font-semibold">Components Map</span>
          <JSONPretty
            id="json-pretty"
            className="overflow-y-auto rounded-md custom-scroll "
            data={{
              input: "NativeInput",
              textarea: "NativeTextarea",
              checkbox: "NativeCheckbox",
              radio: "NativeRadio",
              select: "NativeSelect",
              container: "NativeContainer",
              label: "NativeLabel",
              button: "NativeButton",
              request: "NativeRequest",
            }}
          ></JSONPretty>
        </section>
      </div>
      <section className="border-2 rounded-md border-[#1a0328] p-2 shadow-2xl shadow-[#1a0328] flex flex-col gap-2">
        <span className="font-semibold">Form</span>
        <Khepri
          componentsMap={nativeComponentsMap}
          submit={submit}
          schema={nativeContactFormSchema}
        />
      </section>
      <section className="border-2 rounded-md border-[#1a0328] p-2 shadow-2xl shadow-[#1a0328] flex flex-col gap-2">
        <span className="font-semibold">Output</span>
        <JSONPretty
          id="json-pretty"
          className="overflow-y-auto rounded-md custom-scroll "
          data={state}
        ></JSONPretty>
      </section>
    </div>
  );
};
