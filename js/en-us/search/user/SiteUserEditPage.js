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
                patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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
                patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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

          // PATCH seeArchived
          document.querySelector('#Page_seeArchived')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_seeArchived');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setSeeArchived', event.currentTarget.checked
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_seeArchived')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_seeArchived')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_seeArchived');
            const valid = form.reportValidity();
          });

          // PATCH seeDeleted
          document.querySelector('#Page_seeDeleted')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_seeDeleted');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setSeeDeleted', event.currentTarget.checked
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_seeDeleted')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_seeDeleted')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_seeDeleted');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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

          // PATCH displayPage
          document.querySelector('#Page_displayPage')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
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

          // PATCH userId
          document.querySelector('#Page_userId')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_userId');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userId')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userId')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_userId');
            const valid = form.reportValidity();
          });

          // PATCH userName
          document.querySelector('#Page_userName')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_userName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userName')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userName')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_userName');
            const valid = form.reportValidity();
          });

          // PATCH userEmail
          document.querySelector('#Page_userEmail')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_userEmail');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserEmail', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userEmail')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userEmail')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_userEmail');
            const valid = form.reportValidity();
          });

          // PATCH userFirstName
          document.querySelector('#Page_userFirstName')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_userFirstName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserFirstName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userFirstName')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userFirstName')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_userFirstName');
            const valid = form.reportValidity();
          });

          // PATCH userLastName
          document.querySelector('#Page_userLastName')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_userLastName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserLastName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userLastName')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userLastName')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_userLastName');
            const valid = form.reportValidity();
          });

          // PATCH userFullName
          document.querySelector('#Page_userFullName')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_userFullName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setUserFullName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userFullName')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userFullName')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_userFullName');
            const valid = form.reportValidity();
          });

          // PATCH displayName
          document.querySelector('#Page_displayName')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_displayName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'userId:' + event.currentTarget.getAttribute('data-userId') }]
                  , 'setDisplayName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_displayName')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_displayName')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_displayName');
            const valid = form.reportValidity();
          });
});
