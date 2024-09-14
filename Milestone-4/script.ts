// Get input elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

// Get display elements
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayExperience = document.getElementById('display-experience') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;

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
