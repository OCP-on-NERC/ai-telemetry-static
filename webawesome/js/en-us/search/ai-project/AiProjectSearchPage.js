Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiProject')?.addEventListener('change', (event) => {
    facetRangeChange('AiProject', event.target.value);
  });

  document.querySelector('#pageFacetSortAiProject_pk')?.addEventListener('change', (event) => {
    sort('AiProject', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_created')?.addEventListener('change', (event) => {
    sort('AiProject', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_modified')?.addEventListener('change', (event) => {
    sort('AiProject', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_archived')?.addEventListener('change', (event) => {
    sort('AiProject', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_clusterName')?.addEventListener('change', (event) => {
    sort('AiProject', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_projectName')?.addEventListener('change', (event) => {
    sort('AiProject', 'projectName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_projectId')?.addEventListener('change', (event) => {
    sort('AiProject', 'projectId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_description')?.addEventListener('change', (event) => {
    sort('AiProject', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_classCanonicalName')?.addEventListener('change', (event) => {
    sort('AiProject', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_classSimpleName')?.addEventListener('change', (event) => {
    sort('AiProject', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('AiProject', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_sessionId')?.addEventListener('change', (event) => {
    sort('AiProject', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_userKey')?.addEventListener('change', (event) => {
    sort('AiProject', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_saves')?.addEventListener('change', (event) => {
    sort('AiProject', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_objectTitle')?.addEventListener('change', (event) => {
    sort('AiProject', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_displayPage')?.addEventListener('change', (event) => {
    sort('AiProject', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_editPage')?.addEventListener('change', (event) => {
    sort('AiProject', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_userPage')?.addEventListener('change', (event) => {
    sort('AiProject', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_download')?.addEventListener('change', (event) => {
    sort('AiProject', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_objectSuggest')?.addEventListener('change', (event) => {
    sort('AiProject', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_objectText')?.addEventListener('change', (event) => {
    sort('AiProject', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_solrId')?.addEventListener('change', (event) => {
    sort('AiProject', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiProject_projectDisplayName')?.addEventListener('change', (event) => {
    sort('AiProject', 'projectDisplayName', event.currentTarget.value);
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
