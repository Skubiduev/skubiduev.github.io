$('.open-button').click(function () {
    var connect = $(this).next('.connect');
    if ($(connect[0]).css('max-height') === '0px') $(connect[0]).css('max-height', '600px');
    else $(connect[0]).css('max-height', '0')
});