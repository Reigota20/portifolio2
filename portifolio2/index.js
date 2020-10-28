$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
    $('.tabs').tabs();
    $('.slider').slider();
    $(document).ready(function(){
    $('.sidenav').sidenav();
  });
    $(function(){
    $(".button-collapse").sideNav();
 });
    $('.materialboxed').materialbox();
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        $('html, body').animate({ 
            scrollTop: targetOffset
        }, 500);
    });
});