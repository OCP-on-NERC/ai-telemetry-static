Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Page_created')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.value.split('[').pop().split(']')[0];
              var t1 = moment(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a');
              var t2 = moment.tz(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a', timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH author
          document.querySelector('#Page_author')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_author');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setAuthor', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_author')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_author')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_author');
            const valid = form.reportValidity();
          });

          // PATCH pageImageUri
          document.querySelector('#Page_pageImageUri')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_pageImageUri');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setPageImageUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pageImageUri')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pageImageUri')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_pageImageUri');
            const valid = form.reportValidity();
          });

          // PATCH pageId
          document.querySelector('#Page_pageId')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setPageId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pageId')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pageId')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Page_displayPage')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_displayPage')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setTitle', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_title')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_title')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.reportValidity();
          });

          // PATCH solrId
          document.querySelector('#Page_solrId')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_solrId');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setSolrId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_solrId')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_solrId')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_solrId');
            const valid = form.reportValidity();
          });

          // PATCH courseNum
          document.querySelector('#Page_courseNum')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_courseNum');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setCourseNum', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_courseNum')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_courseNum')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_courseNum');
            const valid = form.reportValidity();
          });

          // PATCH lessonNum
          document.querySelector('#Page_lessonNum')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_lessonNum');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setLessonNum', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_lessonNum')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_lessonNum')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_lessonNum');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#Page_name')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_name')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_name')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH h1
          document.querySelector('#Page_h1')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_h1');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setH1', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_h1')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_h1')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_h1');
            const valid = form.reportValidity();
          });

          // PATCH h2
          document.querySelector('#Page_h2')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_h2');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pageId:' + event.currentTarget.getAttribute('data-pageId') }]
                  , 'setH2', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_h2')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_h2')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_h2');
            const valid = form.reportValidity();
          });
});
