let boxes = document.getElementsByClassName("box")
console.log(boxes)

function getRandomColor() {

    // a + Math.random()* ( b - a ) //

    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1}, ${val2}, ${val3})`
}

// colors are changing on refreshing the page.//
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

// colors are changing also on clicking any boxes.//
Array.from(boxes).forEach(e => {
    e.addEventListener("click", () => {

        Array.from(boxes).forEach(box => {
            box.style.backgroundColor = getRandomColor()
            box.style.color = getRandomColor()
        })
    })
})

