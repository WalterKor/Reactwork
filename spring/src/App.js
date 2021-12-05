import './App.css';
import React, { useState } from 'react';
import Sub from './Sub';
/*
0. React엔진 - 데이터변경 감지에서 UI를 그려주는 엔진
1. 실행 과정 (index.html) - SinglePage Application SPA (a tag 사용 불가 LINK로 대체)
2. JSX 문법
3. 바벨(자바스크립트 ES5 -> 옛날코드를 현재코드로 바꿔주는 좋은친구)
(1) return시에 하나의 Dom에만 리턴할 수있다.
(2) 변수선언은 let 혹은 const로만 해야한다. 
(3) if사용 불가능 => 삼항연산자 사용가능 (조건 ? 값(true) : 값(false))
(4) 조건부 렌더링(조건 && 값 true)
(5) css 디자인 
      - 내부에 적는방법
      - 외부 파일에 적는 방법
      - 라이브러리 사용(부트스트랩, component-styled)
  (6)부모 컴포넌트가 변경되면 자식 컴포넌트에 데이터가 변화되는지 확인한번 해본다.
*/
function App() {
  //다운로드 받음
  console.log('App이 실행됨')
  const [users, setusers] = useState([
    {id:1, name:"홍길동"},
    { id:2, name:"임꺽정"},
    { id:3, name:"장보고"},
    { id:4, name:"월터"}]
    );

  const download = ()=>{
    let sample = [      
      {id:1, name:"홍길동"},
      { id:2, name:"임꺽정"},
      { id:3, name:"장보고"},
      { id:4, name:"월터"}
    ];
    setusers(sample); //데이터가 같지만 레퍼런스가 다르다
  }

  // const [number, setnumber] = useState(1); //React안에 hooks 라이브러리 상태값이 된다.  
  // //let number = 1; 상태값이 아님

  // const add = ()=>{
  //   setnumber(number+1);//리엑트한테 number값 변경할게 요청    
  //   console.log("add", number);    
  // }
  //랜더링 시점 = 상태값이 변경 
  //상태가 변경되면 전체가 Rebulid가 된다. 


  return (
    <div>      
        <button onClick={download}>다운로드</button> 
        {users.map((u)=>(
          <h1>
            {u.id}, {u.name}
          </h1>
        ))}
        <Sub/>
    </div>
  );
}
export default App;
