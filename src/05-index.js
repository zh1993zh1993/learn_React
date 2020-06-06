import React from 'react';
import ReactDOM from 'react-dom';

// 函数式组件,首字母必须大写，静态页面之类的
 function  Childcom(props) {
   console.log(props);
   let title=<h2>我是副标题</h2>
   let weather=props.weather
    // 条件判断
    let isGo=weather=='下雨'?"不出门":"出门"
   return (
       <div>
         函数式组件hello
         {title}
         <div>
           是否出门？
           <span>{isGo}</span>
         </div>
       </div>

   )
}

// 类组件的定义，动态修改数据之类的可以用类组件
class HelloWorld extends React.Component{
   render(){
     console.log(this);
     return (
         <div>
           <h1>类组件定义HELLOWORLD</h1>
           <h1>hello:{this.props.name}</h1>
           {/*一个组件中再嵌套组件*/}
           <Childcom weather={this.props.weather}/>
         </div>
     )
   }
}
//ReactDOM里面只能放一个组件，但是组件内部可以放多个组件
// ReactDOM.render(
//    <Childcom weather="出太阳"/>,
//     document.getElementById('root')
// )

ReactDOM.render(
    <HelloWorld name="老张" weather="下雨" />,
    document.getElementById('root')
)










