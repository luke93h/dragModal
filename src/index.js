
import Modal  from 'antd/lib/modal'
import styles from 'antd/lib/modal/style'
import React, { Component } from 'react';
import DragM from './dragm'
function getModalWrapperNode(dom, className){
  let pDom = dom.parentNode
  return pDom.classList.contains(className) ? pDom : getModalWrapperNode(pDom, className)
}
class BuildTitle extends React.Component{
  updateTransform = transformStr => {
    this.modalDom.style.transform = transformStr
  };
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
    let { title = '', ...props } = this.props
    return <Modal
      {...props}
      title={
        <BuildTitle
          title = {this.props.title}
        >
        </BuildTitle>
      }
    >
    </Modal>
  }
}
Object.assign(DragModal, Modal)
export default DragModal