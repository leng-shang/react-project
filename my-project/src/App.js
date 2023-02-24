import React,{useEffect,useState} from 'react'


const App = ()=>{
  const [count,setCount] = useState(0)
  useEffect(()=>{

  })

  const changeCOunt = ()=>{
    setCount(count+1)
  }
  return <div>
      <div onClick={changeCOunt}>count++</div>
      <div>{count}</div>
    </div>
}

export default App;
