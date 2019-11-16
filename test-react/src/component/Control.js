import React, { Component, PropTypes } from "react";

const PropTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func
};

function createWarning(funcName) {
  return () => console.warn(funcName + "is not defined");
}
const defaultProps = {
  onPlus: createWarning("onPlus"),
  onSubtract: createWarning("onSubtract"),
  onRandomizeColor: createWarning("onRandomizeColor")
};

class Control extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+ 증가</button>
        <button onClick={this.props.onSubtract}>- 감소</button>
        <button onClick={this.props.onRandomizeColor}>배경색상</button>
      </div>
    );
  }
}

export default Control;
