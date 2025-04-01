Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Page_created')?.addEventListener('change', (event) => {
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
                patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('blur', (event) => {
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
                patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH clusterName
          document.querySelector('#Page_clusterName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setClusterName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_clusterName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_clusterName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.reportValidity();
          });

          // PATCH nodeName
          document.querySelector('#Page_nodeName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_nodeName');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNodeName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_nodeName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_nodeName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_nodeName');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH nodeId
          document.querySelector('#Page_nodeId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_nodeId');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNodeId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_nodeId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_nodeId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_nodeId');
            const valid = form.reportValidity();
          });

          // PATCH id
          document.querySelector('#Page_id')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_id')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_id')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH gpuDevicesTotal
          document.querySelector('#Page_gpuDevicesTotal')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_gpuDevicesTotal');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setGpuDevicesTotal', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_gpuDevicesTotal')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_gpuDevicesTotal')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_gpuDevicesTotal');
            const valid = form.reportValidity();
          });

          // PATCH ngsildTenant
          document.querySelector('#Page_ngsildTenant')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNgsildTenant', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.reportValidity();
          });

          // PATCH ngsildPath
          document.querySelector('#Page_ngsildPath')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNgsildPath', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.reportValidity();
          });

          // PATCH ngsildContext
          document.querySelector('#Page_ngsildContext')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNgsildContext', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.reportValidity();
          });

          // PATCH ngsildData
          document.querySelector('#Page_ngsildData')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNgsildData', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#Page_location')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_location')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_location')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setTitle', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_title')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_title')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchAiNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });
});
