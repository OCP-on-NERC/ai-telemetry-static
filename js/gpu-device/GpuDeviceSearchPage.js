Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeGpuDevice')?.addEventListener('sl-change', (event) => {
    facetRangeChange('GpuDevice', event.target.value);
  });

  document.querySelector('#htmDropdown-clusterName')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuDevice-clusterName').innerText == undefined);
    if (action === 'sort') {
      sort('GpuDevice', 'clusterName', checked ? order : '');
      document.querySelector('#pageFacetSortGpuDevice_clusterName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuDevice_clusterName')?.addEventListener('sl-change', (event) => {
    sort('GpuDevice', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-nodeName')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuDevice-nodeName').innerText == undefined);
    if (action === 'sort') {
      sort('GpuDevice', 'nodeName', checked ? order : '');
      document.querySelector('#pageFacetSortGpuDevice_nodeName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuDevice_nodeName')?.addEventListener('sl-change', (event) => {
    sort('GpuDevice', 'nodeName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuDevice-description').innerText == undefined);
    if (action === 'sort') {
      sort('GpuDevice', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortGpuDevice_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuDevice_description')?.addEventListener('sl-change', (event) => {
    sort('GpuDevice', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-gpuDeviceNumber')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuDevice-gpuDeviceNumber').innerText == undefined);
    if (action === 'sort') {
      sort('GpuDevice', 'gpuDeviceNumber', checked ? order : '');
      document.querySelector('#pageFacetSortGpuDevice_gpuDeviceNumber').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuDevice_gpuDeviceNumber')?.addEventListener('sl-change', (event) => {
    sort('GpuDevice', 'gpuDeviceNumber', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuDevice-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('GpuDevice', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortGpuDevice_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuDevice_editPage')?.addEventListener('sl-change', (event) => {
    sort('GpuDevice', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#patchGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_postGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#postGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_deleteGpuDevice')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var  =  event.currentTarget.getAttribute('data-');
      deleteGpuDevice(
          event.currentTarget
          , 
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#putimportGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageGpuDeviceDialog').open = true;
  });
});
