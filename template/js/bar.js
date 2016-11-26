
$(document).ready(function(){
  $.ajax({
      url: 'http://192.168.2.3:8085?field=english',
      crossDomain: true,
      dataType: "text",
      success: function(result){
      var alphabetFreq = $.parseJSON(result) ;
      var distribution = document.getElementById('dot-dash').getContext("2d");
      var alphabet = [];
      var color = 'rgba(102,0,0, 0.9)';
      for (i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i).toUpperCase());
      }
      var data = {
          labels: alphabet,
          datasets: [
              {
                  label: "Alphabet Frequency",
                  fillColor: color,
                  strokeColor: "rgba(220,220,220,0.8)",
                  borderWidth: 1,
                  data: alphabetFreq,
              }
          ]
      };
      var distribution = document.getElementById('alphabet').getContext("2d");
      new Chart(distribution).Bar(data, { scaleFontColor: "#ffffff" });
  }, error: function(result) {
      $("#div1").html('error');
  }});

})
