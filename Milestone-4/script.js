// Get input elements
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
// Get display elements
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayExperience = document.getElementById('display-experience');
var displaySkills = document.getElementById('display-skills');
// Function to update the preview
function updatePreview() {
    displayName.textContent = nameInput.value || 'Your Name';
    displayEmail.textContent = emailInput.value || 'Your Email';
    displayExperience.textContent = experienceInput.value || 'Your experience goes here.';
    displaySkills.textContent = skillsInput.value || 'Your skills go here.';
}
// Add event listeners for real-time updates
nameInput.addEventListener('input', updatePreview);
emailInput.addEventListener('input', updatePreview);
experienceInput.addEventListener('input', updatePreview);
skillsInput.addEventListener('input', updatePreview);
// Initial call to populate the preview with default values
updatePreview();
