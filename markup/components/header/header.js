$(document).ready(function() {

  $('.header-burger').on('click', function(){
    $(this).find('button').toggleClass('is-active')
    $('.header-mnu').toggleClass('is-active')
    $('body').toggleClass('stoped')
  })

})