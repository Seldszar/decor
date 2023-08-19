import Frame from "./Frame";
import PreviewItem from "./PreviewItem";

interface PreviewProps {
  className?: string;
  styles: string;
}

function Preview(props: PreviewProps) {
  return (
    <Frame className={`border-none ${props.className}`}>
      <div className="Voice_voiceContainer__adk9M">
        <ul className="Voice_voiceStates__a121W">
          {Array.from({ length: 5 }, (_, index) => (
            <PreviewItem key={index} index={index} />
          ))}
        </ul>
      </div>

      <link rel="stylesheet" href="https://streamkit.discord.com/static/css/main.323d00ee.css" />
      <style lang="style/css">{props.styles}</style>
    </Frame>
  );
}

export default Preview;
