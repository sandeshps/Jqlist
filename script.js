/**
 * Created by sandesh on 6/16/2014.
 */


$(document).ready(function (){
    $('button').on('click',function() {
        $textValue = $("#textBox").val();
        addList($textValue);
    });
});


// Function that will add the list
function addList($text){
    $listElement = "<ul id='list'></ul>"; // Unordered list
    $("#dynamicList").append("<ul id='list'></ul>"); // Append Unordered list to the <div>
    $listValue = "<li>" + $text + "</li>";
    $("#list").append($listValue); // Add list item to the unordered list    
}


