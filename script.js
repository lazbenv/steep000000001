let phrases = [
  { text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'посмотреть скидки на авиабилеты', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'разобраться, о чём поют рэперы', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'Юрий Дудь', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'расставить книги на полке по цвету', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'читать про зарплаты в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' },
  { text: 'посмотреть Youtube', image: 'https://w7.pngwing.com/pngs/124/388/png-transparent-youtube-logo-computer-icons-black-and-white-accept-text-sign-desktop-wallpaper.png' },
  { text: 'почитать книгу', image: 'https://i.pinimg.com/736x/bf/a9/93/bfa993dfe0718cbe360f82884ff6ee4a.jpg' },
  { text: 'посмотреть TikTok', image: 'data:image/png;base64,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' },
];



function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 