import { singleNote } from './singleNote.js';

let noteApp = /*html*/ `<section class="noteApp h-full w-full p-4 text-white">
  <div class="addBtn fixed top-3 right-3 rounded-sm bg-primary px-3 py-2 text-sm cursor-pointer">
    <span class="fa-solid fa-plus"></span>
    <span>Add note</span>
  </div>
  <div class="notes flex flex-wrap items-center justify-start"></div>
</section>`;

// insert noteApp to page
document.querySelector('body').insertAdjacentHTML('afterbegin', noteApp);

// insert a note by clicking add button
document.querySelector('.addBtn').onclick = () => {
  document.querySelector('.notes').insertAdjacentHTML('beforeend', singleNote);

  // add delete event for the most recent added note
  let allNotes = document.querySelectorAll('.delete');
  allNotes[allNotes.length - 1].addEventListener('click', e => e.target.closest('.note').remove(), { once: true });

  // GC
  allNotes = null;
};
