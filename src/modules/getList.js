
import useFetch from "../hooks/useFetch";

export default function getList(date, viewYear, viewMonth) {
    const dbList = useFetch(`http://localhost:5000/api/toDoList`);

    let toDoList;
    dbList.map( item => {
        if(item.year === viewYear && item.month === viewMonth + 1) {
            if(item.day === date) {
                toDoList = item
            }
        }
    } )/* map */
    return toDoList;
}