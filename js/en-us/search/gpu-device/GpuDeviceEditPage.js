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
                patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
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
                patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
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

          // PATCH clusterName
          document.querySelector('#Page_clusterName')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setClusterName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_clusterName')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_clusterName')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.reportValidity();
          });

          // PATCH nodeName
          document.querySelector('#Page_nodeName')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_nodeName');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setNodeName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_nodeName')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_nodeName')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_nodeName');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#Page_description')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH gpuDeviceNumber
          document.querySelector('#Page_gpuDeviceNumber')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_gpuDeviceNumber');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setGpuDeviceNumber', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_gpuDeviceNumber')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_gpuDeviceNumber')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_gpuDeviceNumber');
            const valid = form.reportValidity();
          });

          // PATCH id
          document.querySelector('#Page_id')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_id')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_id')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH gpuDeviceUtilization
          document.querySelector('#Page_gpuDeviceUtilization')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_gpuDeviceUtilization');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setGpuDeviceUtilization', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_gpuDeviceUtilization')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_gpuDeviceUtilization')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_gpuDeviceUtilization');
            const valid = form.reportValidity();
          });

          // PATCH ngsildTenant
          document.querySelector('#Page_ngsildTenant')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setNgsildTenant', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.reportValidity();
          });

          // PATCH ngsildPath
          document.querySelector('#Page_ngsildPath')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setNgsildPath', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.reportValidity();
          });

          // PATCH ngsildContext
          document.querySelector('#Page_ngsildContext')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setNgsildContext', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.reportValidity();
          });

          // PATCH ngsildData
          document.querySelector('#Page_ngsildData')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setNgsildData', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#Page_location')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_location')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_location')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
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
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
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
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
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
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
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

          // PATCH gpuDeviceId
          document.querySelector('#Page_gpuDeviceId')?.addEventListener('wa-change', (event) => {
            const form = document.querySelector('#PageForm_gpuDeviceId');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceId:' + event.currentTarget.getAttribute('data-gpuDeviceId') }]
                  , 'setGpuDeviceId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_gpuDeviceId')?.addEventListener('wa-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_gpuDeviceId')?.addEventListener('wa-blur', (event) => {
            const form = document.querySelector('#PageForm_gpuDeviceId');
            const valid = form.reportValidity();
          });
});
