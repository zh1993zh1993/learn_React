import React from 'react';
//hash 模式
// import {HashRouter as Router,Link,Route}from 'react-router-dom'
//exact:精确查找
// history 模式/后端配合使用
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
function Home() {
  return (
      <div>
        <h1>admin首页</h1>
      </div>
  )
}
function Me(props) {
  console.log(props);
  return (
      <div>
        <h1>admin个人中心</h1>
      </div>
  )
}
function Product() {
  return (
      <div>
        <h1>admin产品页面</h1>
      </div>
  )
}
function News(props) {
  console.log(props);
  return (
      <div>
        新闻页面，新闻id：{props.match.params.id}
      </div>
  )
}
class App extends React.Component{
  render() {
    let meObj={
      pathname:"/me/",// 跳转的路径
      search:"?username=admin",//get请求的参数
      hash:"#abc",//设置的HASH值
      state:{msg:'hello world'}//传入组件的数据
    }
    return (
        <div id="app">
          <Router>
            <Route path="/" exact component={()=>(<div>首页</div>)}/>
            <Route path="/me" component={()=>(<div>me</div>)}/>
            <Route path="/product" component={()=>(<div>产品</div>)}/>
          </Router>
          <div>所有页面普通内容</div>
          <Router basename="/admin">
            <div className="nav">
              <Link to="/">Home</Link>
              <Link to="/product">Product</Link>
              <Link to={meObj} replace>个人中心</Link>
              <Link to="/news/456789">新闻页面</Link>
            </div>

            <Route path="/" exact component={Home}/>
            <Route path="/product" exact component={Product}/>
            <Route path="/me" exact component={Me}/>
            <Route path="/news/:id" component={News}/>
          </Router>
        </div>
    )
  }
}
export default App;
