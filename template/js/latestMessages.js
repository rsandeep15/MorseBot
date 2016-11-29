$( document ).ready(function() {
// Last 6 messages
  var textArea = $('#messages');
  $.ajax({
      url: 'http://192.168.2.3:8008',
      crossDomain: true,
      success: function(result){
        textArea.val(result);
  }, error: function(result) {
      console.log("Error");
  }});
});
