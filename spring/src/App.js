import './App.css';

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

*/

let a = 10; //변수
const b = 20; //상수


function App() {
  let c;
  let d = undefined; //정의되지 않는 실제 값
  console.log(1,c);

  return (
    /*안에들어가는 문법은 JSX문법을 따라야한다.
      하나의 tag만 리턴해준다.
    */
    <div className="box-style">
      <div>{a === 20 ? a : b}</div>
      <h1>{b === 20 && '20입니다.'}</h1>
      <hr/>
    </div>    
  );
}
export default App;
