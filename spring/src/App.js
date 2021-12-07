import './App.css';
import React, { createRef, useEffect, useState} from 'react';
import { useRef } from 'react';

//useRef(디자인 변경)
//dom을 변경할 때 사용

function App() {

  const [list, setlist] = useState([
    {id:1, name:'홍길동'},
    {id:2, name:'임수정'}
  ]);
  const myRef = useRef(null);
  const myRefs = Array.from({length:list.length}).map(()=>createRef())

  function ChangeColor() {
    console.log(myRef);
    console.log(myRef.current)
    myRef.current.style.backgroundColor='red';
    myRefs[1].current.style.backgroundColor='red';
  }


  return (
   <div>
     <button onClick={ChangeColor}>색상변경</button>
     <div ref={myRef}>박스</div>    
    <div>
      {list.map((user, index)=>(
        <h1 ref={myRefs[index]}>{user.id}, {user.name}</h1>
      ))}
    </div>
   </div>
  );
}
export default App;
