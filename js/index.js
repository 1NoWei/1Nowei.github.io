// var mt=$('.xf').offset().top;


// $(window).scroll(function() {
//    if($(window).scrollTop()>mt){

//        $('.xf').css("position","fixed");
//      }else{

//    $('.xf').css("position","unset");
//      }
  
//   });
  var deviceWidth = document.documentElement.clientWidth > 750 ? 750 : document.documentElement.clientWidth;
	document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
$(window).resize(function(){
  var deviceWidth = document.documentElement.clientWidth > 750 ? 750 : document.documentElement.clientWidth;
	document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';

})


$('.navbtn').click(function(){
   if($(this).is('.open')){
        $(this).removeClass('open')
        $('.navbox2').css('right','-3rem') 
   }else{
    $(this).addClass('open')
    $('.navbox2').css('right','0') 
   }
})


      // $.ajax({
      //   url:'/index',
      //   type:'post',
      //   data:{email:email},
      //   success:function(data){
      //    
      //   },
      //   error:function(error){
      //     console.log(error)
      //   }
      // })
