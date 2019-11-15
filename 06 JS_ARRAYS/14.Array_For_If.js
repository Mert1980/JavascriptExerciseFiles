// function leftpad(str, len, pad) {
  
    let str = "silman";
    let strarr = str.split('');
    let strlen = strarr.length;
    let newstr=[];
    let len = 10;
    let pad = "%-";
       
    for (var x = len ; x > strlen ; x--) {
        strarr.unshift(pad);
        console.log(str);
       }
    for (var x = len ; x < strlen ; x++) {
         strarr.pop();
        console.log(str);
       }
     
   if (strlen==len){
       console.log(str);    
      }    
   
    // }
  