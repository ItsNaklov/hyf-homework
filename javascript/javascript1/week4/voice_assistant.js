let name = "";
let todos = [];
let currentDate = new Date();

function getReply(command) {
  const words = command.split(" ");
  const action = words[0];

  if (action === "Hello") {
    const restHello = words.slice(3).join(" ");

    if (name.length > 0) {
      return `You already mentioned your name`;
    } else {
      name = restHello;
      return `Nice to meet you ${name}`;
    }
  } else if (action === "What") {
    if (words[1] === "is" && words[2] === "my" && words[3] === "name?") {
      return name ? `Your name is ${name}` : "Your name not mentioned yet.";
    } else if (
      words[1] === "day" &&
      words[2] === "is" &&
      words[3] === "it" &&
      words[4] === "today?"
    ) {
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString("default", { month: "long" });
      const year = currentDate.getFullYear();
      return `${day} of ${month} ${year}`;
    } else if (
      words[1] === "is" &&
      words[2] === "on" &&
      words[3] === "my" &&
      words[4] === "todo?"
    ) {
      return todos.length
        ? `You have ${todos.length} todos - ${todos.join(" and ")}`
        : "You have no todos.";
    } else if (
      words[1] === "is" &&
      !isNaN(parseInt(words[2])) &&
      (words[3] === "+" ||
        words[3] === "-" ||
        words[3] === "*" ||
        words[3] === "/") &&
      !isNaN(parseInt(words[4]))
    ) {
      const num1 = parseInt(words[2]);
      const num2 = parseInt(words[4]);
      let result;

      if (words[3] === "+") {
        result = num1 + num2;
      } else if (words[3] === "-") {
        result = num1 - num2;
      } else if (words[3] === "*") {
        result = num1 * num2;
      } else if (words[3] === "/") {
        result = num1 / num2;
      } else {
        return "Invalid operation";
      }

      return `The result of ${num1} ${words[3]} ${num2} is ${result}`;
    } else if (
      words[1] === "is" &&
      words[2] === "the" &&
      words[3] === "square" &&
      words[4] === "of" &&
      !isNaN(parseInt(words[5])) &&
      words[6] === "?"
    ) {
      const num = parseInt(words[5]);
      const square = num * num;
      return `The square of ${num} is ${square}`;
    } else {
      return "I don't understand that command.";
    }
  } else if (action === "Add") {
    if (
      words[1] === "fishing" &&
      words[2] === "to" &&
      words[3] === "my" &&
      words[4] === "todo"
    ) {
      todos.push("Fishing");
      return "fishing added to your todo";
    } else if (
      words[1] === "singing" &&
      words[2] === "in" &&
      words[3] === "the" &&
      words[4] === "shower" &&
      words[5] === "to" &&
      words[6] === "my" &&
      words[7] === "todo"
    ) {
      todos.push("singing in the shower");
      return "singing in the shower added to your todo";
    }
  } else if (action === "Remove") {
    if (
      words[1] === "fishing" &&
      words[2] === "from" &&
      words[3] === "my" &&
      words[4] === "todo"
    ) {
      const index = todos.indexOf("fishing");
      if (index !== -1) {
        todos.splice(index, 1);
        return "Removed fishing from your todo";
      } else {
        return "fishing is not in your todo list";
      }
    }
  } else if (action === "Set") {
    if (
      words[1] === "a" &&
      words[2] === "timer" &&
      words[3] === "for" &&
      !isNaN(parseInt(words[4])) &&
      words[5] === "minutes"
    ) {
      const time = parseInt(words[4]);
      setTimeout(() => {
        console.log("Timer done");
      }, time * 60 * 1000);
      return `Timer set for ${time} minutes`;
    }
  }

  return "I don't understand that command.";
}

// Example usage:
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you Benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you Benjamin"
console.log(getReply("Remove fishing from my todo")); // "fishing added to your todo"function getReply
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("What is the square of 6 ?"));
