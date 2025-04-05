Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeClusterRequest')?.addEventListener('change', (event) => {
    facetRangeChange('ClusterRequest', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-ClusterRequest-name').innerText == undefined);
    if (action === 'sort') {
      sort('ClusterRequest', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortClusterRequest_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortClusterRequest_name')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-clusterTemplateTitle')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-ClusterRequest-clusterTemplateTitle').innerText == undefined);
    if (action === 'sort') {
      sort('ClusterRequest', 'clusterTemplateTitle', checked ? order : '');
      document.querySelector('#pageFacetSortClusterRequest_clusterTemplateTitle').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortClusterRequest_clusterTemplateTitle')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'clusterTemplateTitle', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-ClusterRequest-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('ClusterRequest', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortClusterRequest_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortClusterRequest_editPage')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchClusterRequest')?.addEventListener('click', (event) => {
    document.querySelector('#patchClusterRequestDialog').open = true;
  });

  document.querySelector('#htmButton_postClusterRequest')?.addEventListener('click', (event) => {
    document.querySelector('#postClusterRequestDialog').open = true;
  });

  document.querySelector('#htmButton_deleteClusterRequest')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var name =  event.currentTarget.getAttribute('data-name');
      deleteClusterRequest(
          event.currentTarget
          , name
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportClusterRequest')?.addEventListener('click', (event) => {
    document.querySelector('#putimportClusterRequestDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageClusterRequest')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageClusterRequestDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterClusterRequest')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterClusterRequest(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqClusterRequest_created')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_created')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_created')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#fqClusterRequest_archived')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_archived')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_archived')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#fqClusterRequest_name')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_name')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_name')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#fqClusterRequest_displayPage')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
});
