import React from 'react';
import ReactDOM from 'react-dom';
import './04-style.css'
      let exampleStyle={
        background:"skyblue",
        borderBottom:"1px solid red",
        height:"100px",
        "background-image":"url(https://www.baidu.com/img/bd_logo1.png)"
      }
      let element=(
          <div>
            <h1 style={exampleStyle}>helloWorld</h1>
          </div>
      )

let  classStr="bgRed"
let element2=(
    <div>
      <h1 className={"abc"+classStr}>helloWorld</h1>
    </div>
)
// join(" "):数组合并，中间用空格隔开
let  classStr2=['abc2','redBg2'].join(" ")
let element3=(
    <div>
      {/* 这里写注释*/}
      <h1 className={classStr2} style={exampleStyle}>helloWorld</h1>
    </div>
)
      ReactDOM.render(
          element3,
          document.getElementById('root')
      )








