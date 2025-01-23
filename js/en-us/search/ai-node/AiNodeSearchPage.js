Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiNode')?.addEventListener('wa-change', (event) => {
    facetRangeChange('AiNode', event.target.value);
  });

  document.querySelector('#htmDropdown-clusterName')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiNode-clusterName').innerText == undefined);
    if (action === 'sort') {
      sort('AiNode', 'clusterName', checked ? order : '');
      document.querySelector('#pageFacetSortAiNode_clusterName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiNode_clusterName')?.addEventListener('wa-change', (event) => {
    sort('AiNode', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-nodeName')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiNode-nodeName').innerText == undefined);
    if (action === 'sort') {
      sort('AiNode', 'nodeName', checked ? order : '');
      document.querySelector('#pageFacetSortAiNode_nodeName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiNode_nodeName')?.addEventListener('wa-change', (event) => {
    sort('AiNode', 'nodeName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiNode-description').innerText == undefined);
    if (action === 'sort') {
      sort('AiNode', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortAiNode_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiNode_description')?.addEventListener('wa-change', (event) => {
    sort('AiNode', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('wa-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiNode-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('AiNode', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortAiNode_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiNode_editPage')?.addEventListener('wa-change', (event) => {
    sort('AiNode', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#patchAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_postAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#postAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_deleteAiNode')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var nodeId =  event.currentTarget.getAttribute('data-nodeId');
      deleteAiNode(
          event.currentTarget
          , nodeId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#putimportAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageAiNodeDialog').open = true;
  });
          document.querySelector('#fqAiNode_created')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_created')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_created')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_archived')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_archived')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_archived')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_clusterName')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_clusterName')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_nodeName')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_nodeName')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_nodeName')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_nodeId')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_nodeId')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_nodeId')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_id')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_id')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_id')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_gpuDevicesTotal')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_gpuDevicesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_gpuDevicesTotal')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildTenant')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildTenant')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildPath')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildPath')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildContext')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildContext')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildData')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildData')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_location')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_location')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_location')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_displayPage')?.addEventListener('wa-change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_displayPage')?.addEventListener('wa-change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
});
