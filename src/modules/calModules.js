export default calModules= () => {
    const [dateNum,setDate] = useState(0);
    const router = useRouter();

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


    const nextDateNum = () => {
        setDate( +1 );
        router.push(`/tomorrow/${dateNum}}`)

    }
}