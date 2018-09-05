# dragModal
- 说明  

dragModal基于[antd Modal](https://ant.design/components/modal-cn/)开发，所有api和使用方法和antd Modal一致，仅额外添加拖拽功能

- 安装

```
npm install drag-modal
```

- 额外参数

saveDistance: 边界限定，限定浮框超出边界后，最少需保留的宽度，默认80

- 使用

[在线调试](https://codesandbox.io/s/7mr6okqm26)

``` jsx
import React from "react";
import ReactDOM from "react-dom";
import Modal from "../../src/index";
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
          saveDistance={150}
        >
          试试拖动标题
        </Modal>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
