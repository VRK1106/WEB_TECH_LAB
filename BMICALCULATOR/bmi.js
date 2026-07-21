function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let heightCm = parseFloat(document.getElementById("height").value);
    let height = heightCm / 100;
    let resultContainer = document.getElementById("result");
    
    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        resultContainer.className = "result-card error";
        resultContainer.innerHTML = "<h3>Error</h3><p class='suggest-txt'>Please enter valid positive numbers for weight and height.</p>";
        return; 
    }
    
    let bmi = weight / (height * height);
    let roundedBMI = bmi.toFixed(2);
    let category = "";
    let suggestion = "";
    let className = "";
    
    if (bmi < 18.5) {
        category = "Underweight";
        suggestion = "Increase nutritious food intake and consult a dietitian if necessary.";
        className = "underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight";
        suggestion = "Maintain your healthy lifestyle with balanced diet and regular exercise.";
        className = "normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        suggestion = "Reduce calorie intake and exercise regularly.";
        className = "overweight";
    } else {
        category = "Obese";
        suggestion = "Consult a healthcare professional and adopt a healthy lifestyle.";
        className = "obese";
    }
    
    resultContainer.className = "result-card " + className;
    resultContainer.innerHTML = `
        <h3>${category}</h3>
        <p class="bmi-val">BMI Value: <strong>${roundedBMI}</strong></p>
        <p class="suggest-txt">Suggestion: ${suggestion}</p>
    `;
}