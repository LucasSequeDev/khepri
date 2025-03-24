import { Fragment } from "react/jsx-runtime";

import { CheckboxProps } from "../../lib/interface";

export const NativeCheckbox = ({ metadata, setValue }: CheckboxProps) => (
  <Fragment>
    <input
      {...metadata}
      type="checkbox"
      onChange={(e) => setValue(e.target.checked)}
    />
  </Fragment>
);
