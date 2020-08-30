var today = new Date()
var curHr = today.getHours()
if (curHr < 12) {
  document.getElementById("hi").innerHTML = 'Good Morning!';
} else if (curHr < 18) {
  document.getElementById("hi").innerHTML = 'Good Afternoon!';
} else {
  document.getElementById("hi").innerHTML = 'Good Evening!';
}
