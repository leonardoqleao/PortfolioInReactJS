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
    const classInteral = [
        'delayMetor-0 ',
        'delayMetor-1 ',
        'delayMetor-2 ',
        'delayMetor-3 ',
        'delayMetor-4 ',
        'delayMetor-5 ',
        'delayMetor-6 ',
        'delayMetor-7 ',
        'delayMetor-8 ',
        'delayMetor-9 ',
        'delayMetor-10 ',
        'delayMetor-11 ',
        'delayMetor-12 ',
        'delayMetor-13 ',
        'delayMetor-14 ',
    ]
    let j = 0
    let l = 0
    for (let i = 0; i < e; i++) {

        if (j === classArray.length) { j = 0 }
        if (l === classInteral.length) { l = 0 }
        const top = -((Math.random() * (1500)))
        const left = ((Math.random() * (1000) + 40))
        const all = internalfun(left, top, classInteral[l] + classArray[j])
        newArray[i] = all
        j++
        l++
    }
    return newArray
}
