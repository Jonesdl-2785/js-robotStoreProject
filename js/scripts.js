//Using on(), mouseenter(), mouseleave(), mouseup()
$(function(){
  $('#robots').on('mouseenter', function(){
    //mouseenter
    $('article label img').addClass('.DarkHighlight');
    });
  //mouseleave
  $('#robots').on('mouseleave', function(){
    $('article label img').css('background-color', '');
  });
});

$(function(){
  $('#hardware').on('mouseenter mouseleave mouseup', function(){
    //mouse events
    $('this').toggleClass('.DarkHighlight');
    $('this').css('cursor', 'pointer');
    });
  //mouseleave
  $('#hardware').on('mouseleave', function(){
    $('label input').css('background-color', '');
  });
});
$(function(){
  $('.searchbox').keyup(function() {
   var inputText = document.getElementById('inputText').value;
   var searchText = document.getElementsByTagName("label");
   console.log(inputText);
   //document.getElementsByTagName("label").innerHTML;
   $('.list-group-item label article').each(function() {
      console.log($(this).text());
      var string = $(this).text();
      if(string.indexOf(searchText) == 1) {
        $(this).show();
      } else {
        $(this).hide();
      }
   });
});
})
