import { SelectProps } from "../../lib/interface";

export const NativeSelect = ({ metadata, setValue, options }: SelectProps) => (
  <select {...metadata} onChange={(e) => setValue(e.target.value)}>
    {options.map((option) => (
      <option key={option.metadata?.value} value={option.metadata?.value}>
        {option.metadata?.label}
      </option>
    ))}
  </select>
);
