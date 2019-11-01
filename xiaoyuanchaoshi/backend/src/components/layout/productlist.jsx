import React, { Component } from "react";
import { Table, Popconfirm, Divider, Input, InputNumber,Form } from "antd";
import { delProductById,updateProduct } from "@/api";

const EditableContext = React.createContext();
class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`
                }
              ],
              initialValue: record[dataIndex]
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class ProductList extends Component {
  state = {
    // products: [],
    editingKey: "",
  };
  columns = [
    {
      title: "商品名称",
      dataIndex: "pname",
      key: "pname",
      editable: true
    },
    {
      title: "展示图片",
      dataIndex: "pimg",
      key: "pimg",
      editable: true
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
      editable: true
    },
    {
      title: "描述信息",
      dataIndex: "description",
      key: "description",
      editable: true
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
      editable: true
    },
    {
      title: "Action",
      key: "action",
      render: ( text,record) => {
        const { editingKey } = this.state;
        const editable = this.isEditing(record);
        return editable ? (
          <span>
            <EditableContext.Consumer>
              {form => (
                <a
                  onClick={() => this.save(form, record.id)}
                  style={{ marginRight: 8 }}
                >
                  Save
                </a>
              )}
            </EditableContext.Consumer>
            <Popconfirm
              title="Sure to cancel?"
              onConfirm={() => this.cancel(record.id)}
            >
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <a
              disabled={editingKey !== ""}
              onClick={() => this.edit(record.id)}
            >
              Edit
            </a>
            <Divider type="vertical" />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.deleteProductById(text.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          </span>
        );
      }
    }
  ];
  deleteProductById(id) {
    delProductById({ id }).then(res => {
      if (res.data.code === 1) {
        this.props.getList({ startInd: this.props.startInd, count: this.props.count });
      } else {
        console.log("failed");
      }
    });
  }
  isEditing = record => record.id === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: "" });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
        this.setState({editingKey: "" });
      updateProduct({...row,id:key}).then(res=>{
        console.log(res.data)
        this.props.getList({ startInd: this.props.startInd, count: this.props.count })
      })
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }
  render() {
    const components = {
      body: {
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });
    return (
      <EditableContext.Provider value={this.props.form}>
        <Table
          components={components}
          bordered
          rowClassName="editable-row"
          pagination={{pageSize:this.props.count,total:this.props.total}}
          loading={this.props.loading}
          dataSource={this.props.products}
          onChange={this.props.handleChange}
          columns={columns}
          rowKey={text => text.id}
          className="productTable"
        />
      </EditableContext.Provider>
    );
  }
}

export default Form.create()(ProductList);
