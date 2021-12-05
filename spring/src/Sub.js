import {React, useEffect,useState} from 'react'

let num = 10;


function Sub() {
    const [data, setdata] = useState(0);

    const download=() =>{
        //다운로드 받고 (통신)
        let downloadData = 5; //가정
        setdata()
    }

    useEffect(() => {
        console.log('App useEffect 실행됨')
        setdata(5);
    },[])



    //실행시점 
    /*
    (1) App()함수가 최초 한번 실행될때 실행된다.(마운트될때) 그림이 그려질때 최초로 
    (2) 상태변수가 변경될때
    */
    return (
        <div>
            <h1>데이터 : {data}</h1>
            <button onClick={()=>{
                setdata(data+1);
            }}>더하기</button>
            서브임돠
        </div>
    )
}
export {num};
export default Sub
