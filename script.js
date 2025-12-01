// Initial Array (7 values minimum)
let myArray = [3, 5, 7, 9, 11, 13, 15];

// Display array forward using for-loop
function showArray() {
  let text = "Array: ";

  for (let i = 0; i < myArray.length; i++) {
    text += myArray[i] + " ";
  }

  document.getElementById("arrayDisplay").innerText = text;
  document.getElementById("output").innerText = "Displayed array using a forward loop.";
}

// Display reverse array using for-loop
function showReverse() {
  let text = "Reversed: ";

  for (let i = myArray.length - 1; i >= 0; i--) {
    text += myArray[i] + " ";
  }

  document.getElementById("arrayDisplay").innerText = text;
  document.getElementById("output").innerText = "Displayed array in reverse.";
}

// Add with UNshift (start)
function addUnshift() {
  let value = document.getElementById("addValue").value;

  if (value === "" || isNaN(value)) {
    alert("Please enter a valid number.");
    return;
  }

  myArray.unshift(Number(value));
  document.getElementById("addValue").value = "";

  showArray();
  document.getElementById("output").innerText = "Added value to the START (unshift).";
}

// Add with PUSH (end)
function addPush() {
  let value = document.getElementById("addValue").value;

  if (value === "" || isNaN(value)) {
    alert("Please enter a valid number.");
    return;
  }

  myArray.push(Number(value));
  document.getElementById("addValue").value = "";

  showArray();
  document.getElementById("output").innerText = "Added value to the END (push).";
}

// Remove first element (SHIFT)
function removeShift() {
  myArray.shift();
  showArray();
  document.getElementById("output").innerText = "Removed FIRST value (shift).";
}

// Remove last element (POP)
function removePop() {
  myArray.pop();
  showArray();
  document.getElementById("output").innerText = "Removed LAST value (pop).";
}

// Show array on page load
showArray();