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
        type: "spacing",
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
        type: "spacing",
        title: "Corners",
      },
      {
        name: "padding",
        type: "spacing",
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
        type: "spacing",
        title: "Corners",
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
        type: "font-weight",
        title: "Font Weight",
      },
      {
        name: "color",
        type: "color",
        title: "Text Color",
      },
      {
        name: "padding",
        type: "spacing",
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

export function styleGenerator(values) {
  const { avatar, frame, layout, name, speaking } = values;

  console.log(name);

  return `
    [class*="Voice_voiceStates__"] {
      align-content: ${layout.position.y};
      box-sizing: border-box;
      display: flex;
      flex-direction: ${layout.direction};
      flex-wrap: wrap;
      gap: ${layout.gap}px;
      justify-content: ${layout.position.x};
      height: 100vh;
      margin: 0;
      padding: ${layout.padding}px;
    }

    [class*="Voice_voiceState__"] {
      background: ${frame.background};
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
      border-radius: ${frame.radius}px;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      gap: ${frame.gap}px;
      height: ${frame.height}px;
      margin-bottom: 0;
      overflow: hidden;
      padding: ${frame.padding}px;
      width: ${frame.width}px;
    }

    [class*="Voice_avatar__"] {
      border: none;
      border-radius: ${avatar.radius}px;
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
      padding: ${name.padding}px;
      position: relative;
      text-align: center;
      text-overflow: ellipsis;
      transition: 0.2s color;
    }

    [class*="Voice_name__"] {
      all: unset !important;
    }

    [class*="Voice_avatarSpeaking__"] {
      filter: grayscale(0);
      outline-color: ${speaking.background};
    }

    [class*="Voice_avatarSpeaking__"] + [class*="Voice_user__"] {
      color: ${speaking.color};
    }
  `;
}

export const defaultValues = {
  layout: {
    position: {
      x: "center",
      y: "center",
    },
    direction: "row",
    padding: 16,
    gap: 8,
  },

  frame: {
    width: 120,
    height: 146,
    radius: 4,
    padding: 4,
    gap: 4,
    background: "#000000",
  },

  avatar: {
    radius: 3,
  },

  name: {
    visible: true,
    fontFamily: "Segoe UI",
    fontSize: 16,
    color: "#ffffff",
    fontWeight: 600,
    padding: 4,
  },

  speaking: {
    background: "#03cf46",
    color: "#000000",
  },
};
