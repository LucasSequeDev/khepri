import { Fragment } from "react/jsx-runtime";

import { RadioProps } from "../../lib/interface";

export const NativeRadio = ({ metadata, setValue }: RadioProps) => (
  <Fragment>
    <input
      {...metadata}
      type="radio"
      onChange={(e) => {
        if (e.target.checked) {
          setValue(metadata?.value ?? "");
        }
      }}
    />
  </Fragment>
);
