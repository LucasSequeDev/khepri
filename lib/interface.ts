import { TopLevelCondition } from "json-rules-engine";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  JSX,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import { State } from "./components/khepri";

export type BaseSchema = {
  conditions?: TopLevelCondition;
};

export type SetValue<T> = (value: T) => void;

export type Component<T extends keyof ComponentPropsMap> = React.ComponentType<
  ComponentPropsMap[T]
>;

export type ComponentsMap = Partial<{
  [K in keyof ComponentPropsMap]: Component<K>;
}>;

export type Submit<T = unknown> = (data: State) => Promise<T>;

export type ComponentPropsMap = {
  input: InputProps;
  textarea: TextareaProps;
  checkbox: CheckboxProps;
  radio: RadioProps;
  select: SelectProps;
  option: OptionProps;
  container: ContainerProps;
  label: LabelProps;
  button: ButtonProps;
  request: RequestProps;
};

export type Schema =
  | Input
  | Textarea
  | Checkbox
  | Radio
  | Select
  | Option
  | Container
  | Label
  | Button
  | Request;

export type InputProps = {
  metadata: Input["metadata"];
  setValue: SetValue<string>;
};
export type TextareaProps = {
  metadata: Textarea["metadata"];
  setValue: SetValue<string>;
};
export type CheckboxProps = {
  metadata: Checkbox["metadata"];
  setValue: SetValue<boolean>;
};
export type RadioProps = {
  metadata: Radio["metadata"];
  setValue: SetValue<string | number | readonly string[]>;
};
export type SelectProps = {
  metadata: Select["metadata"];
  options: Option[];
  setValue: SetValue<string | number>;
};
export type OptionProps = {
  metadata: Option["metadata"];
};
export type ContainerProps = {
  metadata: Container["metadata"];
  children: JSX.Element;
};
export type LabelProps = {
  metadata: Label["metadata"];
};
export type ButtonProps = { metadata: Button["metadata"] };
export type RequestProps = { metadata: Request["metadata"]; submit: Submit };

type Input = BaseSchema & {
  type: "input";
  metadata?: InputHTMLAttributes<HTMLInputElement>;
};

type Textarea = BaseSchema & {
  type: "textarea";
  metadata?: TextareaHTMLAttributes<HTMLTextAreaElement>;
};

type Checkbox = BaseSchema & {
  type: "checkbox";
  metadata?: InputHTMLAttributes<HTMLInputElement>;
};

type Radio = BaseSchema & {
  type: "radio";
  metadata?: InputHTMLAttributes<HTMLInputElement>;
};

type Select = BaseSchema & {
  type: "select";
  options?: Option[];
  metadata?: SelectHTMLAttributes<HTMLSelectElement>;
};

type Option = BaseSchema & {
  type: "option";
  metadata?: Omit<OptionHTMLAttributes<HTMLOptionElement>, "value"> & {
    value: string;
  };
};

type Container = BaseSchema & {
  type: "container";
  children?: Schema[];
  metadata?: HTMLAttributes<HTMLDivElement>;
};

type Label = BaseSchema & {
  type: "label";
  metadata?: LabelHTMLAttributes<HTMLLabelElement>;
};

type Button = BaseSchema & {
  type: "button";
  metadata?: ButtonHTMLAttributes<HTMLButtonElement>;
};

type Request = BaseSchema & {
  type: "request";
  metadata?: ButtonHTMLAttributes<HTMLButtonElement>;
};
