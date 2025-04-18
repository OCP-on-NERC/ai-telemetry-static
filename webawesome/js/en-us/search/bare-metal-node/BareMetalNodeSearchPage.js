Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeBareMetalNode')?.addEventListener('change', (event) => {
    facetRangeChange('BareMetalNode', event.target.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_pk')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_created')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_modified')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_archived')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_leaseInfo')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'leaseInfo', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_networkInfo')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'networkInfo', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_nodeId')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_nodeIsMaintenance')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeIsMaintenance', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_nodeLinks')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_nodeName')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_nodePowerState')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodePowerState', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_nodeProvisionState')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeProvisionState', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_nodeResourceClass')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeResourceClass', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_classCanonicalName')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_classSimpleName')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_sessionId')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_userKey')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_saves')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_objectTitle')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_displayPage')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_editPage')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_userPage')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_download')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_objectSuggest')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_objectText')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNode_solrId')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchBareMetalNode')?.addEventListener('click', (event) => {
    document.querySelector('#patchBareMetalNodeDialog').open = true;
  });

  document.querySelector('#htmButton_postBareMetalNode')?.addEventListener('click', (event) => {
    document.querySelector('#postBareMetalNodeDialog').open = true;
  });

  document.querySelector('#htmButton_deleteBareMetalNode')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var nodeId =  event.currentTarget.getAttribute('data-nodeId');
      deleteBareMetalNode(
          event.currentTarget
          , nodeId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportBareMetalNode')?.addEventListener('click', (event) => {
    document.querySelector('#putimportBareMetalNodeDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageBareMetalNode')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageBareMetalNodeDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterBareMetalNode')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterBareMetalNode(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqBareMetalNode_created')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_created')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_created')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_archived')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_archived')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_archived')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_leaseInfo')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_leaseInfo')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_leaseInfo')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_networkInfo')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_networkInfo')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_networkInfo')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeIsMaintenance')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeIsMaintenance')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeIsMaintenance')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeLinks')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeLinks')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeLinks')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeName')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeName')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeName')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodePowerState')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodePowerState')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodePowerState')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeProvisionState')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeProvisionState')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeProvisionState')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeResourceClass')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeResourceClass')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeResourceClass')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_displayPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
});
