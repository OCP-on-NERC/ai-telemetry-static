Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeProject')?.addEventListener('change', (event) => {
    facetRangeChange('Project', event.target.value);
  });

  document.querySelector('#pageFacetSortProject_pk')?.addEventListener('change', (event) => {
    sort('Project', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_created')?.addEventListener('change', (event) => {
    sort('Project', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_modified')?.addEventListener('change', (event) => {
    sort('Project', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_archived')?.addEventListener('change', (event) => {
    sort('Project', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_hubId')?.addEventListener('change', (event) => {
    sort('Project', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_clusterName')?.addEventListener('change', (event) => {
    sort('Project', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_projectName')?.addEventListener('change', (event) => {
    sort('Project', 'projectName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_description')?.addEventListener('change', (event) => {
    sort('Project', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Project', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_classSimpleName')?.addEventListener('change', (event) => {
    sort('Project', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Project', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_sessionId')?.addEventListener('change', (event) => {
    sort('Project', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_userKey')?.addEventListener('change', (event) => {
    sort('Project', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_saves')?.addEventListener('change', (event) => {
    sort('Project', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_objectTitle')?.addEventListener('change', (event) => {
    sort('Project', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_displayPage')?.addEventListener('change', (event) => {
    sort('Project', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_editPage')?.addEventListener('change', (event) => {
    sort('Project', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_userPage')?.addEventListener('change', (event) => {
    sort('Project', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_download')?.addEventListener('change', (event) => {
    sort('Project', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_objectSuggest')?.addEventListener('change', (event) => {
    sort('Project', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_objectText')?.addEventListener('change', (event) => {
    sort('Project', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_solrId')?.addEventListener('change', (event) => {
    sort('Project', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_hubResource')?.addEventListener('change', (event) => {
    sort('Project', 'hubResource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_clusterResource')?.addEventListener('change', (event) => {
    sort('Project', 'clusterResource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_projectResource')?.addEventListener('change', (event) => {
    sort('Project', 'projectResource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortProject_projectDisplayName')?.addEventListener('change', (event) => {
    sort('Project', 'projectDisplayName', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchProject')?.addEventListener('click', (event) => {
    document.querySelector('#patchProjectDialog').open = true;
  });

  document.querySelector('#htmButton_postProject')?.addEventListener('click', (event) => {
    document.querySelector('#postProjectDialog').open = true;
  });

  document.querySelector('#htmButton_deleteProject')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var projectResource =  event.currentTarget.getAttribute('data-projectResource');
      deleteProject(
          event.currentTarget
          , projectResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportProject')?.addEventListener('click', (event) => {
    document.querySelector('#putimportProjectDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageProject')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageProjectDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterProject')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterProject(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqProject_created')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_created')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_created')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_archived')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_hubId')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_clusterName')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_projectName')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_projectName')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_projectName')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_projectName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_description')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_description')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_description')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_displayPage')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
          document.querySelector('#fqProject_projectResource')?.addEventListener('change', (event) => {
            fqChange('Project', event.currentTarget);
          });
          document.querySelector('#buttonFacetProject_projectResource')?.addEventListener('click', (event) => {
            facetFieldChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotProject_projectResource')?.addEventListener('change', (event) => {
            facetPivotChange('Project', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapProject_projectResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('Project', event.currentTarget);
          });
});
