/* global angular */
(function() {
  
  'use strict';

  var app = angular.module('formlyExample', [
    'formly', 'formlyBootstrap', 'ngAnimate', 'ngMessages'
  ]);
  
  app.run(function(formlyConfig, formlyValidationMessages, formlyApiCheck) {
    formlyConfig.setWrapper({
      name: 'validation',
      types: ['input', 'customInput'],
      templateUrl: 'my-messages.html'
    });
    
    formlyValidationMessages.addStringMessage('required', 'This field is required');
    
    formlyConfig.setType({
      name: 'customInput',
      extends: 'input',
      apiCheck: {
        templateOptions: formlyApiCheck.shape({
          foo: formlyApiCheck.string.optional
        })
      }
    });
  });
  

  app.controller('MainCtrl', function MainCtrl(formlyVersion) {
    var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;

    // variable assignment
    vm.author = { // optionally fill in your info below :-)
      name: 'Kent C. Dodds',
      url: 'https://twitter.com/kentcdodds' // a link to your twitter/github/blog/whatever
    };
    vm.exampleTitle = 'Codementor'; // add this
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };

    vm.model = {};
    vm.options = {};
    
    vm.fields = [
      {
        key: 'firstName',
        type: 'customInput',
        templateOptions: {
          required: true,
          label: 'First Name',
          foo: 'hi'
        }
      },
      {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          label: 'Last Name'
        },
        expressionProperties: {
          'templateOptions.disabled': '!model.firstName'
        }
      },
      {
        key: 'knowIpAddress',
        type: 'checkbox',
        templateOptions: {
          label: 'I know what an IP address is...'
        }
      },
      {
        key: 'ipAddress',
        type: 'input',
        templateOptions: {
          label: 'IP Address',
          placeholder: '127.0.0.1'
        },
        expressionProperties: {
          hide: '!model.knowIpAddress'
        },
        validators: {
          ipAddress: {
            expression: function(viewValue, modelValue) {
              var value = modelValue || viewValue;
              return !value || /(\d{1,3}\.){3}\d{1,3}/.test(value);
            },
            message: '$viewValue + " is not a valid IP Address"'
          }
        }
      }
    ];
    
    vm.originalFields = angular.copy(vm.fields);

    // function definition
    function onSubmit() {
      vm.options.updateInitialValue();
      alert(JSON.stringify(vm.model), null, 2);
    }
  });

})();