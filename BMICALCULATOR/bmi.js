function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return; 
    }
    let bmi = weight / (height * height);
    let roundedBMI = bmi.toFixed(2);
    let category = "";
    let suggestion = "";
    if (bmi < 18.5) {
        category = "Underweight";
        suggestion = "Increase nutritious food intake and consult a dietitian if necessary.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight";
        suggestion = "Maintain your healthy lifestyle with balanced diet and regular exercise.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        suggestion = "Reduce calorie intake and exercise regularly.";
    } else {
        category = "Obese";
        suggestion = "Consult a healthcare professional and adopt a healthy lifestyle.";
    }
    document.getElementById("result").innerHTML = "BMI Value: " + roundedBMI + "<br>Category: " + category;
    document.getElementById("suggestion").innerHTML = "Suggestion: " + suggestion;
}