export let pics = [];
// fetch 15 pics
for (let i = 0; i < 15; i++) {
  let random = parseInt(Math.random() * 300);
  let url = `https://source.unsplash.com/random/${random}`;
  pics.push({ url, title: 'i' });
}
