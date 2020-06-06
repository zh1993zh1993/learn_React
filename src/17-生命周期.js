import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class ComLife extends Component{
  constructor(props){
    super(props)//调用继承Component的构造函数
    this.state={
      msg:'helloWorld'
    }
    console.log("constructor构造函数");
  }
  // 将要渲染
  componentWillMount() {
    console.log("componentWillMount将要渲染");
  }
  componentDidMount() {
    console.log("componentDidMount组件渲染完毕");
  }
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("componentWillReceiveProps将要接收新的state和props");
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
  //  如果希望更新就返回为真，不希望更新就返回为false
    console.log("进行判断是否要更新内容");
   if (this.state.msg==="helloWorld") {
     return true
   }else {
     return false
   }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("componentWillUpdate组件将要更新");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate组件更新完毕");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount移除");
  }

  render() {
    console.log("render渲染函数");
    return(
        <div>
          <h1>{this.state.msg}</h1>
          <button onClick={this.changeMsg}>组件更新</button>
        </div>
    )
  }
  changeMsg=()=>{
    this.setState({
      msg:"hello 肖战"
    })
  }
}
class ParentCom extends Component{
  constructor(props){
    super(props)
    this.state={
      isShow:true
    }
  }
  render() {
    if (this.state.isShow){
      return (
          <div>
            <button onClick={this.removeCom}>移除comLife</button>
            <ComLife/>
          </div>

      )
    } else {
      return <h1>将comLife已移除</h1>
    }
  }
  removeCom=()=>{
    this.setState({
      isShow:false
    })
  }
}
ReactDOM.render(
    <ParentCom/>,
    document.querySelector('#root')
)