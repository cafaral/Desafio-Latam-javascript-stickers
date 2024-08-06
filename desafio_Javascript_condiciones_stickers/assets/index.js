function calcular(){

    var sto = document.getElementById("sticker1").value 
    var stt = document.getElementById("sticker2").value 
    var sttt = document.getElementById("sticker3").value 
   
  
    var total = parseInt(sto) + parseInt(stt) + parseInt(sttt)
  
    if(total <= 10){
      document.getElementById("text").innerHTML = "Usted esta llevando" + total
    }else if( total >= 11){
      document.getElementById("text").innerHTML = "Estas llevando demasiados stickers"
    }
  
    
  
  
    
  }