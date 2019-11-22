const level = {
  normal: 3,
};

const current_level = level.normal;

let time = current_level;
let score = 0;
let is_playing;
let input;

const word_input = document.querySelector('#word-input');
const current_word = document.querySelector('#current-word');
const score_display = document.querySelector('#score');
const time_display = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const buttonn = document.querySelector('#button');

const words = [
  'algorithm',
  'program',
  'API',
  'argument',
  'ASCII',
  'boolean',
  'bug',
  'char',
  'objects',
  'developer',
  'OOP',
  'class',
  'compliation',
  'code',
  'conditionals',
  'interface',
  'array',
  'data types',
  'constants',
  'declaration',
  'framework',
  'software',
  'exception',
  'design pattern',
  'hardcode',
  'loop',
  'iteration',
  'keywords',
  'null',
  'variable',
  'operator',
  'pointer',
  'machine language',
  'markup language',
  'back-end',
  'front-end',
  'runtime',
  'package',
  'java',
  'xamarin',
  'flutter',
  'kotlin',
  'token',
  'syntax',
  'source code',
  'IDE'
];

function init() {
  seconds.innerHTML = current_level;
  show_word(words);
  word_input.addEventListener('input', start_match);
  setInterval(timer, 1000);
  setInterval(check_status, 50);
}

function button_start() {
	var button_begin = init();
	return button_begin;
}

function timer(){
	timer().disabled = !timer().disabled;
	}

function start_match() {
  if (match_words()) {
    is_playing = true;
    time = current_level + 1;
    show_word(words);
    word_input.value = '';
    score++;
  }
  if (score === -1) {
    score_display.innerHTML = 0;
  } else {
    score_display.innerHTML = score;
  }
}

function match_words() {
  if (word_input.value === current_word.innerHTML) {
    message.innerHTML = 'Correct :)';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

function show_word(words) {
  const rand_index = Math.floor(Math.random() * words.length);
  current_word.innerHTML = words[rand_index];
}

function timer() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    is_playing = false;
  }
  time_display.innerHTML = time;
}

function check_status() {
  if (!is_playing && time === 0) {
    message.innerHTML = 'Game Over :(';
    score = -1;
  }
}