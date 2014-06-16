/**
 * Created by sandesh on 6/16/2014.
 */


$(document).ready(function() {
    //alert("working");
    createUList(); // Need to call only once. 
    /*$('button').click(function() {
        $textValue = $('#textBox').val();
        addListItem($textValue);       
    });*/
    $('button').on('click',function() {
        $textValue = $('#textBox').val();
        addListItem($textValue);        
        
    }); 
});





// Function to create an Unordered List. Call this only once
function createUList() {
    $ulList = "<ul> id='list'></ul>";
    //$("#dynamicList").append($ulList);
    ($ulList).insertAfter("#dynamicList");
}


// Function to add list item and button to the <div> id = list 
function addListItem($text) {
   
    $listValue = "<li>" + $text + "</li>";
    //$("#list").append($listValue); // Add list item to the unordered list    
    ($listValue).insertAfter("#list");
}


