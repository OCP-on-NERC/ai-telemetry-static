Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiCluster')?.addEventListener('wa-change', (event) => {
    facetRangeChange('AiCluster', event.target.value);
  });

  document.querySelector('#htmDropdown-clusterName')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiCluster-clusterName').innerText == undefined);
    if (action === 'sort') {
      sort('AiCluster', 'clusterName', checked ? order : '');
      document.querySelector('#pageFacetSortAiCluster_clusterName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiCluster_clusterName')?.addEventListener('wa-change', (event) => {
    sort('AiCluster', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiCluster-description').innerText == undefined);
    if (action === 'sort') {
      sort('AiCluster', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortAiCluster_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiCluster_description')?.addEventListener('wa-change', (event) => {
    sort('AiCluster', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiCluster-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('AiCluster', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortAiCluster_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiCluster_editPage')?.addEventListener('wa-change', (event) => {
    sort('AiCluster', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchAiCluster')?.addEventListener('click', (event) => {
    document.querySelector('#patchAiClusterDialog').open = true;
  });

  document.querySelector('#htmButton_postAiCluster')?.addEventListener('click', (event) => {
    document.querySelector('#postAiClusterDialog').open = true;
  });

  document.querySelector('#htmButton_deleteAiCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var clusterName =  event.currentTarget.getAttribute('data-clusterName');
      deleteAiCluster(
          event.currentTarget
          , clusterName
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportAiCluster')?.addEventListener('click', (event) => {
    document.querySelector('#putimportAiClusterDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageAiCluster')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageAiClusterDialog').open = true;
  });
          document.querySelector('#fqAiCluster_created')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_created')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_created')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_archived')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_archived')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_archived')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_clusterName')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_clusterName')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_id')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_id')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_id')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_location')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_location')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_location')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_aiNodesTotal')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_aiNodesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_aiNodesTotal')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_gpuDevicesTotal')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_gpuDevicesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_gpuDevicesTotal')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildTenant')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildTenant')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildPath')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildPath')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildContext')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildContext')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildData')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildData')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_displayPage')?.addEventListener('wa-change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_displayPage')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
});
