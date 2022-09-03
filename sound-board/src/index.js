let audioSectionEl = document.querySelector('.audios');
let allAudios = document.querySelectorAll('audio');

audioSectionEl.addEventListener('click', e => {
  if (e.target.classList.contains('bg-btn')) {
    let audioEl = e.target.children[0];
    for (let el of allAudios) el.load();
    audioEl.play();
  }
});
