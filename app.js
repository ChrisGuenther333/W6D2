i=0;
while(i < 16) {
    $('#page').append('<div class="box"></div>');
    i++;
}

$('#page').on('click', '.box', function() {
    $(this).toggleClass('boxClicked')

    if($(this).hasClass('boxClicked')) {
        $(this).css('background-color', 'gray');
    }
    else {
        $(this).css('background-color', 'rgb(51, 51, 51)');
    }
});