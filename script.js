// Function to calculate average grade for a student
function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

// Function to fetch and display student details
async function fetchAndDisplayStudents() {
    try {
        const response = await fetch('students.json');
        const students = await response.json();

        const studentsList = document.getElementById('studentsList');

        students.forEach(student => {
            const averageGrade = calculateAverage(student.grades);

            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${student.name}</strong>: Average Grade - ${averageGrade.toFixed(2)}`;
            
            studentsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching or displaying student details:', error.message);
    }
}

// Call the function to fetch and display students when the page loads
window.onload = fetchAndDisplayStudents;
