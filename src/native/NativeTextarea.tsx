import { TextareaProps } from "../../lib/interface";

export const NativeTextarea = ({ metadata, setValue }: TextareaProps) => {
  return (
    <textarea
      {...metadata}
      value={metadata?.value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
