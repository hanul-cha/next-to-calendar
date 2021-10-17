export default function Side(list) {

    console.log(list)
    

    return(
        <>
            <div className="side" style={{ width:300, height:603, paddingTop: 102, display:"block"}}>
                <div style={{width: 300, height: 500, backgroundColor: "#f3f3f3"}}>
                    {
                        list
                        ? <h2>hi</h2>
                        : <h3>no</h3>
                    }
                </div>
            </div>
        </>
    )
}