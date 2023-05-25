$('.wanna_go').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();
    
    $('.three_1').css(
    'transform',
    'translate(-' + x * 30 + 'px)'
    );
    
    $('.three_2').css(
    'transform',
    'translate(-' + x * 120 + 'px)'
    );
});