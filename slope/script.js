let quickHideEnabled = true;
let location = "https://pms-scusd-ca.schoolloop.com/portal/login";
document.addEventListener('keydown', function(event) {
console.log(event)
if((event.key == "q" || event.key == "Q") && event.altKey) {
  event.preventDefault();
  quickHideEnabled = !quickHideEnabled
} else if ((event.key == "q" || event.key == "Q") && quickHideEnabled == true) {
  document.write()
  window.location = location
}
})


