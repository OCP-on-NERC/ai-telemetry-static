Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiCluster')?.addEventListener('sl-change', (event) => {
    facetRangeChange('AiCluster', event.target.value);
  });

  document.querySelector('#htmDropdown-clusterName')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiCluster-clusterName').innerText == undefined);
    if (action === 'sort') {
      sort('AiCluster', 'clusterName', checked ? order : '');
      document.querySelector('#pageFacetSortAiCluster_clusterName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiCluster_clusterName')?.addEventListener('sl-change', (event) => {
    sort('AiCluster', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiCluster-description').innerText == undefined);
    if (action === 'sort') {
      sort('AiCluster', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortAiCluster_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiCluster_description')?.addEventListener('sl-change', (event) => {
    sort('AiCluster', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiCluster-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('AiCluster', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortAiCluster_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiCluster_editPage')?.addEventListener('sl-change', (event) => {
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
      var  =  event.currentTarget.getAttribute('data-');
      deleteAiCluster(
          event.currentTarget
          , 
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
});
