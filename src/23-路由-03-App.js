import React from 'react';
import { BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
function LoginInfo(props) {
  // props.loginState='success';
  // props.loginState='fail';
  console.log(props);
  if (props.location.state.loginState==='success') {
    return <Redirect to="/admin"/>
  }else {
    return <Redirect to="/login"/>
  }
}
let FromCom=()=>{
  let pathObj={
    pathname:"/loginInfo",
    state:{
      loginState:'success'
    }
  }
  return(
      <div>
        <h1>表单验证</h1>
        <Link to={pathObj}>登录验证后页面</Link>
      </div>

  )
}

class ChildCom extends React.Component{
  render() {
    return (
        <div>
          <button onClick={this.clickEvent}>跳转到首页</button>
        </div>
    )
  }
  clickEvent=()=>{
    // console.log(this.props);
    this.props.history.push("/",{msg:"这是由childCom组件发给首页的数据"})
    // 替换掉之前的页面
    this.props.history.replace("/",{msg:"这是由childCom组件发给首页的数据"})
  //  前进
    this.props.history.go(1)
    this.props.history.goForward()
  //  后退
    this.props.history.go(-1)
    this.props.history.goBack()

  }
}
class App extends React.Component{
  render() {
    return (
        <div>
          <Router>
            <Switch>

            <Route path="/" exact component={(props)=>{console.log(props);return(<h1>首页</h1>)}}></Route>
            <Route path="/form" exact component={FromCom}></Route>
            <Route path="/login" exact component={()=>(<h1>登录页面</h1>)}></Route>
            <Route path="/loginInfo" exact component={LoginInfo}></Route>
            <Route path="/admin" exact component={()=>(<h1>后端admin页面</h1>)}></Route>
            <Route path="/abc" exact component={()=>(<h1>abc1页面</h1>)}></Route>
            <Route path="/abc" exact component={()=>(<h1>abc2页面</h1>)}></Route>
              <Route path="/child" component={ChildCom}></Route>
            </Switch>
          </Router>
        </div>
    )
  }
}
export default App;
