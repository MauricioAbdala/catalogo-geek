let paintingsArray = []

let actionFiguresArray = []

function separateItens(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].type == "Paintings") {
            paintingsArray.push(array[i])
        } else if (array[i].type == "ActionFigures") {
            actionFiguresArray.push(array[i])
        }
    }
}
separateItens(productsArray)

let ulpaintings = document.querySelector('.Paintings')

let ulActionFigures = document.querySelector('.ActionFigures')

function createLi(product) {
    let li = document.createElement('li')
    let img = document.createElement('img')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')

    li.classList = 'Cards'
    img.classList = 'img'
    img.src = product.image
    h4.innerText = product.name
    p.innerText = `$ ${product.price}`
    li.append(img, h4, p)
    return li
}

function render(array, ul) {
    for (let i = 0; i < array.length; i++) {
        ul.append(createLi(array[i]))
    }
}
render(paintingsArray, ulpaintings)

render(actionFiguresArray, ulActionFigures)
