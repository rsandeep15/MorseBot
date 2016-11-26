
$(document).ready(function(){
  $.ajax({
      url: 'http://192.168.1.119:8085?field=morse',
      crossDomain: true,
      dataType: "text",
      success: function(result){
        var data = $.parseJSON(result) ;
      var dotsPercentage = Math.floor(100 * (data['.']/(data['.'] + data['-'])));
      var dashesPercentage = Math.floor(100 * (data['-']/(data['.'] + data['-'])));
      var distribution = document.getElementById('dot-dash').getContext("2d");
      var pieData = [
        {
          value: dotsPercentage,
          color: "#CC9966",
          label: "Dots"
        },
        {
          value: dashesPercentage,
          color: " #CC6633",
          label: "Dashes"
        }
      ];
      var pieOptions = {
        segmentShowStroke : true,
        animateScale : true,
      }
      new Chart(distribution).Pie(pieData, pieOptions);
  }, error: function(result) {
      $("#div1").html('error');
  }});

})
