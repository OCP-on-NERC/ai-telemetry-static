Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiCluster')?.addEventListener('change', (event) => {
    facetRangeChange('AiCluster', event.target.value);
  });

  document.querySelector('#pageFacetSortAiCluster_pk')?.addEventListener('change', (event) => {
    sort('AiCluster', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_created')?.addEventListener('change', (event) => {
    sort('AiCluster', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_modified')?.addEventListener('change', (event) => {
    sort('AiCluster', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_archived')?.addEventListener('change', (event) => {
    sort('AiCluster', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_clusterName')?.addEventListener('change', (event) => {
    sort('AiCluster', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_description')?.addEventListener('change', (event) => {
    sort('AiCluster', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_id')?.addEventListener('change', (event) => {
    sort('AiCluster', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_location')?.addEventListener('change', (event) => {
    sort('AiCluster', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_aiNodesTotal')?.addEventListener('change', (event) => {
    sort('AiCluster', 'aiNodesTotal', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
    sort('AiCluster', 'gpuDevicesTotal', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_grafanaUrl')?.addEventListener('change', (event) => {
    sort('AiCluster', 'grafanaUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_ngsildTenant')?.addEventListener('change', (event) => {
    sort('AiCluster', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_ngsildPath')?.addEventListener('change', (event) => {
    sort('AiCluster', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_ngsildContext')?.addEventListener('change', (event) => {
    sort('AiCluster', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_ngsildData')?.addEventListener('change', (event) => {
    sort('AiCluster', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_classCanonicalName')?.addEventListener('change', (event) => {
    sort('AiCluster', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_classSimpleName')?.addEventListener('change', (event) => {
    sort('AiCluster', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('AiCluster', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_sessionId')?.addEventListener('change', (event) => {
    sort('AiCluster', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_userKey')?.addEventListener('change', (event) => {
    sort('AiCluster', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_saves')?.addEventListener('change', (event) => {
    sort('AiCluster', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_objectTitle')?.addEventListener('change', (event) => {
    sort('AiCluster', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_displayPage')?.addEventListener('change', (event) => {
    sort('AiCluster', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_editPage')?.addEventListener('change', (event) => {
    sort('AiCluster', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_userPage')?.addEventListener('change', (event) => {
    sort('AiCluster', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_download')?.addEventListener('change', (event) => {
    sort('AiCluster', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_objectSuggest')?.addEventListener('change', (event) => {
    sort('AiCluster', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_objectText')?.addEventListener('change', (event) => {
    sort('AiCluster', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_solrId')?.addEventListener('change', (event) => {
    sort('AiCluster', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_locationColors')?.addEventListener('change', (event) => {
    sort('AiCluster', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_locationTitles')?.addEventListener('change', (event) => {
    sort('AiCluster', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiCluster_locationLinks')?.addEventListener('change', (event) => {
    sort('AiCluster', 'locationLinks', event.currentTarget.value);
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
      var clusterName =  event.currentTarget.getAttribute('data-clusterName');
      deleteAiCluster(
          event.currentTarget
          , clusterName
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

  document.querySelector('#htmButton_deletefilterAiCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterAiCluster(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqAiCluster_created')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_created')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_created')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_archived')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_archived')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_archived')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_clusterName')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_id')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_id')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_id')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_location')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_location')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_location')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_aiNodesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_gpuDevicesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_ngsildData')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#fqAiCluster_displayPage')?.addEventListener('change', (event) => {
            fqChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiCluster_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiCluster_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiCluster', event.currentTarget);
          });
});
