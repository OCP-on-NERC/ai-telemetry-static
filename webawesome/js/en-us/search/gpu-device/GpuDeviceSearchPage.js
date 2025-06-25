Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeGpuDevice')?.addEventListener('change', (event) => {
    facetRangeChange('GpuDevice', event.target.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_pk')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_created')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_modified')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_archived')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_clusterName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_nodeName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'nodeName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_description')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'gpuDeviceNumber', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_id')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'gpuDeviceUtilization', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_ngsildData')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_location')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_classCanonicalName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_classSimpleName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_sessionId')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_userKey')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_saves')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_objectTitle')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_displayPage')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_editPage')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_userPage')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_download')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_objectSuggest')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_objectText')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_solrId')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_gpuDeviceId')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'gpuDeviceId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_locationColors')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_locationTitles')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_locationLinks')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'locationLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuDevice_entityShortId')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#patchGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_postGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#postGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_deleteGpuDevice')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var gpuDeviceId =  event.currentTarget.getAttribute('data-gpuDeviceId');
      deleteGpuDevice(
          event.currentTarget
          , gpuDeviceId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#putimportGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterGpuDevice')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterGpuDevice(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqGpuDevice_created')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_created')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_created')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_archived')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_archived')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_archived')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_clusterName')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_nodeName')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_nodeName')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_nodeName')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_description')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_description')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_description')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_gpuDeviceNumber')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_id')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_id')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_id')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_gpuDeviceUtilization')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildData')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_location')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_location')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_location')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_displayPage')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_gpuDeviceId')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_gpuDeviceId')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_gpuDeviceId')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
});
