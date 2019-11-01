import React, { Component } from "react";
import { Modal, Button, Form, Select, Input } from "antd";
import { addProduct } from "@/api";
class SureDialog extends Component {
  state = {
    visible: false,
    confirmLoading: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true
    });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        addProduct(values).then(res=>{
          console.log(res.data)
          this.setState({
            visible: false
          });
          this.props.getList({ startInd: this.props.startInd, count: this.props.count })
        })
        this.setState({
          confirmLoading: false
        })
      }
    });
    // setTimeout(() => {
    //   this.setState({
    //     visible: false,
    //     confirmLoading: false
    //   });
    // }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };
  
  render() {
    const { visible, confirmLoading } = this.state;
    const { modalTitle, title } = this.props;
    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="sureDialogBtn">
        <Button type="primary" onClick={this.showModal}>
          {modalTitle}
        </Button>
        <Modal
          title={title}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            onSubmit={this.handleSubmit}
          >
            <Form.Item label="商品名称">
              {getFieldDecorator("pname", {
                rules: [{ required: true, message: "Please input your pname!" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="商品图片">
              {getFieldDecorator("pimg", {
                rules: [{ required: true, message: "Please input your pimg!" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="商品价格">
              {getFieldDecorator("price", {
                rules: [{ required: true, message: "Please input your price!" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="商品描述">
              {getFieldDecorator("description", {
                rules: [{ required: true, message: "Please input your description!" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="商品类型">
              {getFieldDecorator("type", {
                rules: [
                  { required: true, message: "Please select your type!" }
                ]
              })(
                <Select>
                  <Option value="1">水果</Option>
                  <Option value="2">干果</Option>
                  <Option value="3">蔬菜</Option>
                  <Option value="4">乳制品</Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create({ name: 'coordinated' })(SureDialog);
