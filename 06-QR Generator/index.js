

const inputValue = document.getElementById("input-box")
const btn = document.getElementById("btn");
const qrimg = document.getElementById("qr-img") 

// console.log(inputValue, btn, qrimg);


btn.addEventListener("click", () => {
    const inputVal = inputValue.value;
    console.log(inputVal);

    inputVal === '' && alert('Enter some value')
    
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
    qrimg.alt = `QR Code for ${inputVal} `
})