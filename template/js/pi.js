
$(document).ready(function(){
  $.ajax({
      url: 'http://192.168.2.3:8085?field=morse',
      crossDomain: true,
      success: function(result){
      console.log(result);
  }, error: function(result) {
      $("#div1").html('error');
  }});
  var distribution = document.getElementById('dot-dash').getContext("2d");
  var pieData = [
    {
      value: 20,
      color: "#878BB7"
    },
    {
      value: 40,
      color: "#4BCAB5"
    }
  ];
  var pieOptions = {
    segmentShowStroke : false,
    animateScale : true
  }
  new Chart(distribution).Pie(pieData, pieOptions);
})
