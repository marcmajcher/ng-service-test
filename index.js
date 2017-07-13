'use strict';

(() => {
  console.log('loaded');

  angular.module("app", [])
    .component('hello', {
      controller: helloController,
      templateUrl: '/tmpl/hello.html'
    })
    .component('helloForm', {
      controller: helloFormController,
      templateUrl: '/tmpl/helloForm.html'
    })
    .service('PersonService', personService);

  helloController.$inject = ['PersonService'];

  function helloController(PersonService) {
    const vm = this;

    vm.$onInit = function() {
      vm.name = PersonService;
    };
  }

  helloFormController.$inject = ['PersonService'];

  function helloFormController(PersonService) {
    const vm = this;

    vm.firstName = 'durr';
    vm.lastName = 'butt';

    vm.$onInit = function() {};

    vm.updateName = function() {
      PersonService.updateName(vm.firstName, vm.lastName);
    }
  }

  function personService() {
    this.firstName = 'First';
    this.lastName = 'Last';

    this.updateName = function(first, last) {
      console.log(this);
      this.firstName = first;
      this.lastName = last;
    }
  }

})();
