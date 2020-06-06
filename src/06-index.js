import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(props){
    super(props)
  //  状态（数据）--->view
  //  构造函数初始化数据，将需要改变的数据初始化到state中
    this.state={
      time:new  Date().toLocaleTimeString()
    }

  }
  render() {
    // this.state.time=new  Date().toLocaleTimeString()
    return (
        <div>
          <h1>当前时间：{this.state.time}</h1>
        </div>
    )
  }
//  生命周期函数,组件渲染完成时的函数
  componentDidMount() {
    setInterval(()=>{
      console.log(this.state.time);
      // this.state.time=new  Date().toLocaleTimeString() 错误方式
      // 正确方式：切勿直接修改state数据，直接state是不能重新渲染内容，需要使用setState
      // 通过this.setState修改完数据后并不会立即修改视图（DOM）里面的内容，
      // react会在这个函数内容所有设置状态修改完之后，体育对比虚拟DOM对象，然后再统一修改，提升性能
      //小程序也是借鉴react状态管理的操作
      this.setState({
        time:new  Date().toLocaleTimeString()
      })
      console.log(this.state.time);
    },1000)
  }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)

//不推荐这种方式
// setInterval(()=>{
// //   ReactDOM.render(
// //       <Clock />,
// //       document.getElementById('root')
// //   )
// // },1000)








