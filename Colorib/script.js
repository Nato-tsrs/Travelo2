var bottom=document.getElementById("bottom");

var index=2;
var Cname=document.getElementById("Cname");
function switchImg(th){
    if(th==1){
        bottom.style.animation="fade 2s";
        Cname.innerHTML=` <h1 >Indonesia</h1>`;
        bottom.style.backgroundImage = "url('https://preview.colorlib.com/theme/travelo/img/banner/xbanner.png.pagespeed.ic.95MMQV933B.jpg')";
        
        
    }
    if(th==2){
        bottom.style.animation="fade1 2s";
        Cname.innerHTML=` <h1 >Australia</h1>`;
        bottom.style.backgroundImage = "url('https://preview.colorlib.com/theme/travelo/img/banner/xbanner2.png.pagespeed.ic.XXlHdbyWF8.jpg')";
        
    }
    if(th==3){
        bottom.style.animation="fade2 2s";
        Cname.innerHTML=` <h1 >SwitZerland</h1>`;
        bottom.style.backgroundImage = "url('https://preview.colorlib.com/theme/travelo/img/banner/xbanner3.png.pagespeed.ic.Q9oCO7T4OK.jpg')";
        
    }
   
}


function toTheRight(){
 
    if(index==3) index=1;
    else index++;
    switchImg(index);
}
function toTheLeft(){
    if(index==1) index=3;
    else index--;
    switchImg(index);
}


setInterval(function() {updateTime(toTheRight); }, 4000);

function ind(){
    // setInterval(function () {document.getElementById("bottom").innerHTML += "Hello"}, 1000);
    setInterval(function () {toTheRight();}, 4000);
}
setInterval(ind, 4000);
function change(){
    alert("j");
      if(index==1){
        alert("1");
          index=2;
      }
     else if(index==2){
        alert("2");
          index=3;
      }
      else if(index==3){
        alert("2");
          index=1;
      }
      
      switchImg(index);
  }