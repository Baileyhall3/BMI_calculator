
document.querySelector(".calculate").addEventListener("click", function() {
    document.getElementById("output").style.display = "none";

    document.querySelector(".loader").style.display = "block";
    setTimeout(BMI, 2000);
})
document.querySelector(".clear").addEventListener("click", Clear)


// Function to calculate BMI
function BMI() {
    // Cannot be updated
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // BMI formula
    let index = (weight / (((height/100) * height) / 100)).toFixed(0);

    // Condition to check height and weight != 0
    if (height && weight != 0) {
        const output = document.getElementById("output");
        const state = document.getElementById("state");
        output.innerHTML = "Your BMI is " + index;

        if (index < 15) {
            state.innerHTML = "You are severely Underweight"
        } else if (index < 16) {
            state.innerHTML = "You are moderately Underweight";
        } else if (index < 18.5) {
            state.innerHTML = "You are Underweight";
        } else if (index < 25) {
            state.innerHTML = "You are within normal range (healthy weight)";
        } else if (index < 30) {
            state.innerHTML = "You are overweight";
        } else if (index < 35) {
            state.innerHTML = "You are obese class I" ;
        } else if (index < 40) {
            state.innerHTML = "You are obese class II (moderately obese)" ;
        } else if (index > 40) {
            state.innerHTML = "You are obese class III (severely obese)" ;
        }
        document.getElementById("output").style.display = "block";
        document.querySelector(".loader").style.display = "none";

    } else {
        // Error message
        error()
        function error() {
            document.getElementById("output").style.display = "block";
            document.querySelector(".loader").style.display = "none";
            document.getElementById("output").innerHTML = "Please enter your height and weight."
            setTimeout(() => {
                document.getElementById("output").innerHTML = "";
                document.querySelector(".state").innerHTML = "";
            }, 5000);
        }
    }
}

// Clear function
function Clear(){
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('output').innerHTML = "";
    document.getElementById('state').innerHTML = "";
}
