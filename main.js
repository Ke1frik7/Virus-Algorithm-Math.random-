document.getElementById("bos").addEventListener("click", () => {
    let otaDiv = document.createElement("div")
    otaDiv.style.width = '100%'
    otaDiv.style.height = '100vh'
    document.body.appendChild(otaDiv)
    let elements = ['div', 'button', 'section', 'ul']
    let buyi = ['200', '400', '500', '250']
    let eni = ['300', '400', '100', '500', '400']
    let joylashuv = ['left', 'right', 'center', 'end']
    let rang = ['red', 'balck', 'grey', 'blue', 'white']
    setInterval(() => {
    let yaratamiz = document.createElement(elements[parseInt(Math.random() * 1000 % 4)])
    let buyiTanla = buyi[parseInt(Math.random() * 1200 % 3 )]
    let eniTanla = eni[parseInt(Math.random() * 2000 % 4)]
    let joylashuvTanla = joylashuv[parseInt(Math.random() * 1000 % 4)]
    let rangTanla = rang[parseInt(Math.random() * 2000 % 4)]
    yaratamiz.appendChild(document.createTextNode("HACKER ATTACKSCKS Shokhjackhonnnnn"))
    yaratamiz.style.width = buyiTanla + 'px'
    yaratamiz.style.height  = eniTanla + 'px'
    otaDiv.style.display = 'flex'
    otaDiv.style.justifyContent = joylashuvTanla
    // otaDiv.style.flexDirection = 'column'
    yaratamiz.style.backgroundColor = rangTanla
    otaDiv.appendChild(yaratamiz)
    console.log(yaratamiz)
    }, 100)
})