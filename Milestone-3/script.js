// Get form elements
var form = document.getElementById('resume-form');
var displaySection = document.getElementById('resume-display');
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayExperience = document.getElementById('display-experience');
var displaySkills = document.getElementById('display-skills');
var displayLinkedIn = document.getElementById('display-linkedin');
var displayGitHub = document.getElementById('display-github');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    // Display the values in the resume section
    displayName.innerText = name;
    displayEmail.innerText = email;
    displayExperience.innerText = experience;
    displaySkills.innerText = skills.split(',').join(', ');
    displayLinkedIn.href = linkedin;
    displayLinkedIn.innerText = linkedin;
    displayGitHub.href = github;
    displayGitHub.innerText = github;
    // Show the resume display section
    displaySection.classList.remove('hidden');
});
