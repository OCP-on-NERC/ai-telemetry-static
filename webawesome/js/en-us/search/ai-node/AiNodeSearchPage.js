Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiNode')?.addEventListener('change', (event) => {
    facetRangeChange('AiNode', event.target.value);
  });

  document.querySelector('#pageFacetSortAiNode_pk')?.addEventListener('change', (event) => {
    sort('AiNode', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_created')?.addEventListener('change', (event) => {
    sort('AiNode', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_modified')?.addEventListener('change', (event) => {
    sort('AiNode', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_archived')?.addEventListener('change', (event) => {
    sort('AiNode', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_hubId')?.addEventListener('change', (event) => {
    sort('AiNode', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_clusterName')?.addEventListener('change', (event) => {
    sort('AiNode', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_nodeName')?.addEventListener('change', (event) => {
    sort('AiNode', 'nodeName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_description')?.addEventListener('change', (event) => {
    sort('AiNode', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_id')?.addEventListener('change', (event) => {
    sort('AiNode', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_gpuDevicesTotal')?.addEventListener('change', (event) => {
    sort('AiNode', 'gpuDevicesTotal', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_ngsildTenant')?.addEventListener('change', (event) => {
    sort('AiNode', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_ngsildPath')?.addEventListener('change', (event) => {
    sort('AiNode', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_ngsildContext')?.addEventListener('change', (event) => {
    sort('AiNode', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_ngsildData')?.addEventListener('change', (event) => {
    sort('AiNode', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_location')?.addEventListener('change', (event) => {
    sort('AiNode', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_displayPage')?.addEventListener('change', (event) => {
    sort('AiNode', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_editPage')?.addEventListener('change', (event) => {
    sort('AiNode', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_userPage')?.addEventListener('change', (event) => {
    sort('AiNode', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_download')?.addEventListener('change', (event) => {
    sort('AiNode', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_objectSuggest')?.addEventListener('change', (event) => {
    sort('AiNode', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_objectText')?.addEventListener('change', (event) => {
    sort('AiNode', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_classCanonicalName')?.addEventListener('change', (event) => {
    sort('AiNode', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_classSimpleName')?.addEventListener('change', (event) => {
    sort('AiNode', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('AiNode', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_sessionId')?.addEventListener('change', (event) => {
    sort('AiNode', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_userKey')?.addEventListener('change', (event) => {
    sort('AiNode', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_objectTitle')?.addEventListener('change', (event) => {
    sort('AiNode', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_solrId')?.addEventListener('change', (event) => {
    sort('AiNode', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_saves')?.addEventListener('change', (event) => {
    sort('AiNode', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_hubResource')?.addEventListener('change', (event) => {
    sort('AiNode', 'hubResource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_clusterResource')?.addEventListener('change', (event) => {
    sort('AiNode', 'clusterResource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_nodeResource')?.addEventListener('change', (event) => {
    sort('AiNode', 'nodeResource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_nodeDisplayName')?.addEventListener('change', (event) => {
    sort('AiNode', 'nodeDisplayName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_locationColors')?.addEventListener('change', (event) => {
    sort('AiNode', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_locationTitles')?.addEventListener('change', (event) => {
    sort('AiNode', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_locationLinks')?.addEventListener('change', (event) => {
    sort('AiNode', 'locationLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortAiNode_entityShortId')?.addEventListener('change', (event) => {
    sort('AiNode', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#patchAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_postAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#postAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_deleteAiNode')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var nodeResource =  event.currentTarget.getAttribute('data-nodeResource');
      deleteAiNode(
          event.currentTarget
          , nodeResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#putimportAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterAiNode')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterAiNode(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqAiNode_created')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_created')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_created')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_archived')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_archived')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_archived')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_hubId')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_clusterName')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_nodeName')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_nodeName')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_nodeName')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_nodeName')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_id')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_id')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_id')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_gpuDevicesTotal')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_gpuDevicesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildData')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_location')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_location')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_location')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_displayPage')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_nodeResource')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_nodeResource')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_nodeResource')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_nodeResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
});
