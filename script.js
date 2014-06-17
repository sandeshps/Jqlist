/**
 * Created by sandesh on 6/16/2014.
 */

var $count = 0; // For counting the number of lists


$(document).ready(function () {
    createUList(); // Need to call only once.
    $('#btnAdd').on('click', function() {        
        var $textValue = $('#textBox').val();
        if( $.trim($textValue).length == 0 ){ // textbox should not be empty 
            alert("Input a string ... ");
        }
        else {
        addListItem($textValue);
        }
    });
});
    



// Function to create an Unordered List. Call this only once
function createUList() {
    var $ulList = "<ul id='list'></ul>";
    $("#dynamicList").append($ulList);
}


// Function to add list item and button to the <div> id = list 
function addListItem($text) {    
    
    var $listItem = "<li>" + $text + "<button>Delete</button> </li>";
    $("#list").append($listItem); // Add list item with button to the unordered list
    $("#list").append("<p>"+ (++$count) + " item(s) in the list </p>"); // Append 'status' at the end of the list
    $("#textBox").val(" ");  // Clear the textbox
    attachEvents();
}



// Attach 'click' even to each button generated and delete the corresponding list item
function attachEvents() {    
    $('ul').on('click','button',function () {
        $(this).closest('li').remove();
    });
}






