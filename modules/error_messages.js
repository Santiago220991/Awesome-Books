const msga = document.querySelector('.msga');
const msgb = document.querySelector('.msgb');
const msgc = document.querySelector('.msgc');

export const hidemsga = () => {
  msga.classList.remove('active');
};
export const hidemsgb = () => {
  msgb.classList.remove('active');
};
export const hidemsgc = () => {
  msgc.classList.remove('active');
};
