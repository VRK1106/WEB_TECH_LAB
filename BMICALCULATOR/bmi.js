function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;
    let result = document.getElementById("result");
    let suggestion = document.getElementById("suggestion");
    if (!weight || !height || weight <= 0 || height <= 0) {
        result.innerHTML = "Please enter valid values.";
        suggestion.innerHTML = "";
        return;
    }
    let bmi = (weight / (height * height)).toFixed(2);
    let cat = "";
    let sug = "";
    if (bmi < 18.5) {
        cat = "Underweight";
        sug = "Eat more nutritious food.";
    } else if (bmi <= 24.9) {
        cat = "Normal Weight";
        sug = "Keep it up!";
    } else if (bmi <= 29.9) {
        cat = "Overweight";
        sug = "Exercise regularly.";
    } else {
        cat = "Obese";
        sug = "Consult a doctor.";
    }
    result.innerHTML = "BMI: " + bmi + " (" + cat + ")";
    suggestion.innerHTML = "Suggestion: " + sug;
}

function resetFields() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("suggestion").innerHTML = "";
}