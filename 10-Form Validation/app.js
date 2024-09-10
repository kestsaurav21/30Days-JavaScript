const inputData = document.getElementById('myForm');

inputData.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = [];

    let userName = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(userName);
    console.log(email);
    console.log(password);

    if(userName.length < 3){
        errors.push('UserName must be atleast 3 character.')
    }

    let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(!emailPattern.test(email)){
        errors.push('Please enter a valid email')
    }

    if(password.length < 8){
        errors.push('password must be atleast 8 character long.')
    }

    if(errors.length > 0){
        document.getElementById('error').innerHTML = errors.join('<br>');

    }else{
        document.getElementById('error').innerHTML = 'Form Submitted Successfully!'
    }
    
    
    
} )

