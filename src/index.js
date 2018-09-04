
import Modal  from 'antd/lib/modal'
// import styles from 'antd/lib/modal/style'
import React, { Component } from 'react';
import DragM, {getModalWrapperNode} from './dragm'
class BuildTitle extends React.Component{
  updateTransform = ( position, tx, ty) => {
    let checkedData = this.checkBorder(position, tx, ty)
    this.modalDom.style.transform = `translate(${checkedData.tx}px,${checkedData.ty}px)`
    return checkedData
  };
  checkBorder = (position, tx, ty) => {
    let rect = this.modalDom.querySelector('.ant-modal-content').getBoundingClientRect()
    let {width} = rect
    let {saveDistance} = this.props
    let result = {tx, ty}
    if(position.initX + tx < -(width - saveDistance)){
      result.tx = -(width - saveDistance) - position.initX
    }
    if(position.initX + tx > (document.documentElement.clientWidth - saveDistance)){
      result.tx = (document.documentElement.clientWidth - saveDistance) - position.initX
    }
    if(position.initY + ty < 0){
      result.ty = -position.initY
    }
    if(position.initY + ty > (document.documentElement.clientHeight -saveDistance)){
      result.ty = (document.documentElement.clientHeight -saveDistance) - position.initY
    }
    return result
  }
  getDom = titleDom => {
    if(!titleDom) return;
    this.modalDom = getModalWrapperNode(titleDom, 'ant-modal-wrap')
  }
  render(){
    const {title}=this.props;
    return (<DragM 
      updateTransform={this.updateTransform}
      getDom={this.getDom}
    >
      <div>{title}</div>
    </DragM>)
  }
}

 class DragModal extends Component {
  constructor(props){
    super(props)
    this.state={
    transform: ''
    }
  }
  render() {
    let { title = '', saveDistance = 80, ...props } = this.props
    return <Modal
      {...props}
      title={
        <BuildTitle
          title = {title}
          saveDistance = {saveDistance}
        >
        </BuildTitle>
      }
    >
    </Modal>
  }
}
Object.assign(DragModal, Modal)
export default DragModal