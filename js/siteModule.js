Promise.all([
  customElements.whenDefined('wa-button')
  , customElements.whenDefined('wa-input')
]).then(() => {
  document.body.classList.add('ready');
});
