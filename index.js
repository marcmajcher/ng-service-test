'use strict';

(() => {
  console.log('loaded');

  angular.module("app", [])
    .component('hello', {
      controller: HelloController,
      templateUrl: '/tmpl/hello.html'
    })
    .component('helloForm', {
      controller: HelloFormController,
      templateUrl: '/tmpl/helloForm.html'
    })
    .service('PersonService', PersonService);

  HelloController.$inject = ['PersonService'];

  function HelloController(PersonService) {
    const vm = this;

    vm.$onInit = function() {
      vm.name = PersonService;
    };
  }

  HelloFormController.$inject = ['PersonService'];

  function HelloFormController(PersonService) {
    const vm = this;

    vm.firstName = 'durr';
    vm.lastName = 'butt';

    vm.$onInit = function() {};

    vm.updateName = function() {
      PersonService.updateName(vm.firstName, vm.lastName);
    };
  }

  function PersonService() {
    this.firstName = 'First';
    this.lastName = 'Last';

    this.updateName = function(first, last) {
      console.log(this);
      this.firstName = first;
      this.lastName = last;
    };
  }

})();
