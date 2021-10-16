import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import getList from "../modules/getList";


export default function Calendar() {
    const [dateNum,setDate] = useState(0);

    let date = new Date();
    date.setMonth(date.getMonth() + Number(dateNum));
    
    

    const viewYear = date.getFullYear(); 
    const viewMonth = date.getMonth();
    

    const prevLast = new Date(viewYear, viewMonth, 0);/*지난달 마지막 날짜와 요일  */
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(TLDate +1).keys()].slice(1);
    const nextDates = [];

    if (PLDay !== 6) { 
        for (let i = 0; i<PLDay+1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }


    for (let i = 1; i<7 - TLDay; i++) {
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);

    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);


    const nextDateNum = () => {
        setDate( dateNum + 1 );
    }
    const thisDateNum = () => {
        setDate(0);
    }
    const prevDateNum = () => {
        setDate( dateNum - 1 );
    }

    const whatDay = (date) =>{
        const today = new Date();//노출된 달과 이번달이 다를수 있기때문에 다시선언
        if(viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
            if(date === today.getDate()) {
                return "today this";
            }
        }
        return "this";
    }

    const useTodo = (e) => {
        console.log(e.target.nextSibling.innerText)
    }
    //서버에 있는 날자와 현재 선택된 날자의 정보가 일치하면 함수를 실행
    //사이드에 todolist를 노출시킴
    //배열 형태로 있는것과 / json서버로 받는거 두게 버전을 만들것임
    
    
    



    return(
        <div className="calendar">
                <div className="header">
                    <div className="year-month">{`${viewYear}년 ${viewMonth + 1}월`}</div>
                    <div className="nav">
                        <button className="nav-btn go-prev" onClick={prevDateNum}>&lt;</button>
                        <button className="nav-btn go-today" onClick={thisDateNum}>TODAY</button>
                        <button className="nav-btn go-next" onClick={nextDateNum}>&gt;</button>
                    </div>
                </div>
                <div className="main">
                    <div className="days">
                        <div className="day">일</div>
                        <div className="day">월</div>
                        <div className="day">화</div>
                        <div className="day">수</div>
                        <div className="day">목</div>
                        <div className="day">금</div>
                        <div className="day">토</div>
                    </div>
                    <div className="dates">
                        {dates.map((date, i) => {
                            const condition = i >= firstDateIndex && i < lastDateIndex + 1
                            ? whatDay(date)
                            : 'other';

                            
                            const listText = getList(date, viewYear, viewMonth);
                            
                            return (
                                <div className="date" key={i} onClick={useTodo}>
                                    <div className="dateBack"></div>
                                    <span className={condition}>
                                        {date}
                                    </span>
                                    <div className="liDate">
                                        <h4>
                                            {listText ? listText.list.title : ""}
                                        </h4>
                                    </div>
                                </div>
                            ) 
                            
                        })}
                    </div>
                </div> 
            </div>
    )
}