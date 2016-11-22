
$(document).ready(function(){
  $.ajax({
      url: 'http://192.168.2.3:8085?field=morse',
      crossDomain: true,
      dataType: "text",
      success: function(result){
        var data = $.parseJSON(result) ;
      console.log(data);
      console.log("Dots: " + data["."] + " Dashes: " + data["-"]);
      var dotsPercentage = Math.floor(100 * (data['.']/(data['.'] + data['-'])));
      var dashesPercentage = Math.floor(100 * (data['-']/(data['.'] + data['-'])));
      var distribution = document.getElementById('dot-dash').getContext("2d");
      var pieData = [
        {
          value: dotsPercentage,
          color: "#878BB7",
          label: "Dots"
        },
        {
          value: dashesPercentage,
          color: "#4BCAB5",
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
