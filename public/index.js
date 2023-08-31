console.log('Connected')
const list = document.getElementById('coin-container')

const deleteCoin = (id) => {
    console.log(id)
    axios.delete(`http://localhost:4000/api/deleteCoin/${id}`)
    .then((res) => {
        list.innerHTML = ""
        res.data.forEach(createCoin)
    })
    .catch((err) => {
        console.error(err)
    })
}

const createCoin = (coin) => {
    let coin1 = document.createElement('div')
    coin1.classList += 'coin-coin'

    let coinHeader = document.createElement('div')
    coinHeader.classList += 'coin-header'

    let options = document.createElement('div')
    options.classList += 'coin-options'

    let coinName = document.createElement('h3')
    coinName.textContent = coin.name
    const myImage = new Image(250, 250);
    myImage.src = coin.picture

    let description = document.createElement('p')
    let coinPrice = document.createElement('h4')
    coinPrice.textContent = `Purchase price: $${coin.price}`
    coin1.appendChild(coinHeader)
    coinHeader.appendChild(coinName)
    coin1.appendChild(myImage)
    coin1.appendChild(coinPrice)
    coin1.appendChild(description)
    coin1.appendChild(options)
    let check = document.createElement('input')
    check.type='checkbox'
    check.id = 'coin-checkbox'
    let delete1 = document.createElement('button')
    delete1.addEventListener('click', () => deleteCoin(coin.id))
    delete1.textContent = 'Delete'
    let text = document.createElement('div')
    text.id = 'text'
    text.textContent = 'Coin has not been purchased'
    check.addEventListener('click', () => isChecked(check, text))
    
    
    options.appendChild(delete1) 
    options.appendChild(check)
    options.appendChild(text)
    description.textContent = coin.description
    list.appendChild(coin1)
}

const getCoins = () => {
    axios.get('http://localhost:4000/api/getCoins')
    .then((res) => {
        console.log(res.data)
        res.data.forEach(createCoin)
    })
    .catch((err) => {
        console.error(err)
    })
}
         
getCoins()
           

let text = document.getElementById('text')
const isChecked = (checkBox, text) => {
        if (checkBox.checked === true){
             text.textContent = 'Coin has been purchased'
        } else {
            text.textContent = 'Coin has not been purchased'
    }
    
}
