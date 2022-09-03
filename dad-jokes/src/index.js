let jokes = [
  'I wear a stethoscope so that in a medical emergency I can teach people a valuable lesson about assumptions.',
  'Coffee has a tough time at my house, every morning it gets mugged.',
  "Me: If humans lose the ability to hear high frequency volumes as they get older, can my 4 week old son hear a dog whistle? Doctor: No, humans can never hear that high of a frequency no matter what age they are. Me: Trick question... dogs can't whistle.",
  'How do you fix a damaged jack-o-lantern? You use a pumpkin patch.',
  'How come a man driving a train got struck by lightning? He was a good conductor.',
  "Why does Waldo only wear stripes? Because he doesn't want to be spotted.",
  "What's the worst thing about ancient history class? The teachers tend to Babylon.",
  "Me: If humans lose the ability to hear high frequency volumes as they get older, can my 4 week old son hear a dog whistle? Doctor: No, humans can never hear that high of a frequency no matter what age they are. Me: Trick question... dogs can't whistle.",
];

let btnEl = document.querySelector('.jokes').children[2];
btnEl.addEventListener('click', e => {
  let random = Math.floor(Math.random() * jokes.length);

  e.target.previousElementSibling.textContent = jokes[random];
});
