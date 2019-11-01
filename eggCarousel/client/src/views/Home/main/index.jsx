import React, { Component } from 'react';
import BScroll from 'better-scroll'
import Carousel from '@/components/carousel'
import Navigator from '@/components/navigator'
import TabBar from '@/components/tabbar'
import {connect} from 'react-redux'
import {getMoreProduct} from '@/store/reducer/action'

class Main extends Component {
    state = { 
        bs:{},
        // pageInd:0,
        load:false,
        noMore:false
     }
    componentDidMount(){
        this.init()
    }
    async init(){
        await this.setState({
            bs:new BScroll(".container",{
                click:true,
                probeType:3
            })
        })
        this.state.bs.on("scroll",this.scroll.bind(this))
        this.state.bs.on("scrollEnd",this.scrollEnd.bind(this))
    }
    scroll(){
        const pullY = this.state.bs.maxScrollY - this.state.bs.y
        // console.log(pullY)
        if(pullY >= 80){
            this.setState({
                load:true
            })
        }
    }
    scrollEnd(){
        let {load} = this.state
        if(load){
            if(this.props.prolength < this.props.count){
                let pageInd = this.props.pageInd;
                pageInd++;
                this.setState({
                    load:false
                })
                this.props.getProducts(this.props.type,pageInd,this.props.pageSize)
                this.props.changePageInd(pageInd)
            }else{
                this.setState({
                    noMore:true
                })
            }
        }
        // console.log(pageInd,load)
        this.state.bs.refresh()
    }
    render() { 
        return (  
            <div className="container">
                <div className="content">
                    <Carousel/>
                    <Navigator/>
                    <TabBar noMore={this.state.noMore}/>
                </div>
            </div>
        );
    }
}
 
export default connect(
    (state)=>{
    return {
        type:state.type,
        pageSize:state.pageSize,
        count:state.count,
        prolength:state.products.length,
        pageInd:state.pageInd
    }
  },(dispatch)=>{
    return {
      changePageInd(ind){
        dispatch({
            type:"CHANGEPAGEIND",
            ind
        })
      },
      getProducts(type,pageInd,pageSize){
        dispatch(getMoreProduct(type,pageInd,pageSize))
      }
    }
  })(Main);