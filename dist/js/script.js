jQuery(function($) {
    $(document).ready( function() {
      $('.main-menu-border').stickUp();
    });
  }); 

$(document).ready(function(){
	$('.fa-bars').click(function(){
		$('.main-menu-hidden').slideToggle();
	})

	$('#myform').validate({
			rules:{ //правила для полей 
				name:{
					required:true,
					minlength:5 //минимальное значение поля
				},
				phone:{
					required:true,
					number:true
				}
			},
			messages:{
				name:{
					required: 'Это поле обязатлеьно для заполнения', //какое сообщение будет выводиться
					minlength:'Имя должно быть не меньше 5 символов'
				},
				phone:{
					required: 'Это поле обязатлеьно для заполнения',
					number:'Введите правильный телефон'
				},
				submitHandler:function(){ //выполнять если все валидно
					alert('Форма заполнена правильно');
				}
			}
	})

	$('#myform').submit(function() { //обрабатываем событие отправки формы
		var name =  $("#name_form").val(), // Собираем все значение полей для отправки 
        phone = $('#phone_form').val(),
        allData = 'name=' + name +'&phone='+phone; // формируем строку для предачи в бработчик
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: allData,
        success: function () { // выполняется при успешном отправлении
        	console.log('send mail')
        }
      });
      return false;
		})

		$(".play").animatedModal({
	 		animatedIn:'lightSpeedIn',
	    animatedOut:'bounceOutDown',
	    color:'#0394c7'
	 	});
})



(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:200
				});
    });
 })(jQuery); 