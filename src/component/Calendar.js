
export default function Calendar({num}) {

    let date = new Date();
    date.setMonth(date.getMonth() + Number(num));
    
    

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
    console.log(dates)
    console.log(firstDateIndex)
    
    console.log(lastDateIndex)
    

    return(
        <div className="calendar">
                <div className="header">
                    <div className="year-month">{`${viewYear}년 ${viewMonth + 1}월`}</div>
                    <div className="nav">
                        <button className="nav-btn go-prev" >&lt;</button>
                        <button className="nav-btn go-today" >TODAY</button>
                        <button className="nav-btn go-next" >&gt;</button>
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
                            ? 'this'
                            : 'other';
                            console.log(date);
                            console.log(i);
                            return <div className="date" key={i}><span className={condition}>{date}</span></div>
                        })}
                    </div>
                </div> 
            </div>
    )
}