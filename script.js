// Function to calculate rank
function calculateRank(total, percentile) {
    let betterStudents = total - (percentile * total) / 100;
    return Math.floor(betterStudents + 1);
}

// Function to handle button click event
document.getElementById("addRollButton").addEventListener("click", function() {
    const total = 1170036; // Total number of students
    const percentileInput = document.getElementById("newRoll").value; // Get input value
    const percentile = parseFloat(percentileInput); // Parse input as float
    if(!(percentileInput>=0 && percentileInput<=100)){
        alert("Please enter a valid percentile."); // Notify user if input is invalid
    }
    else if (!isNaN(percentile)) { // Check if input is a valid number
        const rank = calculateRank(total, percentile); // Calculate rank
        document.querySelector(".rank").textContent = "Rank: " + rank; // Update rank in the HTML
    } else {
        alert("Please enter a valid percentile."); // Notify user if input is invalid
    }
});
