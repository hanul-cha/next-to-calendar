import Side from "./Side";

export default function addToDo() {


    return(
        <>
            <div className="addToDo" style={{ width:300, height:603, paddingTop: 102, display:"block"}}>
                <form className="toDoInner" style={{width: 300, height: 500}}>
                    
                    <button className="addBtn">적용</button>
                </form>
            </div>
        </>
    )
}