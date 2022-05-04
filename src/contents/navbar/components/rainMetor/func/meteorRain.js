export const rainMeteorFactory = (e, classArray) => {
    function internalfunction(left, top, className) {
        return {
            left: left,
            top: top,
            class: className
        }
    }
    const newArray = []
    const classInteral = [
        'delayMeteor-0 ',
        'delayMeteor-1 ',
        'delayMeteor-2 ',
        'delayMeteor-3 ',
        'delayMeteor-4 ',
        'delayMeteor-5 ',
        'delayMeteor-6 ',
        'delayMeteor-7 ',
        'delayMeteor-8 ',
        'delayMeteor-9 ',
        'delayMeteor-10 ',
        'delayMeteor-11 ',
        'delayMeteor-12 ',
        'delayMeteor-13 ',
        'delayMeteor-14 ',
    ]
    let j = 0
    let l = 0
    for (let i = 0; i < e; i++) {

        if (j === classArray.length) { j = 0 }
        if (l === classInteral.length) { l = 0 }
        const top = -((Math.random() * (1500)))
        const left = ((Math.random() * (1000) + 40))
        const all = internalfunction(left, top, classInteral[l] + classArray[j])
        newArray[i] = all
        j++
        l++
    }
    return newArray
}
