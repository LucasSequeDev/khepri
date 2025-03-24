import { nativeComponentsMap } from "../../../../../src/native/ComponentsMap";
import { ButtonProps, Schema } from "../../../../interface";
import { Khepri } from "../../../khepri";

export const NativeButton = (props: ButtonProps) => {
  const buttonSchema: Schema[] = [
    {
      type: "button",
      ...props,
    },
  ];
  return <Khepri componentsMap={nativeComponentsMap} schema={buttonSchema} />;
};
