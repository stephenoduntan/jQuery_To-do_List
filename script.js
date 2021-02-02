function random(min, max){
    let num = Math.floor(Math.random() * (max - min) + 1) + min;
    return num;
}

function changeBg(){
    let bodyBg = $('body').css({
        'background' : 'linear-gradient(90deg, rgb(' + random(0, 225) + ',' + random(0, 225) + ',' + random(0, 225) + '), rgb(' + random(0, 225) + ',' + random(0, 225) + ',' + random(0, 225) + '), rgb(' + random(0, 225) + ',' + random(0, 225) + ',' + random(0, 225) + ')'
    })
    return bodyBg;
}

changeBg();

let inputTab = $('input[type=text]');

$('#add-to-do').click(function(){
    inputTab.fadeToggle();
})
inputTab.keypress(function (e) {
    if(e.which === 13){
        let toDO = inputTab.val()
        inputTab.val('')
        $('ul').append(`<li><span>${$('span').html()}</span>  ${toDO}</li>`);
        $('li').attr('class', 'text-sm flex items-center h-10');
        $('li').children().attr('class', 'h-full p-2 opacity-0 bg-red-600 mr-1 w-0')
        $('li:nth-child(even)').addClass('bg-gray-200 text-gray-800');
        $('li:nth-child(odd)').addClass('text-white');

        if(toDO == ''){
            console.log("No todos' was entered")
            return false;
        }

        if($('li').length > 0){
            $('#message').fadeOut(500, function(){
                $(this).remove();
            })
        }
        changeBg();
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
    e.stopPropagation();
})
