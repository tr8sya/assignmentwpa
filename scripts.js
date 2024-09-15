function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        function calculateBMI() {
            const height = parseFloat(document.getElementById("height").value);
            const weight = parseFloat(document.getElementById("weight").value);
            
            if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
                alert("Please enter positive numbers for both height and weight.");
                return; 
            }
        
            const heightInMeters = height / 100; 
            const bmi = weight / (heightInMeters * heightInMeters);
        
            document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)}`;
        }
        

        document.getElementById('result').innerText = `Your BMI is ${bmi} (${category}).`;
    } else {
        document.getElementById('result').innerText = "Please enter valid height and weight.";
    }
}
