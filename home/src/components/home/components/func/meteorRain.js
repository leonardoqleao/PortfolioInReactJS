export const rainMeteorFactory = (e) => {
    function internalfun (left,top){
        const obj = {
            top:top,
            left:left
        }
        return obj
    }
    const newArray = []
    for (let i = 0; i < e; i++) {
        const top = -((Math.random() * 3000))
        const left = ((Math.random() * 2000)+ 40)
        const all = internalfun(left, top)
        newArray[i] = all
        
    }
    return newArray
}
