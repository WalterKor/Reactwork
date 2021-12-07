import './App.css';
import React, { useEffect, useState} from 'react';
import { useMemo } from 'react';

//useMemo => 메모라이제이션(기억)
function App() {

  const [list, setlist] = useState([1,2,3,4]);
  const [str, setstr] = useState("합계");

  

  const getAddResult = ()=>{
    let sum = 0;
    list.forEach(i=>(sum= sum+i))
    console.log('함수실행됨 ')
    return sum;
  }

  const addResult = useMemo(() => getAddResult(), [list]);
  
  function AddList() {
    console.log('AddList 실행됨')
    setlist([...list,10])
  }

  function ChangeStr() {
    setstr("안녕");
  }


  return (
   <div>
     <button onClick={ChangeStr}>문자변경</button>
     <button onClick={AddList}>리스트값 추가</button>
     
     <div>
        {list.map(i=>(
        <h1>{i}</h1>
        ))}
     </div>
     <div> {str} : {getAddResult()} </div>        
   </div>
  );
}
export default App;
