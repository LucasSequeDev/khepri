import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ComponentsMap, Schema, Submit } from "../interface";
import { Khepri } from "./khepri";

const componentsMap: ComponentsMap = {
  input: () => <input />,
  textarea: () => <textarea />,
};

const submit: Submit = async (data: unknown) => {
  console.log(data);
};

const schema: Schema[] = [{ type: "input" }, { type: "textarea" }];

describe("Example", () => {
  it("debe renderizar el texto correctamente", () => {
    render(
      <Khepri componentsMap={componentsMap} submit={submit} schema={schema} />
    );
    expect(screen.getByRole("textbox", { name: "" })).toBeInTheDocument();
  });
});
