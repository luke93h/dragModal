import React from "react";
import ReactDOM from "react-dom";
import Modal from "../../src/index";
import './style.css'
import "antd/dist/antd.css";

class App extends React.Component {
  state = {
    visible: false
  };
  onCancel = () => {
    this.setState({
      visible: false
    });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    return (
      <div className="App">
        <button style={{ marginTop: "20px" }} onClick={this.showModal}>
          开启
        </button>
        <Modal
          onCancel={this.onCancel}
          title="可拖拽浮框"
          visible={this.state.visible}
          cancelText="关闭"
          okText="确定"
          onOk={this.onCancel}
        >
          试试拖动标题
        </Modal>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
