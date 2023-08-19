import { Checkbox, Col, ColorPicker, Form, Input, InputNumber, Row, Select } from "antd";
import { useMemo } from "react";

export interface EditorFieldProps {
  path: Array<string | number>;
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
          <ColorPicker showText style={{ width: "100%" }} />
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

    case "gap":
      return (
        <Form.Item label={field.title}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat(1)}>
                <InputNumber addonAfter="px" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat(0)}>
                <InputNumber addonAfter="px" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      );

    case "padding":
      return (
        <Form.Item label={field.title}>
          <Row gutter={[8, 8]}>
            <Col offset={6} span={12}>
              <Form.Item noStyle name={fullPath.concat(0)}>
                <InputNumber addonAfter="px" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat(3)}>
                <InputNumber addonAfter="px" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat(1)}>
                <InputNumber addonAfter="px" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col offset={6} span={12}>
              <Form.Item noStyle name={fullPath.concat(2)}>
                <InputNumber addonAfter="px" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      );

    case "position":
      return (
        <Form.Item label={field.title}>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat(0)}>
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
              <Form.Item noStyle name={fullPath.concat(1)}>
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

    case "radius":
      return (
        <Form.Item label={field.title}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat(0)}>
                <InputNumber addonAfter="px" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat(1)}>
                <InputNumber addonAfter="px" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat(3)}>
                <InputNumber addonAfter="px" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item noStyle name={fullPath.concat(2)}>
                <InputNumber addonAfter="px" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      );

    case "select":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <Select options={field.options} />
        </Form.Item>
      );

    case "size":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <InputNumber addonAfter="px" style={{ width: "100%" }} />
        </Form.Item>
      );

    case "spacing":
      return (
        <Form.Item label={field.title} name={fullPath}>
          <InputNumber addonAfter="px" style={{ width: "100%" }} />
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
