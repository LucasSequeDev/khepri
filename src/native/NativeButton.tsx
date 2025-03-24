import { ButtonProps } from "../../lib/interface";

export const NativeButton = ({ metadata }: ButtonProps) => {
  return <button {...metadata} />;
};
