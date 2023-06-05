
function handleFormSubmit(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const appointment = {
    name,
    date,
    time
  };


  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));

  document.getElementById('name').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';

  alert('Appointment has been successfully made!');
}


const appointmentForm = document.getElementById('appointment-form');
appointmentForm.addEventListener('submit', handleFormSubmit);
