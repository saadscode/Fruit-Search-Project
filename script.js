const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];

  results = fruit.filter((item) =>
    item.toLowerCase().includes(str.toLowerCase())
  );

  return results;
}

// function searchHandler(e) {
//   const userInput = e.target.value.toLowerCase();
//   const results = search(userInput);

//   showSuggestions(results, userInput);
// }

function searchHandler(e) {
  const userInput = e.target.value.toLowerCase();

  if (userInput === "") {
    suggestions.innerHTML = "";
    suggestions.parentElement.classList.remove("has-suggestions");
    return;
  }

  const results = search(userInput);
  showSuggestions(results, userInput);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  if (results.length > 0) {
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      suggestions.appendChild(li);
    });
    suggestions.parentElement.classList.add("has-suggestions");
  } else {
    suggestions.parentElement.classList.remove("has-suggestions");
  }
}

function highlightSuggestion(e) {
  if (e.target.tagName === "LI") {
    const suggestionList = suggestions.querySelectorAll("li");
    suggestionList.forEach((suggestion) => {
      suggestion.classList.remove("highlighted");
    });
    e.target.classList.add("highlighted");
  }
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    input.value = e.target.textContent;
    suggestions.parentElement.classList.remove("has-suggestions");
  }
}

suggestions.addEventListener("mouseover", highlightSuggestion);
input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);
