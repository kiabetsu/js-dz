const language = prompt('Enter your language:');

switch (language) {
  case 'ru':
    console.log('Здравствуйте!');
    break;
  case 'en':
    console.log('Hello!');
    break;
  case 'de':
    console.log('Guten Tag!');
    break;
  case 'fr':
    console.log('Bonjour!');
    break;
  case 'it':
    console.log('Ciao!');
    break;
  default:
    console.log("language don't set");
    break;
}
