export const hoverboard = (rows, columns) => {
  const row = count =>
    /*html*/
    `<div class="flex items-center justify-center space-x-1 [&>*]:bg-[#1d1d1d]">${'<span class="h-5 w-5"></span>'.repeat(count)}</div>`;

  return /*html*/ `<section class="hoverboard h-[630px] w-[480px] space-y-1">
  ${row(columns).repeat(rows)}
  </section>`;
};
