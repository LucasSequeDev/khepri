import { ComponentsMap } from "../../lib/interface";
import { NativeButton } from "./NativeButton";
import { NativeCheckbox } from "./NativeCheckbox";
import { NativeContainer } from "./NativeContainer";
import { NativeInput } from "./NativeInput";
import { NativeLabel } from "./NativeLabel";
import { NativeRadio } from "./NativeRadio";
import { NativeRequest } from "./NativeRequest";
import { NativeSelect } from "./NativeSelect";
import { NativeTextarea } from "./NativeTextarea";

export const nativeComponentsMap: ComponentsMap = {
  input: NativeInput,
  textarea: NativeTextarea,
  checkbox: NativeCheckbox,
  radio: NativeRadio,
  select: NativeSelect,
  container: NativeContainer,
  label: NativeLabel,
  button: NativeButton,
  request: NativeRequest,
};
