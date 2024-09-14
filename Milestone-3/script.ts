// Get form elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const displaySection = document.getElementById('resume-display') as HTMLElement;

const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayExperience = document.getElementById('display-experience') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;
const displayLinkedIn = document.getElementById('display-linkedin') as HTMLAnchorElement;
const displayGitHub = document.getElementById('display-github') as HTMLAnchorElement;

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;

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
