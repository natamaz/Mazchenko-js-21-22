'use strict'
let QBase = {
	title: 'Основы JavaScript',
	prompts: '(Выберите правильный вариант из предложенных)',
	question: [
		{
			text: 'В каком случае из перечисленных событие не попадет на обработку javascript?',
			answer: [
				{text: 'Если в момент его наступления обрабатывается другое событие', check: false},
				{text: 'Если страничка просматривается локально, т.е offline', check: false},
				{text: 'Только если javascript отключен', check: true},
			]
		},	
		
		{
			text: 'Можно ли в скрипте перевести посетителя на другую страницу сайта?',
			answer: [
				{text: 'Да, куда угодно ', check: true},
				{text: 'Да, но только в рамках текущего сайта', check: false},
				{text: 'Нет, нельзя ', check: false},
			]
		},	
		
		{
			text: 'Где в документе может располагаться тэг script по стандарту HTML ?',
			answer: [
				{text: 'Только в head', check: false},
				{text: 'Только в body', check: false},
				{text: 'В head или в body', check: true},
				{text: 'Где угодно, главное чтоб был', check: false},
			]
		},	
	]	
};	

	localStorage.setItem('QBase',JSON.stringify(QBase));
	QBase = localStorage.getItem('QBase');
	QBase = JSON.parse(QBase);
	
