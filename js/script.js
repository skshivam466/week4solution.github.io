// TODO: STEP 0 - Define an array of category objects
var categories = [
  {
    short_name: "L",
    name: "Lunch",
    special_instructions: "Available only during lunch hours"
  },
  {
    short_name: "D",
    name: "Dinner",
    special_instructions: "Available only during dinner hours"
  },
  {
    short_name: "S",
    name: "Sushi",
    special_instructions: "Available all day"
  },
  {
    short_name: "A",
    name: "Appetizers",
    special_instructions: "Available all day"
  },
  {
    short_name: "B",
    name: "Beverages",
    special_instructions: "Available all day"
  }
];

// TODO: STEP 1 - Randomly select a category short_name from the categories array and assign it to the variable "randomCategoryShortName"
var randomCategoryShortName = categories[Math.floor(Math.random() * categories.length)].short_name;

// TODO: STEP 2 - Update the onclick function for the "Specials" tile to use the randomCategoryShortName variable
document.getElementById("specials").onclick = function() {
  $dc.loadMenuItems(randomCategoryShortName);
};

// TODO: STEP 3 - Define a function to generate the HTML for a single category page based on a category object
function getCategoryHtml(category) {
  var html = "<h2>" + category.name + "</h2>";
  html += "<p>" + category.special_instructions + "</p>";
  html += "<ul>";}
  for (var i = 0; i < $dc.getAllMenuItems().menu_items.length; i++) {
    var menuItem = $dc.getAllMenuItems().menu_items[i];
    if (menuItem.short_name.startsWith(category.short_name));}
