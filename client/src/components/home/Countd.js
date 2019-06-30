import React, { Component } from "react";
import { render } from "react-dom";

class Countd extends Component {
  constructor(props){
    super(props)
    this.tick = this.tick.bind(this)
    this.state = {seconds: props.seconds}
  }

  componentDidMount(){
    this.timer = setInterval(this.tick, 1000);
  }

  tick(){
    if (this.state.seconds > 0) {
      this.setState({seconds: this.state.seconds - 1})
    } else {
      clearInterval(this.timer);
      window.location.reload();
    }
  }
  render(){
    return <div style={{width: "100%", textAlign: "center"}}>
      <h1>{this.state.seconds}...</h1>
    </div>
  }
}

render(<countd seconds={10} />, document.getElementById("root"));
export default Countd;