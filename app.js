var main = function(){
var answ = [];
var ques = [];
    $('h3').each(function(index){
        answ[index] = $('h3')[index].nextElementSibling.innerHTML;
        ques[index] = $('h3')[index].innerHTML;
        $('h3')[index].nextElementSibling.innerHTML = '';
    });
    
    $('h3').click(function(e){
        event.preventDefault();
        if($(e.target)[0].nextElementSibling.innerHTML == ''){
            i = ques.indexOf($(e.target)[0].innerHTML);
            $(e.target)[0].nextElementSibling.innerHTML = answ[i];
        }
        else{
            $(e.target)[0].nextElementSibling.innerHTML = '';
        }
    });
}
$(document).ready(main);
