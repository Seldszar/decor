import { useEffect, useState } from "react";

interface PreviewItemProps {
  index: number;
}

function PreviewItem(props: PreviewItemProps) {
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    const tick = (toggle = true) => {
      if (toggle) {
        setSpeaking((value) => !value);
      }

      timeoutId = setTimeout(tick, 500 + Math.random() * 4_500);
    };

    tick(false);

    return () => {
      if (timeoutId == null) {
        return;
      }

      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <li className="Voice_voiceState__OCoZh">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`Voice_avatar__htiqH ${speaking ? "Voice_avatarSpeaking__lE+4m" : ""}`}
        src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${props.index}`}
        alt=""
      />
      <div className="Voice_user__8fGwX">
        <span
          className="Voice_name__TALd9"
          style={{
            backgroundColor: "rgba(30, 33, 36, 0.95)",
            color: "rgb(255, 255, 255)",
            fontSize: "14px",
          }}
        >
          User {props.index + 1}
        </span>
      </div>
    </li>
  );
}

export default PreviewItem;
