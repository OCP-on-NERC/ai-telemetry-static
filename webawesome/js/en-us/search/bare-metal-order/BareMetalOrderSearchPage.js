Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeBareMetalOrder')?.addEventListener('change', (event) => {
    facetRangeChange('BareMetalOrder', event.target.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_pk')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_created')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_modified')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_archived')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_description')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_classCanonicalName')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_classSimpleName')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_sessionId')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_userKey')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_saves')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_objectTitle')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_displayPage')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_editPage')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_userPage')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_download')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_objectSuggest')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalOrder_objectText')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchBareMetalOrder')?.addEventListener('click', (event) => {
    document.querySelector('#patchBareMetalOrderDialog').open = true;
  });

  document.querySelector('#htmButton_postBareMetalOrder')?.addEventListener('click', (event) => {
    document.querySelector('#postBareMetalOrderDialog').open = true;
  });

  document.querySelector('#htmButton_deleteBareMetalOrder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pk =  event.currentTarget.getAttribute('data-pk');
      deleteBareMetalOrder(
          event.currentTarget
          , pk
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_searchpageBareMetalOrder')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageBareMetalOrderDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterBareMetalOrder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterBareMetalOrder(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqBareMetalOrder_created')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_created')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_created')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_archived')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_archived')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_archived')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_description')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_description')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_description')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_displayPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
});
