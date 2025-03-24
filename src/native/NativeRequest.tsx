import { RequestProps } from "../../lib/interface";

export const NativeRequest = ({ metadata, submit }: RequestProps) => {
  return <button {...metadata} onClick={() => submit} />;
};
