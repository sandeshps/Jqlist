/**
 * Created by sandesh on 6/16/2014.
 */

var $count = 0; // For counting the number of lists
var $buttonText = "btnList"; // Fixed string for every button created dynamically. Random number will be appended to this to get different IDs
var $buttons = []; // To store the dynamically created buttons


$(document).ready(function () {
    createUList(); // Need to call only once.
    $("#dynamicList").append("<ul id='t'><li><button>Click</button></li></ul>");
    attachEvents();
    $('#btnAdd').on('click', function() {
        
        var $textValue = $('#textBox').val();
        addListItem($textValue);
    });
});
    



// Function to create an Unordered List. Call this only once
function createUList() {
    var $ulList = "<ul id='list'></ul>";
    $("#dynamicList #t").append($ulList);
}


// Function to add list item and button to the <div> id = list 
function addListItem($text) {       
    var $textBox = $("#textBox"); // To clear the textbox
    $textBox.val(" ");
    var $buttonWithID = $buttonText + Math.random(0,Math.random(1,1000000)).toFixed(5); // Generate a random ID to append with the button text
    $buttons.push('#'+$buttonWithID); // We need this later to identify the button clicked
    var $button = "<input type='button' id='" + $buttonWithID +"' value='Delete' >";
    var $listItem = "<li>" + $text + " " + $button + "</li>";
    $("#list").append($listItem); // Add list item with button to the unordered list  
    
    attachEvents('#'+$buttonWithID);
    
    
}

function attachEvents($btn) {
   // $("#list li").on('click','#textBox',deleteListItem);    
    $("#dynamicList").on('click','button',deleteListItem);
    //alert($btn);
    //$("#dynamicList #list li").on('click',$btn,deleteListItem);
    
    
}




// Function to delete list item 
function deleteListItem() {
   /* var $btnID = "#" + $buttonId; // To make it useful for identify
    $($btnID).on('click',function () {
        alert("del");
        $(this).remove('li');
    });*/
    alert("he");
    //$('#dynamicList').unbind('click');
} 




