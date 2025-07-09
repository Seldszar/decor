import { HTMLAttributes, ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface FrameProps extends HTMLAttributes<HTMLIFrameElement> {
  children?: ReactNode;
}

function Frame(props: FrameProps) {
  const [ref, setRef] = useState<HTMLIFrameElement | null>(null);

  return (
    <iframe {...props} ref={setRef}>
      {ref?.contentDocument && createPortal(props.children, ref.contentDocument?.body)}
    </iframe>
  );
}

export default Frame;
