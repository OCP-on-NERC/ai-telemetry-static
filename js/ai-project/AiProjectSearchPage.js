Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiProject')?.addEventListener('sl-change', (event) => {
    facetRangeChange('AiProject', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiProject-name').innerText == undefined);
    if (action === 'sort') {
      sort('AiProject', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortAiProject_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiProject_name')?.addEventListener('sl-change', (event) => {
    sort('AiProject', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiProject-description').innerText == undefined);
    if (action === 'sort') {
      sort('AiProject', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortAiProject_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiProject_description')?.addEventListener('sl-change', (event) => {
    sort('AiProject', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiProject-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('AiProject', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortAiProject_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiProject_editPage')?.addEventListener('sl-change', (event) => {
    sort('AiProject', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchAiProject')?.addEventListener('click', (event) => {
    document.querySelector('#patchAiProjectDialog').open = true;
  });

  document.querySelector('#htmButton_postAiProject')?.addEventListener('click', (event) => {
    document.querySelector('#postAiProjectDialog').open = true;
  });

  document.querySelector('#htmButton_deleteAiProject')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var  =  event.currentTarget.getAttribute('data-');
      deleteAiProject(
          event.currentTarget
          , 
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportAiProject')?.addEventListener('click', (event) => {
    document.querySelector('#putimportAiProjectDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageAiProject')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageAiProjectDialog').open = true;
  });
});
