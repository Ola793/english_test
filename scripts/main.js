const headElem = document.getElementById("header");
const quizElem = document.getElementById("quiz");
const buttonsElem = document.getElementById("buttons");
const footerElem = document.getElementById("footer");

class Quiz {
	constructor (type, questions, results) {
		this.type = type;
		this.questions = questions;
		this.results = results;
		this.score = 0;
		this.result = 0;
		this.current = 0;
	}

	Click (index) {
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		if(value >= 1) {
			correct = index;
		} else {
			for (let i = 0; i < this.questions[this.current].answers.length; i++) {
				if (this.questions[this.current].answers[i].value >= 1) {
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	Next() {
		this.current++;
		
		if (this.current >= this.questions.length) {
			this.End();
		}
	}

	End() {
		for(let i = 0; i < this.results.length; i++) {
			if (this.results[i].Check(this.score)) {
				this.result = i;
			}
		}
	}
} 

class Question {
	constructor(text, answers) {
		this.text = text; 
		this.answers = answers; 
	}

	Click (index) {
		return this.answers[index].value; 
	}
}

class Answer {
	constructor(text, value) {
		this.text = text; 
		this.value = value; 
	}
}

class Result {
	constructor(text, value) {
		this.text = text;
		this.value = value;
	}

	Check (value) {
		if (this.value <= value) {
			return true;
		} else {
			return false;
		}
	}
}

const results = 
[
	new Result("Starter", 0),
	new Result("Elementary", 3),
	new Result("Pre-intermediate", 6),
    new Result("Intermediate", 11),
    new Result("Upper-intermediate", 16),
	new Result("Advanced", 20)
];

const questions = 
[
	new Question("<h6>Starter - Elementary</h6>She's from Lviv. She ___ Ukrainian.", 
	[
		new Answer("is from ", 0),
		new Answer("is", 1),
		new Answer("isn’t", 0),
		new Answer("are from", 0)
	]),

	new Question("<h6>Starter - Elementary</h6>These are your books and ____ are mine.", 
	[
		new Answer("those ", 1),
		new Answer("this", 0),
		new Answer("it", 0),
		new Answer("that", 0)
	]),

	new Question("<h6>Starter - Elementary</h6>How ____ vegetables do you eat every day?", 
	[
		new Answer("many", 1),
		new Answer("long", 0),
		new Answer("more", 0),
		new Answer("much", 0)
	]),

	new Question("<h6>Starter - Elementary</h6>We ____ born in 1985.", 
	[
		new Answer("is", 0),
		new Answer("were", 1),
		new Answer("was", 0),
		new Answer("did", 0)
	]),

	new Question("<h6>Starter - Elementary</h6>Don't stay up late or you ____ be tired tomorrow.", 
	[
		new Answer("must", 0),
		new Answer("won’t", 0),
		new Answer("should", 0),
		new Answer("’ll", 1)
	]),

	new Question("<h6>Pre-intermediate</h6> ____ you ever seen Bayraktar?", 
	[
		new Answer("Did", 0),
		new Answer("Do", 0),
		new Answer("Have", 1),
		new Answer("Has", 0)
	]),

    new Question("<h6>Pre-intermediate</h6>We should avoid _____ in August.", 
	[
		new Answer("travelled", 0),
		new Answer("to travel", 0),
		new Answer("travelling", 1),
		new Answer("to travelling", 0)
	]),

    new Question("<h6>Pre-intermediate</h6>Are you ____ at Bomi this month?", 
	[
		new Answer("going to study", 1),
		new Answer("study", 0),
		new Answer("going study", 0),
		new Answer("go to study", 0)
	]),

    new Question("<h6>Pre-intermediate</h6>I ____  Sergiy Pritula’s Instagram when somebody sent me a message.", 
	[
		new Answer("was scroll", 0),
		new Answer("did scroll", 0),
		new Answer("was scrolling", 1),
		new Answer("am scrolling", 0)
	]),

    new Question("<h6>Pre-intermediate</h6>It _____ rain tomorrow. It’s going to be a very wet day.", 
	[
		new Answer("‘ll", 1),
		new Answer("might", 0),
		new Answer("won’t", 0),
		new Answer("might not", 0)
	]),

    new Question("<h6>Intermediate</h6>Who ____ a weird tweet of Ilon Mask? It is cringe.", 
	[
		new Answer("saw", 1),
		new Answer("did see", 0),
		new Answer("are see", 0),
		new Answer("did saw", 0)
	]),

    new Question("<h6>Intermediate</h6>She is one of ____ students in her class.", 
	[
		new Answer("cleverer", 0),
		new Answer("more clever", 0),
		new Answer("the most cleverer", 0),
		new Answer("the cleverest", 1)
	]),

    new Question("<h6>Intermediate</h6>The Ukrainians are the strongest people in the world, ____ ?", 
	[
		new Answer("isn’t they", 0),
		new Answer("haven’t they", 0),
		new Answer("aren’t they", 1),
		new Answer("were they", 0)
	]),

    new Question("<h6>Intermediate</h6>If I ____ you, I’d take it back to the shop.", 
	[
		new Answer("was", 0),
		new Answer("were", 1),
		new Answer("have been", 0),
		new Answer("had been", 0)
	]),

    new Question("<h6>Intermediate</h6>I asked her if she _____ my new mobile.", 
	[
		new Answer("‘s seen", 0),
		new Answer("‘d seen", 1),
		new Answer("‘d see", 0),
		new Answer("saw", 0)
	]), 

    new Question("<h6>Upper-intermediate</h6>He _____ for his lesson at Bomi when somebody knocked the door.", 
	[
		new Answer("was waiting", 1),
		new Answer("‘d been waiting", 0),
		new Answer("waited", 0),
		new Answer("‘s been waiting", 0)
	]),

    new Question("<h6>Upper-intermediate</h6>I didn't feel like going to the party. I ____ an excuse.", 
	[
		new Answer("wish I made", 0),
		new Answer("should do", 0),
		new Answer("should’ve made", 1),
		new Answer("should‘ve make", 0)
	]), 

    new Question("<h6>Upper-intermediate</h6>It’s not worth ____ about. He won't notice it’s missing.", 
	[
		new Answer("to worry", 0),
		new Answer("worry", 0),
		new Answer("worrying", 1),
		new Answer("of worrying", 0)
	]), 

    new Question("<h6>Upper-intermediate</h6>They’re having lunch with his girlfriend’s parents, ____ live in Brighton.", 
	[
		new Answer("that they", 0),
		new Answer("who", 1),
		new Answer("that", 0),
		new Answer("whom", 0)
	]),

    new Question("<h6>Upper-intermediate</h6>When do you think you ____ painting the house?", 
	[
		new Answer("finish", 0),
		new Answer("‘ll have finished", 1),
		new Answer("be finishing", 0),
		new Answer("would‘ve finished", 0)
	]),

    new Question("<h6>Advanced</h6>The neighbours ____ the noise of the party. It was terribly loud.", 
	[
		new Answer("must’ve heard", 1),
		new Answer("‘ll hear", 0),
		new Answer("couldn’t hear", 0),
		new Answer("can’t have heard", 0)
	]),

    new Question("<h6>Advanced</h6>Unfortunately, she keeps ____ headaches after missiles attack.", 
	[
		new Answer("to feel", 0),
		new Answer("to getting", 0),
		new Answer("feeling", 0),
		new Answer("getting", 1)
	]),

    new Question("<h6>Advanced</h6>I’ll never ____ Rihanna at the concert.", 
	[
		new Answer("forget seeing", 1),
		new Answer("remember to see", 0),
		new Answer("forget to seeing", 0),
		new Answer("remember to see", 0)
	]),

    new Question("<h6>Advanced</h6>A book ____ by a 12-year-old girl has won a €2,500 award.", 
	[
		new Answer("wrote", 0),
		new Answer("writing", 0),
		new Answer("been written", 0),
		new Answer("written", 1)
	]),

    new Question("<h6>Advanced</h6>At this time tomorrow, they ____ English at Bomi.", 
	[
		new Answer("‘ll study", 0),
		new Answer("might studying", 0),
		new Answer("‘ll be studying ", 1),
		new Answer("be studying", 0)
	])
];

const quiz = new Quiz(1, questions, results);

const startButton = document.getElementById("start");

const pagesElem = document.createElement("div");
pagesElem.setAttribute("id", "pages");
footerElem.appendChild(pagesElem);

startButton.addEventListener("click", function() {
    Update();
});

function ValidName() {
	let re = /^([А-Яа-яёЁЇїІіЄєҐґ]{0,24}[а-яё]{0,24}|[A-Z]{0,24}[a-z]{0,24})$/;
	let name = document.getElementById('name');
	let name_value = document.getElementById('name').value;
	let valid = re.test(name_value);

	valid ? name.style.borderColor = '#32644b' : name.style.borderColor = '#FF6B6B';

	return valid;
} 
 
function ValidPhone() {
	let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
	let phone = document.getElementById('phone');
	let phone_value = document.getElementById('phone').value;
	let valid = re.test(phone_value);

	valid ? phone.style.borderColor = '#32644b' : phone.style.borderColor = '#FF6B6B';

	return valid;
} 

function FinalResult() {
	headElem.innerHTML = "Вітаємо ваш результат тесту:<br>" + quiz.score + "/" 
	+ quiz.questions.length +" "+ quiz.results[quiz.result].text;

	const manager_will_call_you = document.createElement("p");
	manager_will_call_you.setAttribute("class", "manager_will_call_you");
	quizElem.appendChild(manager_will_call_you);

	manager_will_call_you.innerHTML = "Наш менеджер зв’яжеться для уточнення деталей та<br>консультації по навчанню протягом 15 хвилин";
	
	const subscribe_on_your_sn = document.createElement("p");
	subscribe_on_your_sn.setAttribute("class", "subscribe_on_your_sn");
	quizElem.appendChild(subscribe_on_your_sn);

	subscribe_on_your_sn.innerHTML = "Підписуйтесь на наші соцмережі:";

	const telegram = document.createElement("div");
	telegram.setAttribute("class", "telegram");
	quizElem.appendChild(telegram);

	const instagram = document.createElement("div");
	instagram.setAttribute("class", "instagram");
	quizElem.appendChild(instagram);
}

function createForm() {
	document.getElementById("pages").remove();

    const form = document.createElement("FORM");
    form.setAttribute("id", "form");
    quizElem.appendChild(form);

    const name = document.createElement("INPUT");
    name.setAttribute("type", "text");
    name.setAttribute("placeholder", "Ваше ім’я");
    name.setAttribute("class", "your_data");
	name.setAttribute("id", "name");
    form.appendChild(name);

    const telefon = document.createElement("INPUT");
    telefon.setAttribute("type", "tel");
    telefon.setAttribute("placeholder", "Ваш телефон");
    telefon.setAttribute("class", "your_data");
	telefon.setAttribute("id", "phone");
    form.appendChild(telefon);

    const see_results = document.createElement("INPUT");
    see_results.setAttribute("type", "submit");
    see_results.setAttribute("value", "Подивитись результати тесту");
    see_results.setAttribute("class", "see_results");
    form.appendChild(see_results);

    see_results.addEventListener("click", function (event) {
		event.preventDefault();
		ValidName();
        ValidPhone();

		if (ValidName()&&ValidPhone()) {
			form.remove();
			FinalResult();

		} else {
			alert("Заповніть форму, будь ласка!")
		}
    })
}

function Update() {
	if (quiz.current < quiz.questions.length) {
		headElem.innerHTML = quiz.questions[quiz.current].text;

		buttonsElem.innerHTML = "";

		for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		Init();
	} else {
		buttonsElem.innerHTML = "";
		headElem.innerHTML = "Заповніть форму, щоб подивитись результати тестування та Ваш рівень англійської мови";
        pagesElem.innerHTML = "";
        createForm();
	} 
}

function Init() {
	let btns = document.getElementsByClassName("button");

	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function (e) {
            Click(e.target.getAttribute("index"));
        });
	}
}

function Click(index) {
	quiz.Click(index);

	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++) {
		btns[i].className = "button button_passive";
	}

    btns[index].className = "button";

	setTimeout(Update, 1000);
}