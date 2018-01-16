var cryptos = ["xrp_mxn", "btc_mxn"]
window.setInterval(function(){
  cryptos.forEach(function(element) {
    $.ajax({
      method: "GET",
      url: "/communication/getData.php",
      data: { book: element }
    })
    .done(function( msg ) {
      if(element == "btc_mxn"){
        addData(myLine, moment().format('LTS'),msg);
        var formated = numeral(msg).format('0,0.00');
        $("#last_btc").html("$"+formated);
      } else{
        addData(myLine2, moment().format('LTS'),msg);
        var formated = numeral(msg).format('0,0.00');
        $("#last_xrp").html("$"+formated);
      }
      console.log( "Data Saved "+element+":"  + msg );
    });
  })
}, 5000);