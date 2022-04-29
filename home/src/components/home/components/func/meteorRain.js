export const rainMeteorFactory = (e, classArray) => {
    function internalfun(left, top, className) {
        const obj = {
            left: left,
            top: top,
            class: className
        }
        return obj
    }
    const newArray = []
    let j = 0
    for (let i = 0; i < e; i++) {
        
        if (j === classArray.length) {j = 0}
        const top = -((Math.random() * (1500)))
        const left = ((Math.random() * (1000) + 40))
        const all = internalfun(left, top, classArray[j])
        newArray[i] = all
        j++
    }
    return newArray
}
