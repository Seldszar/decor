import { Checkbox, Col, ColorPicker, Form, Input, InputNumber, Row, Select } from "antd";
import { useMemo } from "react";

export interface EditorFieldProps {
  path: string[];
  field: any;
}

function EditorField(props: EditorFieldProps) {
  const { field, path } = props;

  const fullPath = useMemo(() => path.concat(field.name), [field.name, path]);

  switch (field.type) {
    case "checkbox":
      return (
        <Form.Item name={fullPath} valuePropName="checked">
          <Checkbox>{field.title}</Checkbox>
        </Form.Item>
      );

    case "collapse":
      return field.children.map((item) => (
        <EditorField key={item.name} field={item} path={fullPath} />
      ));

    case "color":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <ColorPicker showText />
        </Form.Item>
      );

    case "direction":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <Select
            options={[
              {
                value: "row",
                label: "Horizontal",
              },
              {
                value: "column",
                label: "Vertical",
              },
              {
                value: "row-reverse",
                label: "Reversed Horizontal",
              },
              {
                value: "column-reverse",
                label: "Reversed Vertical",
              },
            ]}
          />
        </Form.Item>
      );

    case "font-weight":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <Select
            options={[
              {
                value: 400,
                label: "Normal",
              },
              {
                value: 500,
                label: "Medium",
              },
              {
                value: 600,
                label: "Semibold",
              },
              {
                value: 700,
                label: "Bold",
              },
            ]}
          />
        </Form.Item>
      );

    case "gap":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <InputNumber addonAfter="px" />
        </Form.Item>
      );

    case "padding":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <InputNumber addonAfter="px" />
        </Form.Item>
      );

    case "position":
      return (
        <Form.Item label={field.title}>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat("x")}>
                <Select
                  options={[
                    {
                      value: "start",
                      label: "Left",
                    },
                    {
                      value: "center",
                      label: "Center",
                    },
                    {
                      value: "end",
                      label: "Right",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat("y")}>
                <Select
                  options={[
                    {
                      value: "start",
                      label: "Top",
                    },
                    {
                      value: "center",
                      label: "Center",
                    },
                    {
                      value: "end",
                      label: "Bottom",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      );

    case "size":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <InputNumber addonAfter="px" />
        </Form.Item>
      );

    case "spacing":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <InputNumber addonAfter="px" />
        </Form.Item>
      );

    case "text":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <Input />
        </Form.Item>
      );
  }

  return null;
}

export default EditorField;
