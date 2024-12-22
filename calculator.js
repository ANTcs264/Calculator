let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); 

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;
        
        if (buttonText == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error"; // If there's an error in the calculation
                string = "";
            }
        }
        else if (buttonText == 'C') { 
            string = "";
            input.value = string;
        }
        else if (buttonText == 'DEL') {  
            string = string.slice(0, -1); // safer than substring
            input.value = string;
        }
        else {
            string += buttonText; // Appending the clicked button's value to string
            input.value = string;
        }
    })
});
