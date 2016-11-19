
$(document).ready(function(){
  $.ajax({
      url: 'http://128.54.235.118:8085?field=morse',
      crossDomain: true,
      success: function(result){
      console.log(result);

      var distribution = document.getElementById('dot-dash').getContext("2d");
      var pieData = [
        {
          value: result['.']/(result['.'] + result['-']),
          color: "#878BB7"
        },
        {
          value: result['-']/(result['.'] + result['-']),
          color: "#4BCAB5"
        }
      ];
      var pieOptions = {
        segmentShowStroke : false,
        animateScale : true
      }
      new Chart(distribution).Pie(pieData, pieOptions);
  }, error: function(result) {
      $("#div1").html('error');
  }});

})
