import React from 'react';
//hash 模式
// import {HashRouter as Router,Link,Route}from 'react-router-dom'

// history 模式/后端配合使用
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
function Home() {
  return (
      <div>
        <h1>admin首页</h1>
      </div>
  )
}
function Me() {
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

class App extends React.Component{
  render() {
    return (
        <div id="app">
          <Router>
            <Route path="/" exact component={()=>(<div>首页</div>)}/>
            <Route path="/me" component={()=>(<div>me</div>)}/>
            <Route path="/product" component={()=>(<div>产品</div>)}/>
          </Router>
          <div>所有页面普通内容</div>
          {/*<Router basename="/admin">*/}
            {/*<div className="nav">*/}
            {/*  <Link to="/">Home</Link>*/}
            {/*  <Link to="/product">Product</Link>*/}
            {/*  <Link to="/me">个人中心</Link>*/}
            {/*</div>*/}
          <Router>
            <Route path="/admin/" exact component={Home}/>
            <Route path="/admin/product" exact component={Product}/>
            <Route path="/admin/me" exact component={Me}/>
          </Router>
        </div>
    )
  }
}
export default App;
