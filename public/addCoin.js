console.log("Connected to addTask")
const form = document.getElementById("coin-form")
const coinName = document.getElementById("coin-name")
const coinPicture = document.getElementById("picture-link")
const coinPrice = document.getElementById("coin-price")
const coinDesc = document.getElementById('coin-desc')

const addCoin = (event) => {
    event.preventDefault()
    const myImage = new Image(200, 200);
    myImage.src = coinPicture.value
    let newCoin = {
        name: coinName.value,
        picture: coinPicture.value,
        price: coinPrice.value,
        description: coinDesc.value
    }
    console.log(newCoin)
    axios.post('http://localhost:4000/api/addCoin', newCoin)
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.error(err)
    })
}

form.addEventListener('submit', addCoin)