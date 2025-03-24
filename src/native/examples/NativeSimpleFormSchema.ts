import { Schema } from "../../../lib/interface";

export const nativeSimpleFormSchema: Schema[] = [
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
        type: "button",
        metadata: {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          },
          children: "Show name in console",
        },
      },
    ],
  },
];
