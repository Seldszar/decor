"use client";

import { Input, Modal, Typography } from "antd";
import { useMemo, useState } from "react";
import stripIndent from "strip-indent";

import { styleGenerator, defaultValues, formFields } from "~/themes/default";

import Editor from "~/components/Editor";
import Preview from "~/components/Preview";

function Page() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(defaultValues);

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
      />

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
    </div>
  );
}

export default Page;
