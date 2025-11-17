const button = document.getElementById("qrGenerate");
const image = document.getElementById("qrImage");

const _name = document.getElementById("qrName");
const phone = document.getElementById("qrPhone");
const email = document.getElementById("qrEmail");


button.addEventListener("click", async () => {
//! IT MUST BE THAT WAY OR IT WON'T WORK!
const vcard =`
BEGIN:VCARD
VERSION:3.0
FN:${_name.value}
TEL:${phone.value}
EMAIL:${email.value}
END:VCARD`
;
    

    if (_name.value == '') { 
         alert("You left the name"); 
         return;
     } else if (phone.value == '') {
         alert("You left the phone!");
         return;
    }
    const dataUrl = await QRCode.toDataURL(vcard);
    image.src = dataUrl;
    console.log(vcard);
});





console.log(_name.value);
console.log(typeof(vcard));
console.log(vcard)
