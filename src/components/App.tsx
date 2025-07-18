import { Input, Modal, Typography, message } from "antd";
import { useMemo, useState } from "react";
import stripIndent from "strip-indent";

import { styleGenerator, defaultValues, formFields } from "~/themes/default";

import Editor from "~/components/Editor";
import Preview from "~/components/Preview";

function App() {
  const [{ success }, contextHolder] = message.useMessage();

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(() => {
    const data = new URLSearchParams(location.search).get("");

    if (data) {
      return JSON.parse(atob(data as string));
    }

    return defaultValues;
  });

  const styles = useMemo(() => styleGenerator(values), [values]);

  return (
    <div className="flex">
      <Preview
        className="[background:repeating-conic-gradient(#eeeeee_0_25%,_#ffffff_0_50%)_50%_/_32px_32px] flex-1 h-screen sticky top-0"
        styles={styles}
      />

      <Editor
        values={values}
        fields={formFields}
        onChange={setValues}
        onExportClick={() => setOpen(true)}
        onCopyClick={() => {
          navigator.clipboard.writeText(
            new URL(`/?=${btoa(JSON.stringify(values))}`, location.href).href,
          );

          success("URL copied to clipboard");
        }}
      />

      <div className="bottom-0 fixed left-0 p-4 [&_a]:text-inherit text-xs">
        Made with love by{" "}
        <a href="https://seldszar.fr" target="_blank" rel="noopener noreferrer">
          Seldszar
        </a>{" "}
        &ndash;{" "}
        <a href="https://github.com/Seldszar/decor" target="_blank" rel="noopener noreferrer">
          View Source
        </a>
      </div>

      <Modal open={open} title="Generated Styles" footer={null} onCancel={() => setOpen(false)}>
        <Typography.Paragraph>
          Copy the code below in the &laquo;Custom CSS&raquo; section of the browser source
          containing your Discord Streamkit Overlay:
        </Typography.Paragraph>
        <Input.TextArea
          rows={12}
          value={stripIndent(styles).trim()}
          onClick={(event) => event.currentTarget.select()}
        />
      </Modal>

      {contextHolder}
    </div>
  );
}

export default App;
