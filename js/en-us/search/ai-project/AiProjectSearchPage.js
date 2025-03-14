Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiProject')?.addEventListener('change', (event) => {
    facetRangeChange('AiProject', event.target.value);
  });

  document.querySelector('#htmDropdown-clusterName')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiProject-clusterName').innerText == undefined);
    if (action === 'sort') {
      sort('AiProject', 'clusterName', checked ? order : '');
      document.querySelector('#pageFacetSortAiProject_clusterName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiProject_clusterName')?.addEventListener('change', (event) => {
    sort('AiProject', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-projectName')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiProject-projectName').innerText == undefined);
    if (action === 'sort') {
      sort('AiProject', 'projectName', checked ? order : '');
      document.querySelector('#pageFacetSortAiProject_projectName').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiProject_projectName')?.addEventListener('change', (event) => {
    sort('AiProject', 'projectName', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiProject-description').innerText == undefined);
    if (action === 'sort') {
      sort('AiProject', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortAiProject_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiProject_description')?.addEventListener('change', (event) => {
    sort('AiProject', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-AiProject-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('AiProject', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortAiProject_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortAiProject_editPage')?.addEventListener('change', (event) => {
    sort('AiProject', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchAiProject')?.addEventListener('click', (event) => {
    document.querySelector('#patchAiProjectDialog').open = true;
  });

  document.querySelector('#htmButton_postAiProject')?.addEventListener('click', (event) => {
    document.querySelector('#postAiProjectDialog').open = true;
  });

  document.querySelector('#htmButton_deleteAiProject')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var projectId =  event.currentTarget.getAttribute('data-projectId');
      deleteAiProject(
          event.currentTarget
          , projectId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportAiProject')?.addEventListener('click', (event) => {
    document.querySelector('#putimportAiProjectDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageAiProject')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageAiProjectDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterAiProject')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterAiProject(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqAiProject_created')?.addEventListener('change', (event) => {
            fqChange('AiProject', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiProject_created')?.addEventListener('click', (event) => {
            facetFieldChange('AiProject', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiProject_created')?.addEventListener('change', (event) => {
            facetPivotChange('AiProject', event.currentTarget);
          });
          document.querySelector('#fqAiProject_archived')?.addEventListener('change', (event) => {
            fqChange('AiProject', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiProject_archived')?.addEventListener('click', (event) => {
            facetFieldChange('AiProject', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiProject_archived')?.addEventListener('change', (event) => {
            facetPivotChange('AiProject', event.currentTarget);
          });
          document.querySelector('#fqAiProject_clusterName')?.addEventListener('change', (event) => {
            fqChange('AiProject', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiProject_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('AiProject', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiProject_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('AiProject', event.currentTarget);
          });
          document.querySelector('#fqAiProject_projectName')?.addEventListener('change', (event) => {
            fqChange('AiProject', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiProject_projectName')?.addEventListener('click', (event) => {
            facetFieldChange('AiProject', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiProject_projectName')?.addEventListener('change', (event) => {
            facetPivotChange('AiProject', event.currentTarget);
          });
          document.querySelector('#fqAiProject_projectId')?.addEventListener('change', (event) => {
            fqChange('AiProject', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiProject_projectId')?.addEventListener('click', (event) => {
            facetFieldChange('AiProject', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiProject_projectId')?.addEventListener('change', (event) => {
            facetPivotChange('AiProject', event.currentTarget);
          });
          document.querySelector('#fqAiProject_description')?.addEventListener('change', (event) => {
            fqChange('AiProject', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiProject_description')?.addEventListener('click', (event) => {
            facetFieldChange('AiProject', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiProject_description')?.addEventListener('change', (event) => {
            facetPivotChange('AiProject', event.currentTarget);
          });
          document.querySelector('#fqAiProject_displayPage')?.addEventListener('change', (event) => {
            fqChange('AiProject', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiProject_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiProject', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiProject_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiProject', event.currentTarget);
          });
});
