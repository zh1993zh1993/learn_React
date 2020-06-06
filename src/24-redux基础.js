import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// 用于通过动作，创建新的state
const reducer=function (state={num:0},action) {
  console.log(action);
  switch (action.type) {
    case "add":
      state.num++;
      break;
    case "decrement":
      state.num--;
      break;
    default:
      break;
  }
  // 进行解构，再放置进去，称为新的对象、相当于对象的copy
  // 最终返回一个新的状态
  return {...state}

}
// 首先创建一个仓库
const store=createStore(reducer)
console.log(store);

function add() {
//  通过仓库的方法dispatch进行修改数据
  store.dispatch({type:"add",content:{ide:1,msg:"hello world"}})
  console.log(store.getState());
}
function decrement() {
  //  通过仓库的方法dispatch进行修改数据
  store.dispatch({type:"decrement"})
}

// 函数式计数器
const Counter=function(props){
  let state=store.getState()
  return (
      <div>
        <h1>计数数量：{state.num}</h1>
        <button onClick={add}>计数+1</button>
        <button onClick={decrement}>计数-1</button>
      </div>
  )
}
// 监听数据的变化，重新渲染视图
store.subscribe(()=>{
ReactDOM.render(<Counter/>,document.querySelector('#root'))
})
ReactDOM.render(<Counter/>,document.querySelector('#root'))

