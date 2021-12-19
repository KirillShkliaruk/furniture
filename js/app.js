$(document).ready(function(){
    $('.header-content__burger').click(function(event){
        $('.header-content__burger,.header-content__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})