const button = document.getElementById('generate-color-btn')


const generateRandomNumber = (maxNumber) => {
    return Math.floor(
        Math.random() * (maxNumber + 1)
    )
}

const generateRGBColor = () => {
    return [
        generateRandomNumber(255), /* RGB max 255 aldığı için 255 ile sınırlandırıyoruz. Sayımız hiç bir zaman 256 olamaz.*/
        generateRandomNumber(255),
        generateRandomNumber(255),
    ]
}

button.addEventListener('click', () => {
	document.body.style.backgroundColor =
    `rgb(${generateRGBColor().join(', ')})` /* Daha farklı şekilde de yazılabilir ama basit ve sade yazımı bu şekilde oluyor. */
})
