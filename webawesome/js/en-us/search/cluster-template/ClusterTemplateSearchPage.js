Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeClusterTemplate')?.addEventListener('change', (event) => {
    facetRangeChange('ClusterTemplate', event.target.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_pk')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_created')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_modified')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_archived')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_id')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_title')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'title', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_description')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_parameters')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'parameters', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_displayPage')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_editPage')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_userPage')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_download')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_objectSuggest')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_objectText')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_classSimpleName')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_sessionId')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_userKey')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_objectTitle')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_solrId')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortClusterTemplate_saves')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'saves', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchClusterTemplate')?.addEventListener('click', (event) => {
    document.querySelector('#patchClusterTemplateDialog').open = true;
  });

  document.querySelector('#htmButton_postClusterTemplate')?.addEventListener('click', (event) => {
    document.querySelector('#postClusterTemplateDialog').open = true;
  });

  document.querySelector('#htmButton_deleteClusterTemplate')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var id =  event.currentTarget.getAttribute('data-id');
      deleteClusterTemplate(
          event.currentTarget
          , id
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportClusterTemplate')?.addEventListener('click', (event) => {
    document.querySelector('#putimportClusterTemplateDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageClusterTemplate')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageClusterTemplateDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterClusterTemplate')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterClusterTemplate(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqClusterTemplate_created')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_created')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_created')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_archived')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_archived')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_archived')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_id')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_id')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_id')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_title')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_title')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_title')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_title')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_description')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_description')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_description')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_parameters')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_parameters')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_parameters')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_parameters')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_displayPage')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
});
