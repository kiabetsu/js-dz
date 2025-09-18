const wrapper = document.querySelector('.wrapper');
const counter = document.querySelector('.counter');
let counterNum = 0;
counter.innerText = counterNum;

for (let i = 0; i < 5; i++) {
  const button = document.createElement('button');
  button.innerText = 'Нажми меня';
  button.classList.add('button', 'qwe');
  wrapper.append(button);
}

wrapper.addEventListener('click', (event) => {
  const el = event.target;
  if (el.classList.contains('button')) {
    if (!el.classList.contains('pressed')) {
      for (let el of [...wrapper.children]) {
        el.classList.remove('pressed');
        el.innerText = 'Нажми меня';
        el.disabled = false;
      }
      el.classList.add('pressed');
      el.innerText = 'Нажата!';
      el.disabled = true;
    }
    counterNum++;
    counter.innerText = counterNum;
  }
});
