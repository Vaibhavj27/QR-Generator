let imgbox= document.getElementById("imgbox");
    let qrimg=document.getElementById("qrimg");
    let url= document.getElementById("url");
function generateQR() {
    if(url.value.length>0)
   { qrimg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url.value;
    imgbox.classList.add("show-img");
   }else{
      url.classList.add("error");
      setTimeout(() => {
        url.classList.remove("error");
      }, 1000);
   }

}