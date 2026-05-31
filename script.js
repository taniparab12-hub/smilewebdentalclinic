const treatmentSelect = document.getElementById('treatment');
const otherTreatmentInput = document.getElementById('otherTreatment');
const appointmentForm = document.getElementById('appointmentForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');
const notesInput = document.getElementById('notes');

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
    const message = `🦷 *New Appointment Request*

Hello Doctor,

My name is ${nameInput.value.trim()}.

👤 Age: ${ageInput.value.trim()}
👥 Gender: ${genderInput.value.trim()}

I would like to book an appointment regarding *${treatment || 'General Checkup'}*.

📞 Phone Number:
${phoneInput.value.trim()}

📝 Additional Notes:
${notesInput.value.trim() || 'None'}

Kindly contact me to confirm an appointment.

Thank you.`;

    window.open('https://wa.me/918010691347?text=' + encodeURIComponent(message), '_blank');
});