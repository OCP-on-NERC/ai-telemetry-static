Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeGpuSlice')?.addEventListener('wa-change', (event) => {
    facetRangeChange('GpuSlice', event.target.value);
  });

  document.querySelector('#htmDropdown-sliceName')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuSlice-sliceName').innerText == undefined);
    if (action === 'sort') {
      sort('GpuSlice', 'sliceName', checked ? order : '');
      document.querySelector('#pageFacetSortGpuSlice_sliceName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuSlice_sliceName')?.addEventListener('wa-change', (event) => {
    sort('GpuSlice', 'sliceName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuSlice-description').innerText == undefined);
    if (action === 'sort') {
      sort('GpuSlice', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortGpuSlice_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuSlice_description')?.addEventListener('wa-change', (event) => {
    sort('GpuSlice', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-GpuSlice-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('GpuSlice', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortGpuSlice_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortGpuSlice_editPage')?.addEventListener('wa-change', (event) => {
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
      var sliceName =  event.currentTarget.getAttribute('data-sliceName');
      deleteGpuSlice(
          event.currentTarget
          , sliceName
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
          document.querySelector('#fqGpuSlice_created')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_created')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_created')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_archived')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_archived')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_archived')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_sliceName')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_sliceName')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_sliceName')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_description')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_description')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_description')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_id')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_id')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_id')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_ngsildTenant')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_ngsildTenant')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_ngsildPath')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_ngsildPath')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_ngsildContext')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_ngsildContext')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_ngsildData')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_ngsildData')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_location')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_location')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_location')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_displayPage')?.addEventListener('wa-change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_displayPage')?.addEventListener('wa-change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
});
