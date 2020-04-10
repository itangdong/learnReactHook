import React from 'react';
import {
  Select,
  Row,
  Col,
  Button,
  Form,
} from 'antd';

import styles from './style.less';

const { Option } = Select;
const { Item } = Form;

function Search(props) {
  const [form] = Form.useForm();
  // 查询按钮
  function onFinish(values) {
    props.onSearch(values)
  }
  // 重置按钮
  function onReset() {
    form.resetFields()
    props.onSearch();
  }
  return (
    <Form labelCol={{ span: 8 }} form={form} wrapperCol={{ span: 16 }} onFinish={onFinish}>
      <Row>
        <Col span={6}>
          <Item label="性别">
            <Item name="sex">
              <Select className={styles['w100']}>
                <Option key="man" value="man">男</Option>
                <Option key="women" value="women">女</Option>
              </Select>
            </Item>
          </Item>
        </Col>
        <Col span={4}>
          <Item>
            <Button type="primary" htmlType="submit">搜索</Button>
          </Item>
        </Col>
        <Col span={4}>
          <Item>
            <Button htmlType="button" onClick={onReset}>重置</Button>
          </Item>
        </Col>
      </Row>
    </Form>
  );
}

export default Search;
