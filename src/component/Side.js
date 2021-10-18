export default function Side(fullList) {

    const list = fullList.list
    

    return(
        <>
            <div className="side" style={{ width:300, height:603, paddingTop: 102, display:"block"}}>
                <div style={{width: 300, height: 500, backgroundColor: "#f3f3f3"}}>
                    <h2>{list.title}</h2>
                    <p>{list.text}</p>
                </div>
            </div>
        </>
    )
}