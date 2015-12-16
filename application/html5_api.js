(function(){
    //Donate module for gallery
    this.Donate = this.Donate || {};
    var ns = this.Donate;
    
    ns.startDonate = function() {
    var money = Math.floor(1000*(Math.random()));
    document.getElementById("donate").innerHTML = "<b>Thanks for your donation! </b>"+" $"+money;
    if(typeof(Storage) !== "undefined") {
        if (localStorage.donate_number) {
            localStorage.donate_number=Number(localStorage.donate_number)+money;
        } else {
            localStorage.donate_number = money;
        }
        document.getElementById("donate_number").innerHTML = "You have donated $" + localStorage.donate_number + " in total!";
    } else {
        document.getElementById("donate_number").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
     ns.cancelDonate = function(){
      if(typeof(Storage) !== "undefined") {
          localStorage.removeItem("donate_number");
          localStorage.donate_number = 0;
          document.getElementById("donate_number").innerHTML = "You have donated $" + localStorage.donate_number + " in total!";
      }
      else{
          document.getElementById("donate_number").innerHTML = "Sorry, your browser does not support web storage...";
      }
}
    
}())