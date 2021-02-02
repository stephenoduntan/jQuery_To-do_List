function random(min, max){
    let num = Math.floor(Math.random() * (max - min) + 1) + min;
    return num;
}

function changeBg(){
    let bodyBg = $('body').css({
        'background' : 'linear-gradient(to right, rgb(' + random(0, 225) + ',' + random(0, 225) + ',' + random(0, 225) + '), rgb(' + random(0, 225) + ',' + random(0, 225) + ',' + random(0, 225) + '), rgb(' + random(0, 225) + ',' + random(0, 225) + ',' + random(0, 225) + ')',
    })
    return bodyBg;
}

changeBg();

let maxInfo = 'To-do list maximum input reached. Delete already done todos\' to add more';

let inputTab = $('input[type=text]');
let totalTodo = $('li').length;

$('#add-to-do').click(function(){
    inputTab.fadeToggle();
})
inputTab.keypress(function (e) {
    if(e.which === 13){
        let toDO = inputTab.val()
        inputTab.val('')

        if(toDO == ''){
            console.log("No todo was entered")
            return false;
        }

        $('ul').append(`<li><span>${$('span').html()}</span>  ${toDO}</li>`);
        $('li').attr('class', 'text-sm flex items-center h-10');
        $('li').children().attr('class', 'h-full p-2 opacity-0 bg-red-600 mr-1 w-0')
        $('li:nth-child(even)').addClass('bg-gray-200');
        $('li:nth-child(odd)').addClass('text-white');

        if(totalTodo > 0){
            $('#message').fadeOut(500, function(){
                $(this).remove();
            })
        }
        if($('#container').height() === $('body').height()){
            $('#container').append(`<p class="text-sm text-center text-gray-200 p-2">${maxInfo}</p>`);
            inputTab.attr('disabled', '')
            console.log('To-do list max reached')
            return false;
        }
        changeBg();
        totalTodo++;
    }
});

$('ul').on('click', 'li', function(){
    $(this).addClass('line-through text-gray-400')
    console.log('Done')
})


$('ul').on('mouseover', 'li', function(){
    let over = $(this).children();
    over.removeClass('w-0 opacity-0');
    over.addClass('w-10')
    over.css('transition', '.3s linear')
})
$('ul').on('mouseleave', 'li', function(){
    let over = $(this).children();
    over.removeClass('w-10');
    over.addClass('w-0 opacity-0')
})

$('ul').on('click', 'span', function(e){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    })

    totalTodo--;
    $('p').remove();
    inputTab.removeAttr('disabled', '')
    e.stopPropagation();
})
