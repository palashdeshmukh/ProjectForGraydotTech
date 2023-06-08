var draggedItem = null;

// Event listeners for drag and drop events
document.addEventListener("dragstart", function(event) {
  draggedItem = event.target;
  event.target.style.opacity = "0.5"; // Change appearance of the dragged item
});

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (event.target.className === "container") {
    event.target.appendChild(draggedItem);
    draggedItem.style.opacity = "1"; // Restore original appearance of the dragged item
    displaySuccessMessage(); // Display success message or update UI as desired
  }
});

function reset() {
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");
  container2.innerHTML = "";
  container1.innerHTML = '<div class="item" draggable="true"><div class="imageBox" style="background-color: red;"></div><div class="textBox">Item 1</div></div>' +
  '<div class="item" draggable="true"><div class="imageBox" style="background-color: yellow;"></div><div class="textBox">Item 2</div></div>' +
  '<div class="item" draggable="true"><div class="imageBox" style="background-color: green;"></div><div class="textBox">Item 3</div></div>';
}

function displaySuccessMessage() {
  // Display success message or update UI in any appropriate way
  console.log("Item dropped successfully!");
}

function displaymyInfo(){
 var myInfo=document.getElementById("infoBox");
 myInfo.style.display="block";
}
function hidemyInfo(){
    var myInfo=document.getElementById("infoBox");
    myInfo.style.display="";
}