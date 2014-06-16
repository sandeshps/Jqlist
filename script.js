/**
 * Created by sandesh on 6/16/2014.
 */

var ulListID = 'list'; // Unordered list ID for further use 

$(document).ready(function (){
    createUList(); // Need to call only once. 
    $('button').on('click',function() {
        $textValue = $("#textBox").val();
        addList($textValue);
    });
});


// Function that will add the list
function addList($text){    
    $listValue = "<li>" + $text + "</li>";
    $("#list").append($listValue); // Add list item to the unordered list    
}


// Function to create an Unordered List
function createUList() {
    $ulList = "<ul> id='"+ulListID+"'></ul>";
    $("#dynamicList").append($ulList);
}


function createListItem() {
}


