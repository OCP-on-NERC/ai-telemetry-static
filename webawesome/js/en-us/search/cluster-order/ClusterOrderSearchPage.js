Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeClusterOrder')?.addEventListener('change', (event) => {
    facetRangeChange('ClusterOrder', event.target.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_pk')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_created')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_modified')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_archived')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_id')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_templateId')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'templateId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_state')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'state', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_clusterId')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'clusterId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_classSimpleName')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_sessionId')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_userKey')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_saves')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_objectTitle')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_displayPage')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_editPage')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_userPage')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_download')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_objectSuggest')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_objectText')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterOrder_solrId')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchClusterOrder')?.addEventListener('click', (event) => {
    document.querySelector('#patchClusterOrderDialog').open = true;
  });

  document.querySelector('#htmButton_postClusterOrder')?.addEventListener('click', (event) => {
    document.querySelector('#postClusterOrderDialog').open = true;
  });

  document.querySelector('#htmButton_deleteClusterOrder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var id =  event.currentTarget.getAttribute('data-id');
      deleteClusterOrder(
          event.currentTarget
          , id
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportClusterOrder')?.addEventListener('click', (event) => {
    document.querySelector('#putimportClusterOrderDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageClusterOrder')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageClusterOrderDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterClusterOrder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterClusterOrder(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqClusterOrder_created')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_created')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_created')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_archived')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_archived')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_archived')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_id')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_id')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_id')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_templateId')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_templateId')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_templateId')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_state')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_state')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_state')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_clusterId')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_clusterId')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_clusterId')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_displayPage')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
});
