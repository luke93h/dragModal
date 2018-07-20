import React from "react";

export function getModalWrapperNode(dom, className){
  let pDom = dom.parentNode
  return pDom.classList.contains(className) ? pDom : getModalWrapperNode(pDom, className)
}

export default class DragM extends React.Component {
  position = {
    initX: 0,
    initY: 0,
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
  };
  start = event => {
    if (event.button != 0) {
      //只允许左键，右键问题在于不选择conextmenu就不会触发mouseup事件
      return;
    }
    document.addEventListener("mousemove", this.docMove);
    this.position.startX = event.pageX - this.position.dx;
    this.position.startY = event.pageY - this.position.dy;
  };
  docMove = event => {
    const tx = event.pageX - this.position.startX;
    const ty = event.pageY - this.position.startY;
    let checkedData = this.props.updateTransform( this.position, tx, ty)
    this.position.dx = checkedData.tx;
    this.position.dy = checkedData.ty;
  };
  docMouseUp = event => {
    document.removeEventListener("mousemove", this.docMove);
  };
  componentDidMount() {
    this.tdom.addEventListener("mousedown", this.start);
    //用document移除对mousemove事件的监听
    document.addEventListener("mouseup", this.docMouseUp);
    let rect =  getModalWrapperNode(this.tdom, 'ant-modal-content').getBoundingClientRect()
    this.position.initX = rect.x
    this.position.initY = rect.y
  }
  componentWillUnmount() {
    this.tdom.removeEventListener("mousedown", this.start);
    document.removeEventListener("mouseup", this.docMouseUp);
    document.removeEventListener("mousemove", this.docMove);
  }
  render() {
    const { children } = this.props;
    const newStyle = { ...children.props.style, cursor: "move", userSelect: "none" };
    return React.cloneElement(React.Children.only(children), {
      ref: tdom => {
        this.props.getDom(tdom)
        return (this.tdom = tdom);
      },
      style: newStyle,
    });
  }
}