/* eslint-env browser */
'use strict';


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var WIZARD_FIRST_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SECOND_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYE_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
]

var generateArrayItem = function (arrayName) {
  var randomNumber = Math.round(Math.random() * (arrayName.length - 1));
  return randomNumber;
};

var generateName = function () {
  var randomFirstName = WIZARD_FIRST_NAMES[generateArrayItem(WIZARD_FIRST_NAMES)];
  var randomSecondName = WIZARD_SECOND_NAMES[generateArrayItem(WIZARD_SECOND_NAMES)];
  var wizardRandomName = randomFirstName + ' ' + randomSecondName;
  return wizardRandomName;
};

var generateCoatColor = function () {
  var coatColor = COAT_COLORS[generateArrayItem(COAT_COLORS)];
  return coatColor;
};

var generateEyeColor = function () {
  var eyeColor = EYE_COLORS[generateArrayItem(EYE_COLORS)];
  return eyeColor;
};

var wizards = [
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyeColor()
  },
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyeColor()
  },
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyeColor()
  },
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyeColor()
  },
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
