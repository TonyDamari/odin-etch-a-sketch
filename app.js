const container = document.getElementById('container')
const rangeSlider = document.getElementById('range')
const clear = document.getElementById('clear')
const value = document.getElementById('value')

let numOfSquares = 16 * 16
let widthShape = 150 / (16 / 4)
let heightShape = 150 / (16 / 4)

createSquares(numOfSquares)

rangeSlider.addEventListener('input', () => {
    
    let squareSize = rangeSlider.value
    let newSquares = (squareSize * squareSize)
    widthShape = 150 / (squareSize / 4)
    heightShape = 150 / (squareSize / 4)
    value.innerText = `${squareSize} x ${squareSize}`

    if(container.hasChildNodes('sqaure')){
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }
        createSquares(newSquares)
    }else{
        createSquares(newSquares)           
    }
  
})

function createSquares(numOfSquares){
    for(let i= 0; i < numOfSquares; i++){
        const square = document.createElement('div')
        square.classList.add('square')
        square.style.width = `${widthShape}px`
        square.style.height = `${heightShape}px`

        
        square.addEventListener('mouseover',() =>{
            if(!square.style.background){
                addColor(square)
                console.log('color added')
            }else{
                removeColor(square)
             
            }
        })

        container.appendChild(square)
    }
}


function addColor(item){
    const color = getRandomColor()
    item.style.background = color
    item.style,boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    item.style.border = '1px solid #fff'
}

function removeColor(item){
    item.style.removeProperty('background')
    item.style.removeProperty('border')
  
}

function getRandomColor(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

   
    return `rgb(${r},${g},${b})`
}

clear.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    document.getElementById('range').value = 16
    widthShape = 150 / (16/4)
    heightShape = 150 / (16/4)
    value.innerText = `16 x 16`
    createSquares(numOfSquares)
})

const year = document.getElementById('date')

const date = new Date().getFullYear()

year.innerText = date

