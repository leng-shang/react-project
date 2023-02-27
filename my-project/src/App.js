import React,{useEffect,useState} from 'react'
import {Input} from 'antd'

const App = ()=>{
  const [count,setCount] = useState(0)
  useEffect(()=>{

  })

  const changeCount = ()=>{
    setCount(count+1)
  }
  return <div>
      <div onClick={changeCount}>count++</div>
      <div>{count}</div>
      <div>1233<Input/></div>
    </div>
}

export default App;
