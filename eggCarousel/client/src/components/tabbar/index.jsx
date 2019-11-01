import React, { Component } from "react";
import axios from "@/utils/httpAxios";
import { connect } from 'react-redux'
import {getMoreProduct,getTypeProduct} from '@/store/reducer/action'
class TabBar extends Component {
  state = {
    navlist: [
      {
        typeid: 0,
        typename: "全部"
      }
    ],
    typeind: 0
  };
  componentDidMount() {
    axios.get("/getProductType").then(res => {
      const list = [...this.state.navlist, ...res.data.result];
      this.setState({
        navlist: list
      });
    });
    this.props.changePageInd(0)
    this.props.getTypeProducts(this.state.typeind,0,this.props.pageSize)
  }
  changeInd(ind) {
    this.setState({
      typeind:ind
    });
    this.props.changeType(ind)
    this.props.changePageInd(0)
    this.props.getTypeProducts(ind,0,this.props.pageSize)
  }
  render() {
    return (
      <div className="tabbar">
        <div className="tabnav">
          {this.state.navlist.map(nav => {
            return (
              <span
                key={nav.typeid}
                className={this.state.typeind === nav.typeid ? "active" : ""}
                onClick={this.changeInd.bind(this, nav.typeid)}
              >
                {nav.typename}
              </span>
            );
          })}
        </div>
        <div className="tablist">
          {this.props.products.map(pro => {
            return (
              <dl key={pro.id}>
                <dt>
                  <img src={'http://localhost:7001/public/'+pro.pimg} alt={pro.description} />
                </dt>
                <dd>
                    <p>{pro.pname}</p>
                    <p>￥{pro.price}</p>
                </dd>
              </dl>
            );
          })}
          {
            <p className="more">{this.props.noMore?'没有更多了':"加载更多"}</p>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  (state)=>{
  return {
    pageInd:state.pageInd,
    products:state.products,
    pageSize:state.pageSize,
    count:state.count
  }
},(dispatch)=>{
  return {
    getProducts(type,pageInd,pageSize){
      dispatch(getMoreProduct(type,pageInd,pageSize))
    },
    getTypeProducts(type,pageInd,pageSize){
      dispatch(getTypeProduct(type,pageInd,pageSize))
    },
    changeType(typeInd){
      dispatch({
        type:"CHANGETYPE",
        typeInd
      })
    },
    changePageInd(ind){
      dispatch({
        type:'CHANGEPAGEIND',
        ind
      })
    }
  }
})(TabBar);
