let espacio_iframe = 0;
if (window.innerHeight){
   //navegadores basados en mozilla
   espacio_iframe = window.innerHeight - 110
}else{
   if (document.body.clientHeight){
       //Navegadores basados en IExplorer, es que no tengo innerheight
       espacio_iframe = document.body.clientHeight - 110
   }else{
       //otros navegadores
       espacio_iframe = 478
   }
}
document.write ('<iframe frameborder="0" src="http://186.4.107.3:8084/sueldos" width="770" height="' + espacio_iframe + '">')
document.write ('</iframe>')

//document.write ('<iframe frameborder="0" src="https://navarro.gob.ar" width="770" height="' + espacio_iframe + '">')
//document.write ('</iframe>')

