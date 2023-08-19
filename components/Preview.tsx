import Frame from "./Frame";
import PreviewItem from "./PreviewItem";

const USER_PROPS = [
  {
    name: "Actival",
    speaking: false,
  },
  {
    name: "BlinkScan",
    speaking: null,
  },
  {
    name: "Greatin",
    speaking: null,
  },
  {
    name: "Infogra",
    speaking: null,
  },
  {
    name: "HumanTreasure",
    speaking: true,
  },
];

interface PreviewProps {
  className?: string;
  styles: string;
}

function Preview(props: PreviewProps) {
  return (
    <Frame className={`border-none ${props.className}`}>
      <div className="Voice_voiceContainer__adk9M">
        <ul className="Voice_voiceStates__a121W">
          {USER_PROPS.map((props, index) => (
            <PreviewItem key={index} {...props} />
          ))}
        </ul>
      </div>

      <style lang="style/css">
        {`
          :root {
            --brand: #5865f2;
            --brand-dark: #4957f1;
            --font-primary: "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
            --grey-1: #99aab5;
            --grey-3: #737f8d;
            --grey-6: #4f545c;
            --guilds-grey: #1e2124;
            --status-grey: #604f56;
            --status-green: #3ba53b;
          }

          body {
            background-color: initial;
            font-family: var(--font-primary);
            margin: 0;
          }

          .Voice_voiceContainer__adk9M {
            color: #fff;
            font-family: gg sans;
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
          }

          .Voice_voiceStates__a121W {
            list-style-type: none;
            padding-left: 15px;
          }

          .Voice_voiceState__OCoZh {
            height: 50px;
            margin-bottom: 8px;
          }

          .Voice_avatar__htiqH {
            border: 3px solid transparent;
            border-radius: 50%;
            float: left;
            height: 50px;
            margin-right: 8px;
            width: 50px;
          }

          .Voice_avatarSpeaking__lE\+4m {
            border-color: var(--status-green);
          }

          .Voice_user__8fGwX {
            padding-top: 18px;
          }

          .Voice_name__TALd9 {
            background-color: var(--guilds-grey);
            border-radius: 3px;
            padding: 4px 6px;
          }

          .Voice_smallAvatar__tPOas {
            height: 40px;
          }

          .Voice_smallAvatarAvatar__gX9I5 {
            height: 40px;
            width: 40px;
          }

          .Voice_smallAvatarUser__pIEbt {
            padding-top: 12px;
          }

          ${props.styles}
        `}
      </style>
    </Frame>
  );
}

export default Preview;
