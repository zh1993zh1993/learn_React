import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
    let time=new Date().toLocaleTimeString()
    let str='当前时间是：'
    let element=(
        <div>
         <h1>helloWorld</h1>
         <h2>{str+time}</h2>
        </div>
)
      let man ="发热"
      let element2=(
          <div>
            <h1>今天是否隔离</h1>
            <h2>{man=="发热"?<button>隔离</button>:"躺床上"}</h2>
          </div>
      )
console.log(element);
let element4=(
    <div>
      <span>横着躺</span>
      <span>竖着躺</span>
    </div>
)
man='正常'
let element3=(
    <div>
      <h1>今天是否隔离</h1>
      <h2>{man=="发热"?<button>隔离</button>:element4}</h2>
    </div>
)
      let color='bgRed'
      let logo='https://www.baidu.com/img/bd_logo1.png'
   //   HTML的样式类名要写className
   let element5=(
       <div className={color}>
         <img src={logo} alt=""/>
         红色的背景颜色
       </div>
   )

ReactDOM.render(
    element5,
    document.getElementById('root')
)








