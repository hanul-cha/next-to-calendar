import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import AddToDo from "./AddToDo";

export default function Side(fullList) {
    const [sideState, setSide] = useState(true)
    const router = useRouter();

    const list = fullList.list.list
    

    const changeAdd = () => {
        setSide(false)
    }
    
    
    
    return (
        <>
            {sideState
            ? 
            <div className="side" style={{ width:300, height:603, paddingTop: 102, display:"block"}}>
                <div className="sideInner" style={{width: 300, height: 500}}>
                    <h2>{list.title}</h2>
                    <p>{list.text}</p>
                    <button className="toDoBtn" onClick={changeAdd}>일정추가</button>
                </div>
            </div>
            :
            <AddToDo fullList={fullList} setSide={setSide} />
            }
        </>
    )
   

    
}