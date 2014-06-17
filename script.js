/**
 * Created by sandesh on 6/16/2014.
 */

var $count = 0; // Hold the count of lists created/deleted


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
    removeParagraph(); // Remove the paragraph
    $("#textBox").val(" ");  // Clear the textbox
    var $listItem = "<li>" + $text + "<button>Delete</button> </li>";
    $("#list").append($listItem); // Add list item with button to the unordered list
    $("<p>"+ (++$count) + " item(s) in the list </p>").insertAfter("#list"); // Append 'status' at the end of the list    
    attachEvents();
}



// Attach 'click' even to each button generated and delete the corresponding list item
function attachEvents() {    
    $('ul').on('click','button',function () {
        $(this).closest('li').remove();    
        --$count;
        removeParagraph(); // Remove the paragraph again for updating new status
        updateStatus();
    });
}

// Removes the paragraph used to display the status
function removeParagraph() {
    $("p").remove();
}

// Display status
function updateStatus() {
        $("<p>"+ $count + " item(s) in the list </p>").insertAfter("#list");
}






