Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeBareMetalResourceClass')?.addEventListener('change', (event) => {
    facetRangeChange('BareMetalResourceClass', event.target.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_pk')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_created')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_modified')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_archived')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_name')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_count')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'count', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_classCanonicalName')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_classSimpleName')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_sessionId')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_userKey')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_saves')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_objectTitle')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_displayPage')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_editPage')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_userPage')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_download')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_objectSuggest')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_objectText')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalResourceClass_solrId')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchBareMetalResourceClass')?.addEventListener('click', (event) => {
    document.querySelector('#patchBareMetalResourceClassDialog').open = true;
  });

  document.querySelector('#htmButton_postBareMetalResourceClass')?.addEventListener('click', (event) => {
    document.querySelector('#postBareMetalResourceClassDialog').open = true;
  });

  document.querySelector('#htmButton_deleteBareMetalResourceClass')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var name =  event.currentTarget.getAttribute('data-name');
      deleteBareMetalResourceClass(
          event.currentTarget
          , name
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportBareMetalResourceClass')?.addEventListener('click', (event) => {
    document.querySelector('#putimportBareMetalResourceClassDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageBareMetalResourceClass')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageBareMetalResourceClassDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterBareMetalResourceClass')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterBareMetalResourceClass(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqBareMetalResourceClass_created')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_created')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_created')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_archived')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_archived')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_archived')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_name')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_name')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_name')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_count')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_count')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_count')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_displayPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
});
