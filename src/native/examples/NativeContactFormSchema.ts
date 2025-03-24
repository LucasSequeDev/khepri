import { Schema } from "../../../lib/interface";

export const nativeContactFormSchema: Schema[] = [
  {
    type: "container",
    metadata: {
      style: {
        backgroundColor: "white",
        color: "black",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        minWidth: "600px",
        gap: "8px",
        fontFamily: "sans-serif",
      },
    },
    children: [
      {
        type: "container",
        metadata: {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          },
        },
        children: [
          {
            type: "label",
            metadata: {
              children: "Name",
              style: {
                fontWeight: 600,
              },
            },
          },

          {
            type: "input",
            metadata: {
              name: "fullName",
              placeholder: "Typing kepri...",
              type: "text",
              style: {
                borderRadius: "4px",
                padding: "8px 12px",
                border: "1px solid #ccc",
                width: "100%",
                boxSizing: "border-box",
              },
            },
          },
        ],
      },
      {
        type: "container",
        metadata: {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          },
        },
        children: [
          {
            type: "container",
            metadata: {
              style: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              },
            },
            children: [
              {
                type: "label",
                metadata: {
                  children: "Email",
                  style: {
                    fontWeight: 600,
                  },
                },
              },
              {
                type: "input",
                metadata: {
                  name: "emailAddress",
                  placeholder: "Email Address",
                  type: "email",
                  style: {
                    borderRadius: "4px",
                    padding: "8px 12px",
                    border: "1px solid #ccc",
                    width: "100%",
                    boxSizing: "border-box",
                  },
                },
              },
            ],
          },
          {
            type: "container",
            metadata: {
              style: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              },
            },
            children: [
              {
                type: "label",
                metadata: {
                  children: "Age",
                  style: {
                    fontWeight: 600,
                  },
                },
              },

              {
                type: "input",
                metadata: {
                  name: "age",
                  placeholder: "Age",
                  type: "number",
                  style: {
                    borderRadius: "4px",
                    padding: "8px 12px",
                    border: "1px solid #ccc",
                    width: "100%",
                    boxSizing: "border-box",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        type: "container",
        metadata: {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          },
        },
        children: [
          {
            type: "container",
            metadata: {
              style: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              },
            },
            children: [
              {
                type: "label",
                metadata: {
                  children: "Secret field",
                  style: {
                    fontWeight: 600,
                    color: "orange",
                    textDecoration: "underline",
                  },
                },
              },
              {
                type: "textarea",
                metadata: {
                  name: "secretField",
                  placeholder: "Send a secret message...",
                  minLength: 10,
                  maxLength: 500,
                  style: {
                    borderRadius: "4px",
                    padding: "8px 12px",
                    border: "1px solid #ccc",
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: "orange",
                    color: "white",
                  },
                },
              },
            ],
          },
        ],
        conditions: {
          all: [
            {
              fact: "fullName",
              operator: "equal",
              value: "kepri",
            },
          ],
        },
      },
      {
        type: "container",
        metadata: {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          },
        },
        children: [
          {
            type: "container",
            metadata: {
              style: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              },
            },
            children: [
              {
                type: "label",
                metadata: {
                  children: "Message",
                  style: {
                    fontWeight: 600,
                  },
                },
              },
              {
                type: "textarea",
                metadata: {
                  name: "message",
                  placeholder: "Please describe your request in detail...",
                  minLength: 10,
                  maxLength: 500,
                  style: {
                    borderRadius: "4px",
                    padding: "8px 12px",
                    border: "1px solid #ccc",
                    width: "100%",
                    boxSizing: "border-box",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        type: "container",
        metadata: {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          },
        },
        children: [
          {
            type: "container",
            metadata: {
              style: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              },
            },
            children: [
              {
                type: "label",
                metadata: {
                  children: "Preferred Contact Method",
                  style: {
                    fontWeight: 600,
                  },
                },
              },
              {
                type: "container",
                metadata: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  },
                },
                children: [
                  {
                    type: "container",
                    metadata: {
                      style: {
                        display: "flex",
                      },
                    },
                    children: [
                      {
                        type: "radio",
                        metadata: {
                          name: "preferredContact",
                          value: "message",
                          defaultChecked: true,
                          style: {
                            marginRight: "2px",
                          },
                        },
                      },
                      {
                        type: "label",
                        metadata: {
                          children: "Message",
                        },
                      },
                    ],
                  },
                  {
                    type: "container",
                    metadata: {
                      style: {
                        display: "flex",
                      },
                    },
                    children: [
                      {
                        type: "radio",
                        metadata: {
                          name: "preferredContact",
                          value: "phone",
                          style: {
                            marginRight: "2px",
                          },
                        },
                      },
                      {
                        type: "label",
                        metadata: {
                          children: "Phone *",
                        },
                      },
                    ],
                  },
                  {
                    type: "container",
                    metadata: {
                      style: {
                        display: "flex",
                      },
                    },
                    children: [
                      {
                        type: "radio",
                        metadata: {
                          name: "preferredContact",
                          value: "email",
                          style: {
                            marginRight: "2px",
                          },
                        },
                      },
                      {
                        type: "label",
                        metadata: {
                          children: "Email *",
                        },
                      },
                    ],
                  },
                  {
                    type: "label",
                    metadata: {
                      children: "* required a deparment",
                      style: {
                        fontSize: "10px",
                        color: "#gray",
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "container",
        metadata: {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          },
        },
        children: [
          {
            type: "label",
            metadata: {
              children: "Department",
              style: {
                fontWeight: 600,
              },
            },
          },

          {
            type: "select",
            metadata: {
              name: "department",
              style: {
                borderRadius: "4px",
                padding: "8px 12px",
                border: "1px solid #ccc",
                width: "100%",
                boxSizing: "border-box",
              },
            },
            options: [
              {
                type: "option",
                metadata: {
                  value: "",
                  children: "Select a department",
                  disabled: true,
                },
              },
              {
                type: "option",
                metadata: { value: "sales", children: "Sales" },
              },
              {
                type: "option",
                metadata: { value: "support", children: "Support" },
              },
              {
                type: "option",
                metadata: { value: "marketing", children: "Marketing" },
              },
            ],
          },
        ],
        conditions: {
          all: [
            {
              fact: "preferredContact",
              operator: "in",
              value: ["phone", "email"],
            },
          ],
        },
      },
      {
        type: "container",
        metadata: {
          style: {
            display: "flex",
          },
        },
        children: [
          {
            type: "checkbox",
            metadata: {
              name: "termsAccepted",
              defaultChecked: false,
              style: {
                marginRight: "2px",
              },
            },
          },
          {
            type: "label",
            metadata: {
              children: "I accept the terms and conditions",
            },
          },
        ],
      },
      {
        type: "request",
        metadata: {
          type: "submit",
          children: "Submit Request",
          style: {
            width: "100%",
            padding: "10px",
            cursor: "pointer",
            marginTop: "15px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "5px",
          },
        },
        conditions: {
          all: [
            {
              fact: "fullName",
              operator: "notEqual",
              value: "",
            },
            {
              fact: "emailAddress",
              operator: "notEqual",
              value: "",
            },
            {
              fact: "age",
              operator: "notEqual",
              value: "",
            },
          ],
        },
      },
      {
        type: "button",
        metadata: {
          children: "Complete name, email and age",
          disabled: true,
          style: {
            width: "100%",
            padding: "10px",
            cursor: "wait",
            marginTop: "15px",
            backgroundColor: "red",
            color: "#fff",
            borderRadius: "5px",
          },
        },
        conditions: {
          any: [
            {
              fact: "fullName",
              operator: "equal",
              value: "",
            },
            {
              fact: "emailAddress",
              operator: "equal",
              value: "",
            },
            {
              fact: "age",
              operator: "equal",
              value: "",
            },
          ],
        },
      },
    ],
  },
];
