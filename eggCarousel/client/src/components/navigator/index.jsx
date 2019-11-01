import React, { Component } from "react";
import axios from "@/utils/httpAxios";
class Navigator extends Component {
  state = {
    list: []
  };
  componentDidMount() {
    axios.get("/getNavigator").then(res => {
      this.setState({
          list:res.data.result
      })
    });
  }
  render() {
    return (
      <div className="navlist">
        {this.state.list.length>0 && this.state.list.map(nav => {
          return (
            <dl key={nav.id}>
              <dt>
                <i className={`fa ${nav.icon}`}></i>
              </dt>
              <dd>{nav.text}</dd>
            </dl>
          );
        })}
      </div>
    );
  }
}

export default Navigator;
