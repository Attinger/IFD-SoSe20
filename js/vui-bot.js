const artyom = new Artyom();

const startButton = document.querySelector('.vui--trigger');
const stopButton = document.querySelector('.vui--stop');
const audioPlay = document.querySelector('.sound-play');
const audioStop = document.querySelector('.sound-stop');
const info = document.querySelector('.vui--info--image');
const infoWrapper = document.querySelector('.vui--info--wrapper');
info.addEventListener('click', toggleInfo);
startButton.addEventListener('click', startVoiceBot);
stopButton.addEventListener('click', stopVoiceBot);

function toggleInfo() {
	if(info.classList.contains('vui--info--active')) {
		info.classList.remove('vui--info--active');
		infoWrapper.classList.remove('fadein');
	} else {
		info.classList.add('vui--info--active');
		infoWrapper.classList.add('fadein');
	}
}


function startVoiceBot() {
	startButton.classList.add('hide');
	stopButton.classList.add('show');
	artyom.initialize({
		lang: "de-DE",
		continuous: true,
		listen: true,
		interimResults: true,
		debug: true
	}).then(function () {
		audioPlay.play();
	});
}

function stopVoiceBot() {
	startButton.classList.remove('hide');
	startButton.classList.add('show');
	stopButton.classList.remove('show');
	stopButton.classList.add('hide');
	audioStop.play();
	artyom.fatality();
}

// Voice - Bot Commandlist:  //

artyom.addCommands([
	{
		description: '',
		indexes: ["was steht heute in der Uni an", "was steht heute in der Union", "was steht heute in Union"],
		action: function () {
			artyom.say("Heute ist ein vorlesungsfreier Tag", {
				onEnd: function () {
					let answer = 'Heute haben Sie keine Vorlesungen'
					createNewAction(answer);
					artyom.say("Kann ich sonst noch etwas für dich tun?");
				}
			});
		},
	},
	{
		description: '',
		indexes: ["was steht diese Woche noch in der Uni an", "was steht diese Woche noch in der Union"],
		action: function()  {
			artyom.say("Sie haben am Freitag Interface Design. Kann ich sonst noch etwas für Sie tun?");
		},
	},
	{
		description: '',
		indexes: ["gibt es neue Datein im Intranet", "gibt es neue Dateien im Internet"],
		action: function()  {
			artyom.say("Ja es gibt zwei neue Datein im Intranet");
		},
	},
	{
		description: '',
		indexes: ["die Dateien vorlesen bitte", "Dateien vorlesen bitte"],
		action: function()  {
			artyom.say("Herr Prof. Hottong hat zwei neue Dateien zum Streaming Camp hochgeladen", {
				onEnd: function () {
					let answer = 'Herr Prof. Hottong hat zwei neue Dateien zum Streaming Camp hochgeladen.'
					createNewAction(answer);
					artyom.say("Kann ich sonst noch etwas für dich tun?");
				}
			});
		},
	},
	{
		description: '',
		indexes: ["was gibt es heute in der Mensa"],
		action: function()  {
			artyom.say("Heute gibt es Sphaghetti Bolognese. Möchtest du das ich ein Tisch für dich reserviere?");
		},
	},
	{
		description: '',
		indexes: ["ja bitte reservieren" , "bitte reservieren"],
		action: function()  {
			artyom.say("Okay ich habe den Tisch auf 13 Uhr in der Mensa reserviert." , {
				onEnd: function() {
					let answer = 'Mittagessen um 13:00 Uhr in der Mensa.'
					createNewAction(answer);
					artyom.say("Kann ich sonst noch etwas für dich tun?");
				}
			});
		},
	},
	{
		description: '',
		indexes: ["hat die Bibliothek heute geöffnet", "hatte Bibliothek heute geöffnet"],
		action: function()  {
			artyom.say("Heute hat die Bibliothek geschlossen. Sie macht am Donnerstag wieder ab 13 Uhr auf, möchten Sie das ich Sie daran erinner?");
		},
	},
	{
		description: '',
		indexes: ["ja bitte Erinnerung einrichten"],
		action: function()  {
			artyom.say("Okay. Ihre erinnerung wurde eingerichtet.", {
				onEnd: function () {
					let answer = 'Die Bibliothek hat ab 13:00 Uhr am  Donnerstag wieder geöffnet.'
					createNewAction(answer);
					artyom.say("Kann ich sonst noch etwas für dich tun?");
				}
			});
		},
	},
	{
		description: '',
		indexes: ["stehen irgendwelche Deadlines an"],
		action: function()  {
			artyom.say("Es stehen keine Deadlines an. Sie liegen gut im Zeitplan. Kann ich sonst noch etwas für Sie tun?");
		},
	},
	{
		description: '',
		indexes: ["nein das war alles"],
		action: function() {
			artyom.say("Okay. Bis zum nächsten mal", {
				onEnd: function () {
					stopVoiceBot();
				}
			})
		}
	},
	{
		description: '',
		indexes: ["stop", "halt"],
		action: function() {
			artyom.say("Bis zum nächsten mal", {
				onEnd: function () {
					stopVoiceBot();
				}
			})
		}
	},
]);

function createNewAction(text) {
	const creatElem = document.createElement('p');
	const addText = document.createTextNode(text);
	creatElem.append(addText);
	document.querySelector('.result').appendChild(creatElem);
	creatElem.classList.add('slideIn');
}
