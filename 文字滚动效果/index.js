const list = document.querySelector(".list")

// 克隆第一个元素放到最后
const cloneFirstItemFun = () => {
    const firstItem = list.children[0]
    const newItem = firstItem.cloneNode(true)
    list.appendChild(newItem)
}
cloneFirstItemFun()

// 每隔一段时间，将列表滚动到下一个位置

const itemHeight = 30;
let curIndex = 0;
const duration = 2000
const moveNext = () => {
    let from = curIndex * itemHeight // 开始滚动的高度
    curIndex++
    const to = curIndex * itemHeight // 下一项的滚动高度
    const totalDruation = 500 // 变化总时间
    const duration = 10 // 变化时间间隔
    const times = totalDruation / duration // 变化的次数
    const dis = (to - from) / times // 每次变化的量
    const timerId = setInterval(() => {
        from += dis
        if (from >= to) {
            clearInterval(timerId)
            if (curIndex === list.children.length - 1) {
                curIndex = 0
                from = 0
            }
        }
        list.scrollTop = from
    }, duration);

}
setInterval(moveNext, duration)