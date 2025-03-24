import { LabelProps } from "../../lib/interface";

export const NativeLabel = ({ metadata }: LabelProps) => {
  return <label {...metadata}>{metadata?.children}</label>;
};
