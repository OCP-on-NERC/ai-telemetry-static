Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiNode')?.addEventListener('sl-change', (event) => {
    facetRangeChange('AiNode', event.target.value);
  });

  document.querySelector('#htmDropdown-nodeName')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiNode-nodeName').innerText == undefined);
    if (action === 'sort') {
      sort('AiNode', 'nodeName', checked ? order : '');
      document.querySelector('#pageFacetSortAiNode_nodeName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiNode_nodeName')?.addEventListener('sl-change', (event) => {
    sort('AiNode', 'nodeName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-clusterName')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiNode-clusterName').innerText == undefined);
    if (action === 'sort') {
      sort('AiNode', 'clusterName', checked ? order : '');
      document.querySelector('#pageFacetSortAiNode_clusterName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiNode_clusterName')?.addEventListener('sl-change', (event) => {
    sort('AiNode', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiNode-description').innerText == undefined);
    if (action === 'sort') {
      sort('AiNode', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortAiNode_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiNode_description')?.addEventListener('sl-change', (event) => {
    sort('AiNode', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('sl-select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiNode-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('AiNode', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortAiNode_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiNode_editPage')?.addEventListener('sl-change', (event) => {
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
      var  =  event.currentTarget.getAttribute('data-');
      deleteAiNode(
          event.currentTarget
          , 
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
});
