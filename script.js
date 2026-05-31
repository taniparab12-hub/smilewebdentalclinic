const t = document.getElementById('treatment'); const o = document.getElementById('otherTreatment');
t.addEventListener('change', () => { o.style.display = t.value === 'Other' ? 'block' : 'none'; });
document.getElementById('appointmentForm').addEventListener('submit', e => {
    e.preventDefault();
    const treatment = t.value === 'Other' ? o.value : t.value;
    const message = `🦷 *New Appointment Request*

        Hello Doctor,

        My name is ${name.value}.

        I would like to book an appointment regarding *${treatment}*.

        📞 Phone Number:
        ${phone.value}

        📝 Additional Notes:
        ${notes.value || "None"}

        Kindly contact me to confirm an appointment.

        Thank you.`;
    window.open('https://wa.me/918010691347?text=' + encodeURIComponent(message), '_blank');
});