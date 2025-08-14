Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCluster')?.addEventListener('change', (event) => {
    facetRangeChange('Cluster', event.target.value);
  });

  document.querySelector('#pageFacetSortCluster_pk')?.addEventListener('change', (event) => {
    sort('Cluster', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_created')?.addEventListener('change', (event) => {
    sort('Cluster', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_modified')?.addEventListener('change', (event) => {
    sort('Cluster', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_archived')?.addEventListener('change', (event) => {
    sort('Cluster', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_hubId')?.addEventListener('change', (event) => {
    sort('Cluster', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_clusterName')?.addEventListener('change', (event) => {
    sort('Cluster', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_uniqueName')?.addEventListener('change', (event) => {
    sort('Cluster', 'uniqueName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_location')?.addEventListener('change', (event) => {
    sort('Cluster', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_description')?.addEventListener('change', (event) => {
    sort('Cluster', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_aiNodesTotal')?.addEventListener('change', (event) => {
    sort('Cluster', 'aiNodesTotal', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
    sort('Cluster', 'gpuDevicesTotal', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_grafanaUrl')?.addEventListener('change', (event) => {
    sort('Cluster', 'grafanaUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_cpuCoresTotal')?.addEventListener('change', (event) => {
    sort('Cluster', 'cpuCoresTotal', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_memoryBytesTotal')?.addEventListener('change', (event) => {
    sort('Cluster', 'memoryBytesTotal', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_id')?.addEventListener('change', (event) => {
    sort('Cluster', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_ngsildTenant')?.addEventListener('change', (event) => {
    sort('Cluster', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_ngsildPath')?.addEventListener('change', (event) => {
    sort('Cluster', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_ngsildContext')?.addEventListener('change', (event) => {
    sort('Cluster', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_ngsildData')?.addEventListener('change', (event) => {
    sort('Cluster', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_userKey')?.addEventListener('change', (event) => {
    sort('Cluster', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_saves')?.addEventListener('change', (event) => {
    sort('Cluster', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_objectTitle')?.addEventListener('change', (event) => {
    sort('Cluster', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_displayPage')?.addEventListener('change', (event) => {
    sort('Cluster', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_editPage')?.addEventListener('change', (event) => {
    sort('Cluster', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_userPage')?.addEventListener('change', (event) => {
    sort('Cluster', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_download')?.addEventListener('change', (event) => {
    sort('Cluster', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_objectSuggest')?.addEventListener('change', (event) => {
    sort('Cluster', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_objectText')?.addEventListener('change', (event) => {
    sort('Cluster', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_solrId')?.addEventListener('change', (event) => {
    sort('Cluster', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Cluster', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_classSimpleName')?.addEventListener('change', (event) => {
    sort('Cluster', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Cluster', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_sessionId')?.addEventListener('change', (event) => {
    sort('Cluster', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_hubResource')?.addEventListener('change', (event) => {
    sort('Cluster', 'hubResource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_clusterResource')?.addEventListener('change', (event) => {
    sort('Cluster', 'clusterResource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_locationColors')?.addEventListener('change', (event) => {
    sort('Cluster', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_locationTitles')?.addEventListener('change', (event) => {
    sort('Cluster', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCluster_locationLinks')?.addEventListener('change', (event) => {
    sort('Cluster', 'locationLinks', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCluster')?.addEventListener('click', (event) => {
    document.querySelector('#patchClusterDialog').open = true;
  });

  document.querySelector('#htmButton_postCluster')?.addEventListener('click', (event) => {
    document.querySelector('#postClusterDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var clusterResource =  event.currentTarget.getAttribute('data-clusterResource');
      deleteCluster(
          event.currentTarget
          , clusterResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCluster')?.addEventListener('click', (event) => {
    document.querySelector('#putimportClusterDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCluster')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageClusterDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCluster(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCluster_created')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_created')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_created')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_archived')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_hubId')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_clusterName')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_location')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_location')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_location')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_aiNodesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_gpuDevicesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_cpuCoresTotal')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_cpuCoresTotal')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_cpuCoresTotal')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_cpuCoresTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_memoryBytesTotal')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_memoryBytesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_memoryBytesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_memoryBytesTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_id')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_id')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_id')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_ngsildData')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_displayPage')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_clusterResource')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_clusterResource')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_clusterResource')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_clusterResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
});
