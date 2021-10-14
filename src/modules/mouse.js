export default mouse = (item) => {
    

    const action = () => {

    }



    //calendar에서 사용할 트리거
    const timer;

    item.addEventListener("mouseenter", function() {
        timer = window.setTimeout(action, 2)
    })
    item.addEventListener("mouseleave", function() {
        if(timer) window.clearTimeout(timer)
    })

}

/* 
2초 지난뒤에 import해서 가져올 함수
*/