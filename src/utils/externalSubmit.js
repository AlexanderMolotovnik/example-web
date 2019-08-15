export default formId => {
  document.getElementById(formId).dispatchEvent(new Event('submit', { cancelable: true }))
}
