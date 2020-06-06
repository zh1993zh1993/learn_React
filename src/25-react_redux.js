import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux'
class Counter extends React.Component{
  render() {
    //计数，通过store的state传给props，直接通过props就可以将state的数据获取
    const value=this.props.value;
    //将修改数据的事件或者方法传入到props，等同于vuex的mapMutation mapState
    const onAddClick=this.props.onAddClick;
    return (
        <div>
          <h1>计数的数量：{value}</h1>
          <button onClick={onAddClick}>数字+1</button>
          <button onClick={this.props.onAddClick5}>数字+5</button>
        </div>
    )
  }
}

let ActionFnObj={
  add:function (state,action) {
    state.num++;
    return state
  },
  addNum:function (state,action) {
    state.num=state.num+action.num;
    return state
  }
}
function reducer(state={num:0},action){
  if (action.type.indexOf('redux')===-1){
    state=ActionFnObj[action.type](state,action)
    return {...state}
  } else {
    return state
  }


}
const store=createStore(reducer)
// 定义一个将state（状态）映射到props的函数
function mapStateToProps(state){
  return {
    value:state.num
  }
}
const addAction={
  type:'add'
};
// 定义一个将修改state数据的方法，映射到props,默认会传入store里的dispatch
function mapDispatchToProps(dispatch){
  return {
    onAddClick:()=>{dispatch(addAction)},
    onAddClick5:()=>{dispatch({type:"addNum",num:5})}
  }
}
// 将上面的着两个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件
const App=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

ReactDOM.render(
    <Provider store={store}>
      <App></App>
    </Provider>,
    document.querySelector('#root'))

