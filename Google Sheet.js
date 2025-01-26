const scriptURL = 'https://script.google.com/macros/s/AKfycbx89Rb62v6NCxXYDEO5r0rscXXLDPehMLEdtRx-Vz_R4067mModWHbgk3kz08jrF9QbUg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Formulário enviado com sucesso!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
