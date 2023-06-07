const form = document.querySelector("form");

//  script for min 8 letter password, with at least a symbol, upper and lower case letters and a number
function checkPassword(str) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
}

const userNames = ["Fulya", "Zeynep", "Begüm"];

const checkUserName = (name) => {
  // Check our user names array includes user's name to see if we are gonna allow that user to use the app or not
  return userNames.some((n) => n.toLowerCase() === name.toLowerCase());
};

// Function for handling form element's submit events
const handleFormSubmit = (event) => {
  // Prevent Default Form Submit event becase we dont want the page to be refreshed
  event.preventDefault();

  const userName = document.querySelector("input[type=text]").value;

  const password = document.querySelector("input[type=password]").value;

  if (checkPassword(password) && checkUserName(userName)) {
    alert("Now your access has been granted for the questions!");
  }
};
form.addEventListener("submit", handleFormSubmit);
