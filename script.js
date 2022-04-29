const custName = document.getElementById('custName')
const email = document.getElementById('email')
const comment = document.getElementById('comment')
const error = document.getElementById('error')

form.addEventListener('submit', (ex) => {
  let messages = []
  if (custName.value === '' || custName.value == null) {
    messages.push('Name is required')
  }
  if (custName.value.length <= 1) {
    messages.push('name must be at least 2 characters or longer')
  }
  if (email.value === '' || email.value == null) {
    messages.push('e-mail cannot be blank')
  } 
  if (comment.value === '' || comment.value == null) {
    messages.push('please include a descriptive message of the concern')
  } 
  if (messages.length > 0) {
    ex.preventDefault()
    error.innerText = messages.join(', ')
  }
})