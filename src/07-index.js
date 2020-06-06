import React from 'react';
import ReactDOM from 'react-dom';
import './Tab.css'

class Tab extends React.Component{
  constructor(props){
    super(props)

  //  设置状态、数据
    this.state={
      c1:'',
      c2:''
    }
    //.bind:绑定函数
    this.clickEvent=this.clickEvent.bind(this)
  }
   
  clickEvent(e){
    console.log('click');
    console.log(e.target.dataset.index);
    let index=e.target.dataset.index;

    if(index==1){
      this.setState({
        c1:'content active',
        c2:'content'
      })
    }else {
      this.setState({
        c1:'content',
        c2:'content active'
      })
    }
  }
  render() {
    return(
        <div>
          <button data-index="1" onClick={this.clickEvent}>内容一</button>
          <button data-index="2" onClick={this.clickEvent}> 内容二</button>
          <div className={this.state.c1}>
            <h2>内容一</h2></div>
          <div className={this.state.c2}>
            <h2>内容二</h2></div>
        </div>
    )
  }
}

ReactDOM.render(
    <Tab />,
    document.getElementById('root')
)

//不推荐这种方式
// setInterval(()=>{
// //   ReactDOM.render(
// //       <Clock />,
// //       document.getElementById('root')
// //   )
// // },1000)








