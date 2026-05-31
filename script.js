const treatmentSelect = document.getElementById('treatment');
const otherTreatmentInput = document.getElementById('otherTreatment');
const appointmentForm = document.getElementById('appointmentForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');
const notesInput = document.getElementById('notes');

// Config: prefer values from `window.APP_CONFIG` (defined in config.js)
const cfg = window.APP_CONFIG || {};
const CONTACT_NUMBER = cfg.CONTACT_NUMBER || '918010691347';
const WHATSAPP_BASE = cfg.WHATSAPP_BASE || 'https://wa.me';
const DEFAULT_TREATMENT = cfg.DEFAULT_TREATMENT || 'General Checkup';
const NO_NOTES_TEXT = cfg.NO_NOTES_TEXT || 'None';
const MESSAGE_TEMPLATES = Object.assign({
    header: '*New Appointment Request*',
    greeting: 'Hello Doctor,',
    closing: 'Kindly contact me to confirm an appointment.\n\nThank you.'
}, cfg.MESSAGE_TEMPLATES || {});

function updateOtherTreatmentVisibility() {
    otherTreatmentInput.parentElement.style.display = treatmentSelect.value === 'Other' ? 'block' : 'none';
}

updateOtherTreatmentVisibility();
treatmentSelect.addEventListener('change', updateOtherTreatmentVisibility);

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

function setActiveTab(tabId) {
    tabButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.tab === tabId);
    });
    tabPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === tabId);
    });
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tab));
});

appointmentForm.addEventListener('submit', e => {
    e.preventDefault();

    const treatment = treatmentSelect.value === 'Other' ? otherTreatmentInput.value.trim() : treatmentSelect.value;

    const messageLines = [
        MESSAGE_TEMPLATES.header,
        '',
        MESSAGE_TEMPLATES.greeting,
        '',
        `My name is ${nameInput.value.trim()}.`,
        '',
        `Age: ${ageInput.value.trim()}`,
        `Gender: ${genderInput.value.trim()}`,
        '',
        `I would like to book an appointment regarding *${treatment || DEFAULT_TREATMENT}*.`,
        '',
        'Phone Number:',
        phoneInput.value.trim(),
        '',
        'Additional Notes:',
        notesInput.value.trim() || NO_NOTES_TEXT,
        '',
        MESSAGE_TEMPLATES.closing
    ];

    const message = messageLines.join('\n');

    window.open(`${WHATSAPP_BASE}/${CONTACT_NUMBER}?text=` + encodeURIComponent(message), '_blank');
});