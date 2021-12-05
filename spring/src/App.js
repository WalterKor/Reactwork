import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [list, setlist] = useState([1,2,3,4]);

  const getAddResult= ()=>{
    let sum = 0;
    list.forEach((i)=>(sum = sum+i));
    console.log("sum 함수 실행됨  : ",sum);
    return sum;
  }

  return (
    <div>
      <button onClick={()=>{setlist([...list,10]);}}>추가하기</button>
        <div>
          {list.map(i=><h1>{i}</h1>)}        
        </div>
        <div>합계:{getAddResult()}</div>
    </div>
  );
}
export default App;
