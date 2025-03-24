import { ContainerProps } from "../../lib/interface";

export const NativeContainer = ({ metadata, children }: ContainerProps) => {
  return <div {...metadata}>{children}</div>;
};
