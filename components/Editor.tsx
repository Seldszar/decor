import { Button, Collapse, Form } from "antd";
import { get, invoke, mergeWith } from "lodash-es";

import EditorField from "./EditorField";

export interface EditorProps<T> {
  fields: any[];
  values: T;

  onChange(values: T): void;
  onExportClick(): void;
}

function Editor<T>(props: EditorProps<T>) {
  return (
    <Form<T>
      layout="vertical"
      initialValues={props.values}
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

      <div className="flex-none p-4">
        <Button block type="primary" size="large" onClick={props.onExportClick}>
          Export Styles
        </Button>
      </div>
    </Form>
  );
}

export default Editor;
