Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiCluster')?.addEventListener('change', (event) => {
    facetRangeChange('AiCluster', event.target.value);
  });

  document.querySelector('#htmDropdown-clusterName')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiCluster-clusterName').innerText == undefined);
    if (action === 'sort') {
      sort('AiCluster', 'clusterName', checked ? order : '');
      document.querySelector('#pageFacetSortAiCluster_clusterName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiCluster_clusterName')?.addEventListener('change', (event) => {
    sort('AiCluster', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiCluster-description').innerText == undefined);
    if (action === 'sort') {
      sort('AiCluster', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortAiCluster_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiCluster_description')?.addEventListener('change', (event) => {
    sort('AiCluster', 'description', event.currentTarget.value);
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

  document.querySelector('#htmButton_deletefilterAiCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterAiCluster(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqAiCluster_created')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_created')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_created')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_archived')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_archived')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_archived')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_clusterName')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_id')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_id')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_id')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_location')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_location')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_location')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_aiNodesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_gpuDevicesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildData')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_displayPage')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
});
