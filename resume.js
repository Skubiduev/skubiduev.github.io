$('.open-button').click(function () {
    var connect = $(this).next('.connect');
    if ($(connect[0]).css('max-height') === '0px') $(connect[0]).css('max-height', '700px');
    else $(connect[0]).css('max-height', '0')
});