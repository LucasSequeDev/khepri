import { nativeComponentsMap } from "../../../../../src/native/ComponentsMap";
import { Schema, Submit } from "../../../../interface";
import { Khepri } from "../../../khepri";

export const NativeContactForm = ({
  submit,
  schema,
}: {
  submit: Submit;
  schema: Schema[];
}) => {
  return (
    <Khepri
      componentsMap={nativeComponentsMap}
      schema={schema}
      submit={submit}
    />
  );
};
