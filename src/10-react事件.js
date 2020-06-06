import React from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component{
  constructor(props){
    super(props)
  }
  render() {

    return (
        <div >
          <form action="http://www.baidu.com">
            <div className="child" >
              <h1>helloWorld</h1>
              <button onClick={this.parentEvent}>提交</button>
            </div>
          </form>
          {/*使用ES6箭头函数传递多个参数*/}
          <button onClick={(e)=>{this.parentEvent1('msg:123',e)}}>提交</button>
        {/*不使用ES6箭头函数传递多个参数的方式*/}
        <button onClick={function (e) {
          this.parentEvent1('msg:不使用ES6',e)
        }.bind(this)}>不使用ES6的方式</button>
        </div>
    )
  }
  parentEvent=(e)=>{
    console.log(e.preventDefault);
    // 阻止默认事件的跳转
    e.preventDefault()
  }
  parentEvent1=(msg,e)=>{
    console.log(msg);
    console.log(e);
  }
}
ReactDOM.render(
    <ParentCom/>,
    document.querySelector('#root')
)