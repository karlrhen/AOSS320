var main = function(){
var answ = []; //this array has all the answers stored in it
var ques = []; //this array stores all the questions
    $('h3').each(function(index){ //when the page loads this selects every h3 element
        answ[index] = $('h3')[index].nextElementSibling.innerHTML; //it gets the next element after the h3 and stores that as the answers
        ques[index] = $('h3')[index].innerHTML; //then stores the h3 elements as the questions
        $('h3')[index].nextElementSibling.innerHTML = ''; //then erases the answers
    });
    
    $('h3').click(function(e){ //when an h3 element is clicked...
        event.preventDefault(); //dont change the page or do any funky stuff
        if($(e.target)[0].nextElementSibling.innerHTML == ''){ //if the answers arent there...
            i = ques.indexOf($(e.target)[0].innerHTML); //find the answers in the answ array and..
            $(e.target)[0].nextElementSibling.innerHTML = answ[i]; //add the found answers to the DOM
        }
        else{
            $(e.target)[0].nextElementSibling.innerHTML = ''; //if there are answers there already erase them from the DOM
        }
    });
}
$(document).ready(main);
