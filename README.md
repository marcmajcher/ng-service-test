# ng-service-test

This is a example of how you can use Services in angularJS to communicate
between components, without using component binding or other janky methods.

Basically, a Service is a singleton object that can be used by other components
via dependency injection. A singleton is a single object that is instantiated
in your angular application (or module); only one instance of each Service can
exist at a time, and every component that uses that Service references the same
instance.

Since multiple components can use the same Service, when you update the data in
a Service from one component, it will be reflected in the same Service object
referenced in any other component that uses it. This way, you can, for example,
bind properties of the Service to the view in one component, and update that
by using another component that binds those same Service's properties to a
form field or other input.
