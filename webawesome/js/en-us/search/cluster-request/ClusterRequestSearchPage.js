Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeClusterRequest')?.addEventListener('change', (event) => {
    facetRangeChange('ClusterRequest', event.target.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_pk')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_created')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_modified')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_archived')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_name')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_clusterTemplateTitle')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'clusterTemplateTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_userId')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'userId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_classSimpleName')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_sessionId')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_userKey')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_saves')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_objectTitle')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_displayPage')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_editPage')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_userPage')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_download')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_objectSuggest')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_objectText')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterRequest_solrId')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'solrId', event.currentTarget.value);
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
