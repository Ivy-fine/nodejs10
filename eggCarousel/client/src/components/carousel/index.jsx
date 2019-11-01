import React, { Component } from "react";
import axios from "@/utils/httpAxios";
import { Carousel, WingBlank } from "antd-mobile";
class Banner extends Component {
    state = {
        data: [],
        imgHeight: 200
    };
    componentDidMount() {
        axios.get("/getBannerList").then(res => {
            this.setState({
                data: res.data.result
            });
        });
    }
    render() {
        return (
            <WingBlank>
                <Carousel autoplay={false} infinite>
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href={"http://localhost:7001" + val.link}
                            style={{
                                display: "inline-block",
                                width: "100%",
                                height: this.state.imgHeight
                            }}>
                            <img
                                src={`http://localhost:7001/public/${val.pic_url}`}
                                alt=''
                                style={{
                                    width: "100%",
                                    verticalAlign: "top",
                                    height: "200px"
                                }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event("resize"));
                                    this.setState({ imgHeight: "auto" });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default Banner;
