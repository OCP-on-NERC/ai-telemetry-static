Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeGpuSlice')?.addEventListener('sl-change', (event) => {
    facetRangeChange('GpuSlice', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuSlice-name').innerText == undefined);
    if (action === 'sort') {
      sort('GpuSlice', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortGpuSlice_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuSlice_name')?.addEventListener('sl-change', (event) => {
    sort('GpuSlice', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuSlice-description').innerText == undefined);
    if (action === 'sort') {
      sort('GpuSlice', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortGpuSlice_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuSlice_description')?.addEventListener('sl-change', (event) => {
    sort('GpuSlice', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuSlice-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('GpuSlice', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortGpuSlice_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuSlice_editPage')?.addEventListener('sl-change', (event) => {
    sort('GpuSlice', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchGpuSlice')?.addEventListener('click', (event) => {
    document.querySelector('#patchGpuSliceDialog').open = true;
  });

  document.querySelector('#htmButton_postGpuSlice')?.addEventListener('click', (event) => {
    document.querySelector('#postGpuSliceDialog').open = true;
  });

  document.querySelector('#htmButton_deleteGpuSlice')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var  =  event.currentTarget.getAttribute('data-');
      deleteGpuSlice(
          event.currentTarget
          , 
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportGpuSlice')?.addEventListener('click', (event) => {
    document.querySelector('#putimportGpuSliceDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageGpuSlice')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageGpuSliceDialog').open = true;
  });
});
