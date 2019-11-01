import React, { Component } from "react";
import { Menu, Icon, Input, Divider } from "antd";
import Addbtn from "@/components/layout/suredialog";
import ProductList from "@/components/layout/productlist";
import { getProductList, searchProduct } from "@/api";
class Section extends Component {
  rootSubmenuKeys = ["sub1", "sub2"];
  state = {
    openKeys: ["sub1"],
    products: [],
    total: 0,
    startInd: 0,
    count: 10,
    loading: false,
    searchList: [],
    showSearch: false
  };
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  getList(params) {
    getProductList(params).then(res => {
      this.setState({
        products: res.data.data,
        total: res.data.total,
        loading: false,
        showSearch: false
      });
    });
  }
  handleChange(pagination) {
    // console.log(pagination.current)
    let ind = (pagination.current - 1) * this.state.count;
    // console.log(ind)
    this.setState({
      startInd: ind,
      loading: true
    });
    this.getList({ startInd: ind, count: this.state.count });
  }
  search(val) {
    console.log(val);
    if (val !== "") {
      this.setState({
        showSearch: true
      });
    } else {
      this.setState({
        showSearch: false
      });
    }
    searchProduct({ keywords: val, field: "pname" }).then(res => {
      console.log(res);
      this.setState({
        searchList: res.data.results
      });
    });
  }
  componentDidMount() {
    this.getList({ startInd: this.state.startInd, count: this.state.count });
  }
  render() {
    const { SubMenu } = Menu;
    const { Search } = Input;
    return (
      <section className="section">
        <div className="slide-left">
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ width: "100%" }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>数据管理</span>
                </span>
              }
            >
              <Menu.Item key="1">商品管理</Menu.Item>
              <Menu.Item key="2">广告管理</Menu.Item>
              <Menu.Item key="3">导航管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="5">用户查询</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="slide-right">
          <div className="right-top">
            <Addbtn
              modalTitle="添加商品"
              title="添加商品"
              getList={this.getList.bind(this)}
              count={this.state.count}
              startInd={this.state.startInd}
            />
            <Divider type="vertical" />
            <Search
              placeholder="input search loading with enterButton"
              enterButton
              onSearch={this.search.bind(this)}
            />
          </div>
          <div className="searchRes">
            {this.state.showSearch && (
              <div>
                <h3>搜索结果</h3>
                <ProductList
                  products={this.state.searchList}
                  total={this.state.searchList.length}
                  getList={this.getList.bind(this)}
                  count={5}
                />
              </div>
            )}
          </div>
          <ProductList
            products={this.state.products}
            getList={this.getList.bind(this)}
            total={this.state.total}
            handleChange={this.handleChange.bind(this)}
            // pagination={this.state.pagination}
            loading={this.state.loading}
            count={this.state.count}
            startInd={this.state.startInd}
          />
        </div>
      </section>
    );
  }
}

export default Section;
