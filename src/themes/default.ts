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
      {
        name: "opacity",
        type: "slider",
        title: "Opacity",
        range: [0, 100],
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
        name: "textAlign",
        type: "select",
        title: "Text Align",
        options: [
          {
            value: "left",
            label: "Left",
          },
          {
            value: "center",
            label: "Center",
          },
          {
            value: "right",
            label: "Right",
          },
        ],
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

const joinValues = (values: number[], suffix = "") =>
  values.map((value) => (value ? `${value}${suffix}` : 0)).join(" ");

const selectors = {
  voiceStates: '[class*="Voice_voiceStates__"]',
  voiceState: '[class*="Voice_voiceState__"]',
  avatar: '[class*="Voice_avatar__"]',
  avatarSpeaking: '[class*="Voice_avatarSpeaking__"]',
  user: '[class*="Voice_user__"]',
  name: '[class*="Voice_name__"]',
};

export function styleGenerator(values: any) {
  const { avatar, frame, layout, name, speaking } = values;

  return `
    ${selectors.voiceStates} {
      box-sizing: border-box;
      display: flex;
      flex-direction: ${layout.direction};
      flex-wrap: wrap;
      gap: ${joinValues(layout.gap, "px")};
      height: 100vh;
      margin: 0;
      padding: ${joinValues(layout.padding, "px")};
      place-content: ${joinValues(layout.position)};
    }

    ${selectors.voiceState} {
      background: ${frame.background};
      border-radius: ${joinValues(frame.radius, "px")};
      color: ${name.color};
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      gap: ${joinValues(frame.gap, "px")};
      height: ${frame.height}px;
      margin-bottom: 0;
      opacity: ${frame.opacity / 100};
      overflow: hidden;
      padding: ${joinValues(frame.padding, "px")};
      transition: 0.2s all;
      width: ${frame.width}px;
    }

    ${selectors.avatar} {
      border: none;
      border-radius: ${joinValues(avatar.radius, "px")};
      filter: grayscale(1) opacity(0.75);
      flex: 1;
      height: 100%;
      min-height: 0;
      min-width: 0;
      object-fit: cover;
      transition: 0.2s all;
      width: 100%;
    }

    ${selectors.user} {
      display: ${name.visible ? "block" : "none"};
      font-family: ${name.fontFamily};
      font-weight: ${name.fontWeight};
      font-size: ${name.fontSize}px;
      line-height: normal;
      margin: 0;
      padding: 0;
      overflow: hidden;
      padding: ${joinValues(name.padding, "px")};
      position: relative;
      text-align: center;
      text-overflow: ellipsis;
      text-align: ${name.textAlign};
      text-transform: ${name.textTransform};
      transition: 0.2s all;
    }

    ${selectors.name} {
      all: unset !important;
    }

    ${selectors.voiceState}:has(${selectors.avatarSpeaking}) {
      background: ${speaking.background};
      color: ${speaking.color};
      opacity: 1;
    }

    ${selectors.avatarSpeaking} {
      filter: none;
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
    transformOrigin: [50, 50],
    opacity: 100,
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
    textAlign: "center",
    textTransform: "none",
    padding: [4, 4, 4, 4],
  },

  speaking: {
    background: "#03cf46",
    color: "#000000",
  },
};
