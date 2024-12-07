var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var form = document.getElementById("cv-form");
var resumeContent = document.getElementById("resume-content");
var editButton = document.getElementById("edit-resume");
var saveButton = document.getElementById("save-resume");
// Store Resume Data Globally
var resumeData = {};
// Form Submission to Generate Resume
form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, email, phone, summary, degree, institution, educationStartDate, educationEndDate, skills;
    return __generator(this, function (_a) {
        event.preventDefault();
        name = document.getElementById("name").value;
        email = document.getElementById("email").value;
        phone = document.getElementById("phone").value;
        summary = document.getElementById("summary").value;
        degree = document.getElementById("degree").value;
        institution = document.getElementById("institution").value;
        educationStartDate = document.getElementById("education-start-date").value;
        educationEndDate = document.getElementById("education-end-date").value || "Present";
        skills = document.getElementById("skills").value;
        // Save Data Globally
        resumeData = {
            name: name,
            email: email,
            phone: phone,
            summary: summary,
            degree: degree,
            institution: institution,
            educationStartDate: educationStartDate,
            educationEndDate: educationEndDate,
            skills: skills,
        };
        // Display Resume
        displayResume(resumeData);
        return [2 /*return*/];
    });
}); });
// Function to Display Resume
function displayResume(data) {
    var resumeHTML = "\n        <div class=\"profile-section\">\n            <h3 contenteditable=\"false\" id=\"editable-name\">".concat(data.name, "</h3>\n        </div>\n        <p><strong>Email:</strong> <span contenteditable=\"false\" id=\"editable-email\">").concat(data.email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"false\" id=\"editable-phone\">").concat(data.phone, "</span></p>\n        <hr>\n        <h4>Professional Summary</h4>\n        <p contenteditable=\"true\" id=\"editable-summary\">").concat(data.summary, "</p>\n        <hr>\n        <h4>Education</h4>\n        <p>\n            <strong contenteditable=\"true\" id=\"editable-degree\">").concat(data.degree, "</strong> from \n            <span contenteditable=\"true\" id=\"editable-institution\">").concat(data.institution, "</span> \n            (<span contenteditable=\"true\" id=\"editable-start-date\">").concat(data.educationStartDate, "</span> - \n            <span contenteditable=\"true\" id=\"editable-end-date\">").concat(data.educationEndDate, "</span>)\n        </p>\n        <hr>\n        <h4>Skills</h4>\n        <p contenteditable=\"false\" id=\"editable-skills\">").concat(data.skills, "</p>\n    ");
    resumeContent.innerHTML = resumeHTML;
    editButton.style.display = "inline-block";
    saveButton.style.display = "none";
}
// Edit Resume
editButton.addEventListener("click", function () {
    var editableElements = resumeContent.querySelectorAll("[contenteditable]");
    editableElements.forEach(function (element) {
        element.setAttribute("contenteditable", "true");
    });
    editButton.style.display = "none";
    saveButton.style.display = "inline-block";
});
// Save Resume After Edit
saveButton.addEventListener("click", function () {
    // Update Resume Data
    resumeData.name = document.getElementById("editable-name").innerText;
    resumeData.email = document.getElementById("editable-email").innerText;
    resumeData.phone = document.getElementById("editable-phone").innerText;
    resumeData.summary = document.getElementById("editable-summary").innerText;
    resumeData.degree = document.getElementById("editable-degree").innerText;
    resumeData.institution = document.getElementById("editable-institution").innerText;
    resumeData.educationStartDate = document.getElementById("editable-start-date").innerText;
    resumeData.educationEndDate = document.getElementById("editable-end-date").innerText;
    resumeData.skills = document.getElementById("editable-skills").innerText;
    // Disable Editing
    var editableElements = resumeContent.querySelectorAll("[contenteditable]");
    editableElements.forEach(function (element) {
        element.setAttribute("contenteditable", "false");
    });
    editButton.style.display = "inline-block";
    saveButton.style.display = "none";
});
