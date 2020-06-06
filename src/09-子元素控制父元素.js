import React from 'react';
import ReactDOM from 'react-dom';

// 子传父
class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state={
      childDate:null
    }
  }
  render() {
    return(
        <div>
          <h1>子元素传递给父元素的数据:{this.state.childDate}</h1>
          <ChildCom setChildDate={this.setChildDate}/>
        </div>
    )
  }
  setChildDate=(date)=>{
    this.setState({
      childDate:date
    })
  }
}
class ChildCom extends React.Component{
  constructor(props){
    super(props)
    this.state={
      msg:"helloWorld"
    }
    // this.sendDate=this.sendDate.bind(this) 或者使用箭头函数
}
render() {
    return(
        <div>
          <button onClick={this.sendDate}>传递helloWorld给父元素</button>
          <button onClick={()=>{this.props.setChildDate('直接调用props的函数')}}>直接调用props的函数</button>
        </div>
    )
}
sendDate=()=>{
  // console.log(this.state.msg);
  // console.log(this.props);
  // 将子元素传递到父元素，实际就是调用父元素传递进来的父元素函数
  this.props.setChildDate(this.state.msg)
}

}
ReactDOM.render(
  <ParentCom/>,
    document.querySelector('#root')
)