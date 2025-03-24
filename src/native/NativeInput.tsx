import { InputProps } from "../../lib/interface";

export const NativeInput = ({ metadata, setValue }: InputProps) => {
  return (
    <input
      {...metadata}
      value={metadata?.value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
