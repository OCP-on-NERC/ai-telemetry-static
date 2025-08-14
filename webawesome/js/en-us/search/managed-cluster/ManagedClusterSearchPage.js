Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeManagedCluster')?.addEventListener('change', (event) => {
    facetRangeChange('ManagedCluster', event.target.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_pk')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_created')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_modified')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_archived')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_id')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_state')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'state', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_apiUrl')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'apiUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_consoleUrl')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'consoleUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_userKey')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_saves')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_objectTitle')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_displayPage')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_editPage')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_userPage')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_download')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_objectSuggest')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_objectText')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_solrId')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_classSimpleName')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortManagedCluster_sessionId')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchManagedCluster')?.addEventListener('click', (event) => {
    document.querySelector('#patchManagedClusterDialog').open = true;
  });

  document.querySelector('#htmButton_postManagedCluster')?.addEventListener('click', (event) => {
    document.querySelector('#postManagedClusterDialog').open = true;
  });

  document.querySelector('#htmButton_deleteManagedCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var id =  event.currentTarget.getAttribute('data-id');
      deleteManagedCluster(
          event.currentTarget
          , id
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportManagedCluster')?.addEventListener('click', (event) => {
    document.querySelector('#putimportManagedClusterDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageManagedCluster')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageManagedClusterDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterManagedCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterManagedCluster(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqManagedCluster_created')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_created')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_created')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_archived')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_archived')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_archived')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_id')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_id')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_id')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_state')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_state')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_state')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_state')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_apiUrl')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_apiUrl')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_apiUrl')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_apiUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_consoleUrl')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_consoleUrl')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_consoleUrl')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_consoleUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_displayPage')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
});
