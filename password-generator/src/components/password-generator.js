let passwordEl = document.querySelector('.password');

let generators = {
  'uppercase': () => String.fromCharCode(Math.floor(Math.random() * 26 + 65)),
  'lowercase': () => String.fromCharCode(Math.floor(Math.random() * 26 + 97)),
  'number': () => Math.floor(Math.random() * 10),
  'symbol': () => {
    let symbols = '!"#$%&\'()*+,-./[\\]^_`{|}|~';
    return symbols[Math.floor(Math.random() * symbols.length)];
  },
};
// click generate button
document.querySelector('.generate').onclick = e => {
  let length = document.querySelector('#length').value;

  // return if length does not meet requirement
  if (length > 20 || length <= 0) return;

  let selectedType = document.querySelectorAll('.generator input:checked');
  //return if no type was selected
  if (selectedType.length === 0) return;

  //get all the types' name from the Nodelist
  let allowedType = [...selectedType].map(el => el.id);

  // concat all single chars
  let password = '';
  for (let i = 0; i < length; i++) {
    let randomType = allowedType[Math.floor(Math.random() * allowedType.length)];
    password += generators[randomType]();
  }

  // render the generated pw to the page
  passwordEl.textContent = password;

  // GC
  selectedType = null;
  allowedType = null;
};

document.querySelector('.clip').onclick = async () => {
  if (navigator.clipboard) {
    // faster for more text, will not block
    await navigator.clipboard.writeText(passwordEl.textContent);
  } else {
    let textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = passwordEl.textContent;
    textarea.select();
    document.execCommand('copy', true);
    textarea.remove();
  }
  alert('Password copied to clipboard!');
};
