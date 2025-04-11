Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeBareMetalNetwork')?.addEventListener('change', (event) => {
    facetRangeChange('BareMetalNetwork', event.target.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_pk')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_created')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_modified')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_archived')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_id')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_name')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_description')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_availabilityZoneHints')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'availabilityZoneHints', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_availabilityZones')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'availabilityZones', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_createdAt')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'createdAt', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_dnsDomain')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'dnsDomain', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_mtu')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'mtu', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_projectId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'projectId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_providerNetworkType')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'providerNetworkType', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'providerPhysicalNetwork', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_providerSegmentationId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'providerSegmentationId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_qosPolicyId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'qosPolicyId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_revisionNumber')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'revisionNumber', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_status')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'status', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_subnetIds')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'subnetIds', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_tags')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'tags', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_tenantId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_updatedAt')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'updatedAt', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_isAdminStateUp')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isAdminStateUp', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_isDefault')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isDefault', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isPortSecurityEnabled', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_isRouterExternal')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isRouterExternal', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_isShared')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isShared', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_isVlanQueing')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isVlanQueing', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_isVlanTransparent')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isVlanTransparent', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_l2Adjacency')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'l2Adjacency', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_locationCloud')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationCloud', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_locationProjectDomainId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationProjectDomainId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_locationProjectDomainName')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationProjectDomainName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_locationProjectId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationProjectId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_locationProjectName')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationProjectName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_locationRegionName')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationRegionName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_locationZone')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationZone', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_classCanonicalName')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_classSimpleName')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_sessionId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_userKey')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_saves')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_objectTitle')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_displayPage')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_editPage')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_userPage')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_download')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_objectSuggest')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_objectText')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortBareMetalNetwork_solrId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchBareMetalNetwork')?.addEventListener('click', (event) => {
    document.querySelector('#patchBareMetalNetworkDialog').open = true;
  });

  document.querySelector('#htmButton_postBareMetalNetwork')?.addEventListener('click', (event) => {
    document.querySelector('#postBareMetalNetworkDialog').open = true;
  });

  document.querySelector('#htmButton_deleteBareMetalNetwork')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var id =  event.currentTarget.getAttribute('data-id');
      deleteBareMetalNetwork(
          event.currentTarget
          , id
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportBareMetalNetwork')?.addEventListener('click', (event) => {
    document.querySelector('#putimportBareMetalNetworkDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageBareMetalNetwork')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageBareMetalNetworkDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterBareMetalNetwork')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterBareMetalNetwork(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqBareMetalNetwork_created')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_created')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_created')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_archived')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_archived')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_archived')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_id')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_id')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_id')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_name')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_name')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_name')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_description')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_description')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_description')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_availabilityZoneHints')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_availabilityZoneHints')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_availabilityZoneHints')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_availabilityZones')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_availabilityZones')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_availabilityZones')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_createdAt')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_createdAt')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_createdAt')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_dnsDomain')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_dnsDomain')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_dnsDomain')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_mtu')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_mtu')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_mtu')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_projectId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_projectId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_projectId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_providerNetworkType')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_providerNetworkType')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_providerNetworkType')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_providerSegmentationId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_providerSegmentationId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_providerSegmentationId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_qosPolicyId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_qosPolicyId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_qosPolicyId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_revisionNumber')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_revisionNumber')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_revisionNumber')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_status')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_status')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_status')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_subnetIds')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_subnetIds')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_subnetIds')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_tags')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_tags')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_tags')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_tenantId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_updatedAt')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_updatedAt')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_updatedAt')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isAdminStateUp')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isAdminStateUp')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isAdminStateUp')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isDefault')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isDefault')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isDefault')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isRouterExternal')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isRouterExternal')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isRouterExternal')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isShared')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isShared')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isShared')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isVlanQueing')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isVlanQueing')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isVlanQueing')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isVlanTransparent')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isVlanTransparent')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isVlanTransparent')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_l2Adjacency')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_l2Adjacency')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_l2Adjacency')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationCloud')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationCloud')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationCloud')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationProjectDomainId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationProjectDomainId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationProjectDomainId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationProjectDomainName')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationProjectDomainName')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationProjectDomainName')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationProjectId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationProjectId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationProjectId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationProjectName')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationProjectName')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationProjectName')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationRegionName')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationRegionName')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationRegionName')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationZone')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationZone')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationZone')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_displayPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
});
