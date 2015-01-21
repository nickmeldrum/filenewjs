# filenewjs

A repo to use as a starting point for a testable package managed client-side (browser based) JavaScript application.

It uses npm to manage infrastructure dependencies (initially karma, jasmine, phantomjs and bower) and bower to manage client-side dependencies.

Thanks to Pete Bacon Darwin from [angular-seed](https://github.com/angular/angular-seed) for a great starting point. This is basically his seed project without the AngularJs and Protractor stuff in it.

## Installing:

  1. Install nodejs if it isn't already installed: http://nodejs.org/download/
  2. Type "npm install"
  3. ...
  4. PROFIT!
  5. To include client side dependencies use bower e.g.: "bower install bootstrap" (if that doesn't work you either need to npm install bower-cli or just run "node node_modules\bower\bin\bower install bootstrap" instead)

## Running:

  1. Type "npm test" to run the karma tests
  2. Type "npm start" to start the web server
  3. Type "browse" to browse to the home page (".\browse" if you are in powershell)

