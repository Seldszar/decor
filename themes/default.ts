export const formFields = [
  {
    name: "layout",
    type: "collapse",
    title: "Layout",
    children: [
      {
        name: "position",
        type: "position",
        title: "Position",
      },
      {
        name: "direction",
        type: "direction",
        title: "Direction",
      },
      {
        name: "padding",
        type: "padding",
        title: "Padding",
      },
      {
        name: "gap",
        type: "gap",
        title: "Gap",
      },
    ],
  },
  {
    name: "frame",
    type: "collapse",
    title: "Frame",
    children: [
      {
        name: "width",
        type: "size",
        title: "Width",
      },
      {
        name: "height",
        type: "size",
        title: "Height",
      },
      {
        name: "radius",
        type: "radius",
        title: "Border Radius",
      },
      {
        name: "padding",
        type: "padding",
        title: "Padding",
      },
      {
        name: "gap",
        type: "gap",
        title: "Gap",
      },
      {
        name: "background",
        type: "color",
        title: "Background",
      },
    ],
  },
  {
    name: "avatar",
    title: "Avatar",
    type: "collapse",
    children: [
      {
        name: "radius",
        type: "radius",
        title: "Border Radius",
      },
    ],
  },
  {
    name: "name",
    title: "Name",
    type: "collapse",
    children: [
      {
        name: "visible",
        type: "checkbox",
        title: "Is Visible",
      },
      {
        name: "fontFamily",
        type: "text",
        title: "Font Family",
      },
      {
        name: "fontSize",
        type: "size",
        title: "Font Size",
      },
      {
        name: "fontWeight",
        type: "select",
        title: "Font Weight",
        options: [
          {
            value: 400,
            label: "Normal",
          },
          {
            value: 500,
            label: "Medium",
          },
          {
            value: 600,
            label: "Semibold",
          },
          {
            value: 700,
            label: "Bold",
          },
        ],
      },
      {
        name: "color",
        type: "color",
        title: "Text Color",
      },
      {
        name: "textTransform",
        type: "select",
        title: "Text Transform",
        options: [
          {
            label: "Default",
            value: "none",
          },
          {
            label: "Capitalize",
            value: "capitalize",
          },
          {
            label: "Lowercase",
            value: "lowercase",
          },
          {
            label: "Uppercase",
            value: "uppercase",
          },
        ],
      },
      {
        name: "padding",
        type: "padding",
        title: "Padding",
      },
    ],
  },
  {
    name: "speaking",
    title: "Speaking",
    type: "collapse",
    children: [
      {
        name: "background",
        type: "color",
        title: "Background",
      },
      {
        name: "color",
        type: "color",
        title: "Text Color",
      },
    ],
  },
];

const joinValues = (values: number[]) =>
  values.map((value) => (value ? `${value}px` : 0)).join(" ");

export function styleGenerator(values) {
  const { avatar, frame, layout, name, speaking } = values;

  return `
    [class*="Voice_voiceStates__"] {
      align-content: ${layout.position[1]};
      box-sizing: border-box;
      display: flex;
      flex-direction: ${layout.direction};
      flex-wrap: wrap;
      gap: ${joinValues(layout.gap.reverse())};
      justify-content: ${layout.position[0]};
      height: 100vh;
      margin: 0;
      padding: ${joinValues(layout.padding)};
    }

    [class*="Voice_voiceState__"] {
      background: ${frame.background};
      border-radius: ${joinValues(frame.radius)};
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      gap: ${joinValues(frame.gap.reverse())};
      height: ${frame.height}px;
      margin-bottom: 0;
      overflow: hidden;
      padding: ${joinValues(frame.padding)};
      width: ${frame.width}px;
    }

    [class*="Voice_avatar__"] {
      border: none;
      border-radius: ${joinValues(avatar.radius)};
      filter: grayscale(1) opacity(0.75);
      flex: 1;
      min-height: 0;
      object-fit: cover;
      outline: 100vmax solid transparent;
      transition: 0.2s filter, outline-color;
      width: 100%;
    }

    [class*="Voice_user__"] {
      color: ${name.color};
      display: ${name.visible ? "block" : "none"};
      font-family: ${name.fontFamily};
      font-weight: ${name.fontWeight};
      font-size: ${name.fontSize}px;
      line-height: normal;
      margin: 0;
      padding: 0;
      overflow: hidden;
      padding: ${joinValues(name.padding)};
      position: relative;
      text-align: center;
      text-overflow: ellipsis;
      text-transform: ${name.textTransform};
      transition: 0.2s color;
    }

    [class*="Voice_name__"] {
      all: unset !important;
    }

    [class*="Voice_avatarSpeaking__"] {
      filter: none;
      outline-color: ${speaking.background};
    }

    [class*="Voice_avatarSpeaking__"] + [class*="Voice_user__"] {
      color: ${speaking.color};
    }
  `;
}

export const defaultValues = {
  layout: {
    position: ["center", "center"],
    direction: "row",
    padding: [16, 16, 16, 16],
    gap: [8, 8],
  },

  frame: {
    width: 120,
    height: 146,
    radius: [4, 4, 4, 4],
    padding: [4, 4, 4, 4],
    gap: [4, 4],
    background: "#000000",
  },

  avatar: {
    radius: [3, 3, 3, 3],
  },

  name: {
    visible: true,
    fontFamily: "Segoe UI",
    fontSize: 16,
    color: "#ffffff",
    fontWeight: 600,
    textTransform: "none",
    padding: [4, 4, 4, 4],
  },

  speaking: {
    background: "#03cf46",
    color: "#000000",
  },
};
