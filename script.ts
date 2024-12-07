
const form = document.getElementById("cv-form") as HTMLFormElement;
const resumeContent = document.getElementById("resume-content") as HTMLElement;
const editButton = document.getElementById("edit-resume") as HTMLButtonElement;
const saveButton = document.getElementById("save-resume") as HTMLButtonElement;

// Store Resume Data Globally
let resumeData: any = {};

// Form Submission to Generate Resume
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Retrieve Form Data
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const educationStartDate = (document.getElementById("education-start-date") as HTMLInputElement).value;
    const educationEndDate = (document.getElementById("education-end-date") as HTMLInputElement).value || "Present";
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;



    // Save Data Globally
    resumeData = {
        name,
        email,
        phone,
        summary,
        degree,
        institution,
        educationStartDate,
        educationEndDate,
        skills,
    };

    // Display Resume
    displayResume(resumeData);
});

// Function to Display Resume
function displayResume(data: any) {
    const resumeHTML = `
        <div class="profile-section">
            <h3 contenteditable="false" id="editable-name">${data.name}</h3>
        </div>
        <p><strong>Email:</strong> <span contenteditable="false" id="editable-email">${data.email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="false" id="editable-phone">${data.phone}</span></p>
        <hr>
        <h4>Professional Summary</h4>
        <p contenteditable="true" id="editable-summary">${data.summary}</p>
        <hr>
        <h4>Education</h4>
        <p>
            <strong contenteditable="true" id="editable-degree">${data.degree}</strong> from 
            <span contenteditable="true" id="editable-institution">${data.institution}</span> 
            (<span contenteditable="true" id="editable-start-date">${data.educationStartDate}</span> - 
            <span contenteditable="true" id="editable-end-date">${data.educationEndDate}</span>)
        </p>
        <hr>
        <h4>Skills</h4>
        <p contenteditable="false" id="editable-skills">${data.skills}</p>
    `;

    resumeContent.innerHTML = resumeHTML;
    editButton.style.display = "inline-block";
    saveButton.style.display = "none";
}

// Edit Resume
editButton.addEventListener("click", () => {
    const editableElements = resumeContent.querySelectorAll("[contenteditable]");
    editableElements.forEach((element) => {
        element.setAttribute("contenteditable", "true");
    });

    editButton.style.display = "none";
    saveButton.style.display = "inline-block";
});

// Save Resume After Edit
saveButton.addEventListener("click", () => {
    // Update Resume Data
    resumeData.name = (document.getElementById("editable-name") as HTMLElement).innerText;
    resumeData.email = (document.getElementById("editable-email") as HTMLElement).innerText;
    resumeData.phone = (document.getElementById("editable-phone") as HTMLElement).innerText;
    resumeData.summary = (document.getElementById("editable-summary") as HTMLElement).innerText;
    resumeData.degree = (document.getElementById("editable-degree") as HTMLElement).innerText;
    resumeData.institution = (document.getElementById("editable-institution") as HTMLElement).innerText;
    resumeData.educationStartDate = (document.getElementById("editable-start-date") as HTMLElement).innerText;
    resumeData.educationEndDate = (document.getElementById("editable-end-date") as HTMLElement).innerText;
    resumeData.skills = (document.getElementById("editable-skills") as HTMLElement).innerText;

    // Disable Editing
    const editableElements = resumeContent.querySelectorAll("[contenteditable]");
    editableElements.forEach((element) => {
        element.setAttribute("contenteditable", "false");
    });

    editButton.style.display = "inline-block";
    saveButton.style.display = "none";
});
