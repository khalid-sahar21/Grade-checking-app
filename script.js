function checkGrade() {
    // Get the input percentage from the form
    var inputElement = document.getElementById("percentage");
    var percentage = parseFloat(inputElement.value);

    // Check if the input is a valid number between 0 and 100
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        document.getElementById("result").textContent = "Invalid input. Please enter a number between 0 and 100.";
    } else {
        // Calculate the grade based on the input percentage
        var grade;
        if (percentage >= 80) {
            grade = "A+";
        } else if (percentage >= 70) {
            grade = "A";
        } else if (percentage >= 60) {
            grade = "B";
        } else if (percentage >= 50) {
            grade = "C";
        } else {
            grade = "F";
        }

        // Display the result
        document.getElementById("result").textContent = "Your grade is: " + grade;
    }
}