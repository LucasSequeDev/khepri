import { Fragment, useState } from "react";

import { ComponentsMap, Schema, Submit } from "../interface";
import { ConditionalRenderer } from "./ConditionalRenderer";

interface KhepriProps {
  componentsMap: ComponentsMap;
  schema: Schema[];
  submit?: Submit<unknown>;
  verbose?: boolean;
}

type SetValue = (
  value: string | number | readonly string[] | boolean,
  key?: string
) => void;

export type State = Record<
  string,
  string | number | readonly string[] | boolean
>;

interface KhepriFactoryProps extends KhepriProps {
  setValue: SetValue;
  state: State;
}

const log = () => {
  return (verbose: boolean, ...args: unknown[]) => {
    if (verbose) {
      console.log(...args);
    }
  };
};

const verboseLog = log();

export const Khepri = (props: KhepriProps) => {
  const { verbose = false } = props;

  verboseLog(verbose, "Khepri component initialized");

  const [state, setState] = useState<State>(() => {
    const initialState: State = {};

    const initializeState = (schemas: Schema[]) => {
      schemas.forEach((schema) => {
        switch (schema.type) {
          case "input":
          case "textarea": {
            const { metadata } = schema;

            if (metadata) {
              const { name, defaultValue } = metadata;
              if (name) {
                initialState[name] = "";
                if (defaultValue !== undefined) {
                  initialState[name] = defaultValue;
                }
              }
            }
            break;
          }
          case "checkbox": {
            const { metadata } = schema;
            if (metadata) {
              const { name, defaultChecked } = metadata;
              if (name && defaultChecked !== undefined) {
                initialState[name] = defaultChecked ?? "";
              }
            }
            break;
          }
          case "radio": {
            const { metadata } = schema;
            if (metadata) {
              const { name, value, defaultChecked } = metadata;
              if (name && defaultChecked && value !== undefined) {
                initialState[name] = value;
              }
            }
            break;
          }
          case "select": {
            const { metadata } = schema;
            if (metadata) {
              const { name, defaultValue } = metadata;
              const { options } = schema;

              if (
                name &&
                defaultValue !== undefined &&
                options &&
                options.length > 0
              ) {
                const option = options.filter(
                  (option) => option.metadata?.value === defaultValue
                );

                if (option.length > 0) {
                  initialState[name] = defaultValue;
                }
              }
            }
            break;
          }
          case "container": {
            if (schema.children) {
              initializeState(schema.children);
            }
            break;
          }

          default:
            return null;
        }
      });
    };

    initializeState(props.schema);
    verboseLog(verbose, "Initial state:", initialState);
    return initialState;
  }); // Revisar esta parte con zustand?

  const setValue: SetValue = (value, key) => {
    if (!key) return;

    verboseLog(verbose, "Setting value:", key, value);
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <Fragment>
      <div style={{ display: "flex" }}>
        <KhepriFactory {...props} setValue={setValue} state={state} />
      </div>
    </Fragment>
  );
};

const KhepriFactory = (props: KhepriFactoryProps) => {
  const { verbose = false } = props;
  verboseLog(verbose, "KhepriFactory component initialized");
  return (
    <Fragment>
      {props.schema.map((schema, index) => (
        <ConditionalRenderer
          key={index}
          conditions={schema.conditions}
          state={props.state}
        >
          {(() => {
            verboseLog(verbose, "Rendering schema:", schema);
            switch (schema.type) {
              case "input": {
                const Component = props.componentsMap[schema.type];

                if (!Component) {
                  return null;
                }

                return (
                  <Component
                    key={index}
                    metadata={schema.metadata}
                    setValue={(value) =>
                      props.setValue(value, schema.metadata?.name)
                    }
                  />
                );
              }
              case "textarea": {
                const Component = props.componentsMap[schema.type];

                if (!Component) {
                  return null;
                }
                return (
                  <Component
                    key={index}
                    metadata={schema.metadata}
                    setValue={(value) =>
                      props.setValue(value, schema.metadata?.name)
                    }
                  />
                );
              }

              case "checkbox": {
                const Component = props.componentsMap[schema.type];

                if (!Component) {
                  return null;
                }

                return (
                  <Component
                    key={index}
                    metadata={schema.metadata}
                    setValue={(value) =>
                      props.setValue(value, schema.metadata?.name)
                    }
                  />
                );
              }

              case "radio": {
                const Component = props.componentsMap[schema.type];

                if (!Component) {
                  return null;
                }

                return (
                  <Component
                    key={index}
                    metadata={schema.metadata}
                    setValue={(value) =>
                      props.setValue(value, schema.metadata?.name)
                    }
                  />
                );
              }

              case "select": {
                const Component = props.componentsMap[schema.type];

                if (!Component) {
                  return null;
                }

                return (
                  <Component
                    key={index}
                    metadata={schema.metadata}
                    options={schema.options || []}
                    setValue={(value) =>
                      props.setValue(value, schema.metadata?.name)
                    }
                  />
                );
              }

              case "container": {
                const Component = props.componentsMap[schema.type];

                if (!Component) {
                  return null;
                }
                return (
                  <Component key={index} metadata={schema.metadata}>
                    <KhepriFactory
                      submit={props.submit}
                      schema={schema.children || []}
                      componentsMap={props.componentsMap}
                      setValue={props.setValue}
                      state={props.state}
                      verbose={props.verbose}
                    />
                  </Component>
                );
              }

              case "label": {
                const Component = props.componentsMap[schema.type];
                if (!Component) {
                  return null;
                }
                return <Component key={index} metadata={schema.metadata} />;
              }

              case "button": {
                const Component = props.componentsMap[schema.type];

                if (!Component) {
                  return null;
                }
                return <Component key={index} metadata={schema.metadata} />;
              }

              case "request": {
                const Component = props.componentsMap[schema.type];
                const { submit } = props;

                if (Component && submit) {
                  return (
                    <Component
                      key={index}
                      metadata={schema.metadata}
                      submit={() => submit(props.state)} // TODO ARREGLAR ESTOOOO!!!!
                    />
                  );
                }
                return null;
              }

              default:
                return null;
            }
          })()}
        </ConditionalRenderer>
      ))}
    </Fragment>
  );
};
