$(document).ready(initializeForm); 


function initializeForm() { 
 
var itemCount = 0; 
var itemInput = $("input#item"); 
itemInput.val(""); 
 
$("#add-item").click(shoppingList); 
$("#item").keydown(function (enter) { 
if (enter.keyCode == 13) { 
shoppingList(); 
} 
}); 


function shoppingList() { 
if (itemInput.val() === '') { 
return; 
} 
// getting list items  
var items = $("ul#items"); 
var itemToBuy = itemInput.val(); 
itemInput.val(""); 


// creating the list items with checkbox & assigning id 
var listItem = $("<li> " + itemToBuy + " <a class='delete' href='#'>Done</a></li>"); 
listItem.attr("id", "item[" + itemCount+++"]"); 
addItem(listItem); 


//delete items 
listItem.find("a").click(function () { 
$(this).parent().hide('slow', function () { 
$(this).remove(); 
}); 
}); 


// adding items to the list  
function addItem(listItem) { 
listItem.hide(); 
items.append(listItem); 
listItem.show('slow'); 
} 
// clear input and refocus 
itemInput.focus(); 
} 
} 
