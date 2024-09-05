const inputValue = document.querySelector('#password');
const outputValue = document.querySelector('#output');

inputValue.addEventListener('input', () => {
    console.log(inputValue.value);
    
    password = inputValue.value;

        if(password.length < 8){
            outputValue.innerHTML = "Password is short";
            outputValue.style.color ='red';
        }
        else{
            
            if(password.search(/[a-z]/) == -1){
                outputValue.innerHTML = "Password is missing lowercase letter";
                outputValue.style.color ='red';
            }
            else if(password.search(/[A-Z]/) == -1){
                outputValue.innerHTML = "Password is missing a Uppercase letter";
                outputValue.style.color ='red';
            }
            else if (password.search(/[0-9]/) == -1){
                outputValue.innerText = 'Password is missing a Numeric letter';
                outputValue.style.color = 'red';
            }
            else if (password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
                outputValue.innerText = 'Password is missing a Special Character letter';
                outputValue.style.color = 'red';
            }
            else {
                outputValue.innerText = 'Password is strong';
                outputValue.style.color = 'green';
            }   
        }

    }
)