'use strict';

(() => {
  console.log('loaded');

  /*
    Define the angular app with the hello and helloForm controllers,
    and the PersonService service. A service gives access to a single
    object that is instantiated ("new-ed") when it is injected.
  */

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
  // inject PersonService into the controller
  function HelloController(PersonService) {
    const vm = this;

    /*
      When the controller is instantiated, set the 'name' property
      of the controller to refer to the PersonService object.
      This way, when properties of the PersonService service are
      changed, those changes will be reflected anywhere that the
      name.firstName or name.lastName variables are bound.
    */
    vm.$onInit = function() {
      vm.name = PersonService;
    };
  }

  HelloFormController.$inject = ['PersonService'];
  // inject PersonService into the controller
  function HelloFormController(PersonService) {
    const vm = this;

    vm.$onInit = function() {
      // initialize the first and last name to dummy values, wooo!
      vm.firstName = 'Ric';
      vm.lastName = 'Flair';
    };

    /*
      When the button in helloForm is clicked, it calls updateName().
      This will use the updateName method in the PersonService object
      to set the first and last name in that service. These changes
      will be picked up by any other component that uses PersonService.
    */
    vm.updateName = function() {
      PersonService.updateName(vm.firstName, vm.lastName);
    };
  }

  /*
    This function will be used to create a new object that will be
    accessible by anything that injects the PersonService. It may be
    easier to think about anything in the function to just be an object.
  */
  function PersonService() {
    // first and last name are publicly available on the PersonService object
    this.firstName = 'First';
    this.lastName = 'Last';

    // helper method to update the object's firstName and lastName properties
    this.updateName = function(first, last) {
      console.log(this);
      this.firstName = first;
      this.lastName = last;
    };
  }

})();
