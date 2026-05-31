const t=document.getElementById('treatment');const o=document.getElementById('otherTreatment');
t.addEventListener('change',()=>{o.style.display=t.value==='Other'?'block':'none';});
document.getElementById('appointmentForm').addEventListener('submit',e=>{
e.preventDefault();
const treatment=t.value==='Other'?o.value:t.value;
const msg=`🦷 SMILEWEB DENTAL CLINIC\n\nPatient: ${name.value}\nPhone: ${phone.value}\nTreatment: ${treatment}\nNotes: ${notes.value}`;
window.open('https://wa.me/918010691347?text='+encodeURIComponent(msg),'_blank');
});