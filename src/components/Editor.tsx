import { Button, Collapse, Form, Space } from "antd";
import { get, invoke, mergeWith } from "es-toolkit/compat";

import EditorField from "./EditorField";

export interface EditorProps<T> {
  fields: any[];
  values: T;

  onChange(values: T): void;

  onExportClick(): void;
  onCopyClick(): void;
}

function Editor<T>(props: EditorProps<T>) {
  return (
    <Form<T>
      layout="vertical"
      initialValues={props.values as any}
      className="flex flex-col flex-none shadow-xl relative w-[340px] z-10"
      onValuesChange={(changedValues) => {
        const values = mergeWith({}, props.values, changedValues, (_, value) =>
          invoke(value, "toRgbString"),
        );

        props.onChange(values);
      }}
    >
      <Collapse
        bordered={false}
        className="flex-1"
        style={{ background: "none" }}
        defaultActiveKey={get(props.fields, "0.name")}
        items={props.fields.map((field) => ({
          children: <EditorField field={field} path={[]} />,
          label: <span style={{ fontWeight: 500 }}>{field.title}</span>,
          key: field.name,
        }))}
      />

      <Space direction="vertical" size={8} className="flex-none p-4">
        <Button block type="primary" size="large" onClick={props.onExportClick}>
          Export
        </Button>
        <Button block type="text" onClick={props.onCopyClick}>
          Copy URL
        </Button>
      </Space>
    </Form>
  );
}

export default Editor;
