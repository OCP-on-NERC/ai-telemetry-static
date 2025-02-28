Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeGpuDevice')?.addEventListener('change', (event) => {
    facetRangeChange('GpuDevice', event.target.value);
  });

  document.querySelector('#htmDropdown-clusterName')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuDevice-clusterName').innerText == undefined);
    if (action === 'sort') {
      sort('GpuDevice', 'clusterName', checked ? order : '');
      document.querySelector('#pageFacetSortGpuDevice_clusterName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuDevice_clusterName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-nodeName')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuDevice-nodeName').innerText == undefined);
    if (action === 'sort') {
      sort('GpuDevice', 'nodeName', checked ? order : '');
      document.querySelector('#pageFacetSortGpuDevice_nodeName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuDevice_nodeName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'nodeName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuDevice-description').innerText == undefined);
    if (action === 'sort') {
      sort('GpuDevice', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortGpuDevice_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuDevice_description')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-gpuDeviceNumber')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuDevice-gpuDeviceNumber').innerText == undefined);
    if (action === 'sort') {
      sort('GpuDevice', 'gpuDeviceNumber', checked ? order : '');
      document.querySelector('#pageFacetSortGpuDevice_gpuDeviceNumber').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'gpuDeviceNumber', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuDevice-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('GpuDevice', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortGpuDevice_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuDevice_editPage')?.addEventListener('change', (event) => {
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
      var gpuDeviceId =  event.currentTarget.getAttribute('data-gpuDeviceId');
      deleteGpuDevice(
          event.currentTarget
          , gpuDeviceId
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

  document.querySelector('#htmButton_deletefilterGpuDevice')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterGpuDevice(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqGpuDevice_created')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_created')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_created')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_archived')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_archived')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_archived')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_clusterName')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_nodeName')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_nodeName')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_nodeName')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_description')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_description')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_description')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_gpuDeviceNumber')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_id')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_id')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_id')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_gpuDeviceUtilization')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildData')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_location')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_location')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_location')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_displayPage')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_gpuDeviceId')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_gpuDeviceId')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_gpuDeviceId')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
});
