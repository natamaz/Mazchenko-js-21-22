$(function() {
	let template = tmpl($('#test__template').html());
	$('body').html(template(QBase));
	
	for(let i=0;i<QBase.question.length; i++){
		$('.check'+i).addClass('disabled'+i);
		$('.disabled0').on('change',function(){
			if(this.checked){
				$(this).removeClass('disabled0');
				$('.disabled0').attr('disabled','disabled');
			} else {
				$(this).addClass('disabled0');
				$('.disabled0').removeAttr('disabled');
			}
		});
		$('.disabled1').on('change',function(){
			if(this.checked){
				$(this).removeClass('disabled1');
				$('.disabled1').attr('disabled','disabled');
			} else {
				$(this).addClass('disabled1');
				$('.disabled1').removeAttr('disabled');
			}
		});
	}
	
	if($('input:not(:checked)')) {
		let error = 'Вы ответили не на все вопросы. ' + '<hr>';
		$('#modalText').append(error);
	};
	
	$('input.test__button').on('click', showResult);
	let result;
	
	function showResult(){
		let $chBox = $('input:checked');
		for(let k=0; k< $chBox.length; k++) {
			let str = $chBox.eq(k).attr('id');
			str = str.substr(str.indexOf('_')+1);
			let i = +str.substr(0,str.indexOf('_'));
			let j = +str.substr(str.indexOf('_')+1);
			if (QBase.question[i].answer[j].check){
				result = 'Ответ № ' + (j+1) + ' ' + 'на вопрос № ' + (i+1) + ' ' + '<span class="correct">' + 'правильный. ' + '</span>' + '<hr>';
				$('#modalText').append(result);
			} else {
				result = 'Ответ № ' + (j+1) + ' ' + 'на вопрос № ' + (i+1) + ' ' + '<span class="incorrect">' + 'неправильный. ' + '</span>' + '<hr>';
				$('#modalText').append(result);
			}
		}
		let selection = $('input');
		for (let i=0; i<selection.length; i++){
			if (selection[i].type == 'checkbox'){
				selection[i].checked = false;
		  }
		  $('.check0').addClass('disabled0').removeAttr('disabled');
		  $('.check1').addClass('disabled1').removeAttr('disabled');
		}
	}
	/*MODAL FORM*/
	$('input[type=button]').on('click',function(e){ 
		e.preventDefault(); 
		$('#modalForm__overlay').fadeIn(400,function(){ 
				$('#modalForm').css('display', 'block') 
								.animate({
									opacity: 1,
									top: '30%'
								}, 200); 
		});
	});
	
	$('#modalForm__close, #modalForm__overlay').on('click',function(){ 
		$('#modalForm').animate({
							opacity: 0, 
							top: '25%'
						}, 200, function(){
									$(this).css('display', 'none'); 
									$('#modalForm__overlay').fadeOut(400); 
								}
		);
		$('#modalText').empty();
	});
});
	
