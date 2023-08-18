import { HTMLAttributes, ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface FrameProps extends HTMLAttributes<HTMLIFrameElement> {
  children?: ReactNode;
}

function Frame(props: FrameProps) {
  const [ref, setRef] = useState<HTMLIFrameElement>(null);

  return (
    <iframe {...props} ref={setRef}>
      {ref && createPortal(props.children, ref.contentDocument.body)}
    </iframe>
  );
}

export default Frame;
