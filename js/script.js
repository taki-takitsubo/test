 //フェードイン（下）
 let fadeinObjects=document.querySelectorAll('.fadein');
 fadeinObjects.forEach(function(fadeIn){
   let windowHeight=window.innerHeight;
   window.addEventListener('scroll',function(){
     let rect=fadeIn.getBoundingClientRect().top;
     let scroll=window.pageYOffset;
     let offset=rect+scroll;
     if(scroll>offset-windowHeight+150){
       fadeIn.classList.add('fadein-active');
     };
   });
 });

 // デバイス識別
 if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
    // スマートフォン向けの記述
} else if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    // タブレット向けの記述
} else {
    // PC向けの記述
    luxy.init({
      wrapperSpeed: 0.08
    });
}