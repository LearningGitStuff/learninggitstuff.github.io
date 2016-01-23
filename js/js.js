$('img').hover(function(e){
var originalImage = e.target.width;
$(this).attr('src', 'http://www.billboard.com/files/styles/promo_310/public/media/Adele-2015-Alasdair-McLellan-billboard-650.jpg').css('width', originalImage)

})

$('h2', 'h3').hover(function(){
  $(this).html("Hello, can you hear me?")
})


$('p').hover(function(){
  $(this).html("Hello from the other side I must have called a thousand times To tell you I'm sorry for everything that I've done But when I call you never seem to be home")
})

