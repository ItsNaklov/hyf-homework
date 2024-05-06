// Flight booking fullname function and Formal fullname
function getFullname(firstname, surname, useFormalName, gender) {
  if (useFormalName) {
    if (gender === "female") {
      return "Queen " + firstname + " " + surname;
    } else {
      return "Lord " + firstname + " " + surname;
    }
  } else {
    return firstname + " " + surname;
  }
}

getFullname("Benjamin", "bigfoot");
const fullname1 = getFullname("Benjamin", "bigfoot", true, "male");
const fullname2 = getFullname("Karen", "tinyhands", true, "female");
console.log(fullname1, fullname2);