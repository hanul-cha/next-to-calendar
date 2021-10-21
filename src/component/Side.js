import { useState } from "react"

export default function Side(fullList) {
    const [sideState, setSide] = useState(false)

    const list = fullList.list.list
    

    const changeAdd = () => {
        setSide(true);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();

        setSide(false)
    }
    

    if(sideState){
        return(
            <>
                <div className="addToDo" style={{ width:300, height:603, paddingTop: 102, display:"block"}}>
                    <form className="toDoInner" style={{width: 300, height: 500}}  onSubmit={onSubmit}>
                        <input placeholder="제목" required></input>
                        <input placeholder="할일" required></input>
                        <button className="addBtn">적용</button>
                    </form>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div className="side" style={{ width:300, height:603, paddingTop: 102, display:"block"}}>
                    <div className="sideInner" style={{width: 300, height: 500}}>
                        <h2>{list.title}</h2>
                        <p>{list.text}</p>
                        <button className="toDoBtn" onClick={changeAdd}>일정추가</button>
                    </div>
                </div>
            </>
        )
    }

    
}