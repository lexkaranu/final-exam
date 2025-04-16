document.addEventListener('DOMContentLoaded', () => {
  const addCourseButton = document.getElementById('addCourseButton');
  const gpaForm = document.getElementById('gpaForm');
  const courseRows = document.getElementById('courseRows');
  const gpaValue = document.getElementById('gpaValue');

  // Grade conversion scale
  const gradeToGPA = {
    A: 4,
    B: 3,
    C: 2,
    D: 1,
    F: 0
  };

  // Function to calculate GPA
  function calculateGPA() {
    const courseElements = document.querySelectorAll('.courseRow');
    let totalPoints = 0;
    let totalCourses = 0;

    courseElements.forEach(row => {
      const courseName = row.querySelector('.courseName').value;
      const grade = row.querySelector('.grade').value;

      if (courseName && grade) {
        totalPoints += gradeToGPA[grade];
        totalCourses++;
      }
    });

    if (totalCourses > 0) {
      const gpa = (totalPoints / totalCourses).toFixed(2);
      gpaValue.textContent = gpa;
    } else {
      gpaValue.textContent = '0.0';
    }
  }

  // Add another course row
  addCourseButton.addEventListener('click', () => {
    const newRow = document.createElement('div');
    newRow.classList.add('courseRow');
    newRow.innerHTML = `
      <input type="text" class="courseName" placeholder="Course Name" required>
      <select class="grade" required>
        <option value="">Select Grade</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
    `;
    courseRows.appendChild(newRow);
  });

  // Handle form submission
  gpaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateGPA();
  });
});
