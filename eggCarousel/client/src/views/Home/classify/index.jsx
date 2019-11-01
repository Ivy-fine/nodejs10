/*
 * @Author: fjn
 * @Date: 2019-10-25 11:29:36
 * @Last Modified by: fjn
 * @Last Modified time: 2019-10-28 11:24:51
 */
import React, { Component } from "react";
import axios from "@/utils/httpAxios";
import BScroll from "better-scroll";
import "@/common/css/classify.css";
import { connect } from "react-redux";
class CLassify extends Component {
    state = {
        navlist: [],
        typeInd: 1,
        rbs: {},
        products: [],
        rightitems: [],
        rightHeights: []
    };
    componentDidMount() {
        axios.get("/getProductType").then(res => {
            this.setState({
                navlist: res.data.result
            });
        });
        this.init();
    }
    async init() {
        await axios
            .get("/getProducts", {
                params: { ind: 0, pageSize: this.props.count }
            })
            .then(res => {
                this.setState({
                    products: res.data.result.result,
                    rbs: new BScroll(".rightside", {
                        click: true,
                        probeType: 3
                    }),
                    rightitems: [...this.refs.rightlist.children]
                });
                this.state.rbs.on("scroll", this.scroll.bind(this));
            });
        this.setState({
            rightHeights: this.getRightHeights(this.state.rightitems)
        });
    }
    getRightHeights(items = []) {
        let arr = [0];
        let hs = 0;
        items.forEach(item => {
            hs += item.offsetHeight;
            arr.push(hs);
        });
        return arr;
    }
    changeType(typeid) {
        this.setState({
            typeInd: typeid
        });
        this.state.rbs.scrollToElement(this.state.rightitems[typeid - 1], 300);
    }
    scroll() {
        let scrollY = Math.abs(this.state.rbs.y);
        let ind = 0;
        this.state.rightHeights.forEach((h, i) => {
            if (scrollY >= h && scrollY < this.state.rightHeights[i + 1]) {
                ind = i + 1;
                this.setState({
                    typeInd: ind
                });
            }
        });
    }
    render() {
        let { navlist, typeInd } = this.state;
        return (
            <div className='classify'>
                <div className='left_side'>
                    <ul>
                        {navlist.map(nav => {
                            return (
                                <li
                                    key={nav.typeid}
                                    className={
                                        typeInd === nav.typeid ? "active" : ""
                                    }
                                    onClick={this.changeType.bind(
                                        this,
                                        nav.typeid
                                    )}>
                                    {nav.typename}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='rightside'>
                    <div className='rightlist' ref='rightlist'>
                        {this.state.navlist.map(type => {
                            return (
                                <div className='rightitem' key={type.typeid}>
                                    <h3>{type.typename}</h3>
                                    {this.state.products
                                        .filter(
                                            item => item.type === type.typeid
                                        )
                                        .map(pro => {
                                            return (
                                                <dl key={pro.id}>
                                                    <dt>
                                                        <img
                                                            src={
                                                                "http://localhost:7001/public/" +
                                                                pro.pimg
                                                            }
                                                            alt={
                                                                pro.description
                                                            }
                                                        />
                                                    </dt>
                                                    <dd>
                                                        <p>{pro.pname}</p>
                                                        <p>￥{pro.price}</p>
                                                    </dd>
                                                </dl>
                                            );
                                        })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            count: state.count
        };
    },
    dispatch => {
        return {};
    }
)(CLassify);
