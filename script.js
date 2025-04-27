
// Course Filter Functionality
function filterCourses(category) {
    const allCourses = document.querySelectorAll('.course-card');
    
    allCourses.forEach(course => {
        if (category === 'all') {
            course.style.display = 'block';
        } else if (course.classList.contains(category)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

// Modal Functionality
const modal = document.getElementById('courseModal');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', function() {
        const courseTitle = this.querySelector('h3').innerText;
        const courseDescription = this.querySelector('p').innerText;
        document.getElementById('modalContent').innerText = `${courseTitle}: ${courseDescription}`;
        modal.style.display = 'flex';
    });
});

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// EmailJS Integration for Contact Form
document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function(response) {
            alert('Your message has been sent!');
        }, function(error) {
            alert('Error in sending message. Please try again.');
        });
});
