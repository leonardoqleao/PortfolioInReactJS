export const rainMeteorFactory = (e) => {
    function internalfun(left, top, className) {
        const obj = {
            left: left,
            top: top,
            class: className
        }
        return obj
    }
    const newArray = []
    const classArray = [
        "rainchild-1",
        "rainchild-2",
        "rainchild-3",
        "rainchild-4",
        "rainchild-5",
        "rainchild-6",
        "rainchild-7",
        "rainchild-8",
        "rainchild-9",
        "rainchild-10",
        "rainchild-11",
        "rainchild-12",  
    ]
    let j = 0
    for (let i = 0; i < e; i++) {
        
        if (j === 12) {j = 0}
        const top = -((Math.random() * (1500)))
        const left = ((Math.random() * (1000) + 40))
        const all = internalfun(left, top, classArray[j])
        newArray[i] = all
        j++
    }
    return newArray
}
