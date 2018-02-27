# Blend

 In the spirit of ‘letting food be our medicine', the Blend app, provides users with healthy smoothie recipes that target different ailments and health concerns. Users will be able to view recipes by category/concern, save their favorite recipes, and submit their own smoothie creations. 


## Getting Started

The below instructions will get this app running on your local machine.

### Prerequisites

There are a few prerequisites for getting this running, which will be installed when you run npm install. Version details are below.

```
"bootstrap": "^3.3.7",
"grunt": "^0.4.5",
"grunt-contrib-jshint": "^0.11.2",
"grunt-contrib-nodeunit": "~0.4.1",
"grunt-contrib-sass": "^0.9.2",
"grunt-contrib-uglify": "~0.5.0",
"grunt-contrib-watch": "^0.6.1",
"grunt-contrib-connect": "^1.0.2",
"jquery": "^3.2.1",
"jshint": "^2.9.1",
"jshint-stylish": "^2.1.0",
"matchdep": "^0.3.0",
"angular": "^1.6.4",
"angular-route": "^1.6.4"
```



### Installing

Enter the "lib" directory in the terminal and run:

```
npm install
```

After everything is installed, run grunt inside your lib folder:

```
grunt
```

Then open a new terminal tab and run:
```
hs -o
```

This app also needs the [Smoothie Api](https://github.com/LaKeshiaJohnson/smoothie-api) to run. Please visit the Smoothie API repo in order to get the API running on your machine.

## Built With
* [AngularJS](https://angularjs.org/) - Javascript framework.
* [Boostrap 4](https://getboostrap.com) - Open source toolkit for developing with HTML, CSS, and JS.
* [Ruby on Rails (API)](http://rubyonrails.org/) - Web framework used to build the API for the app
* [SQLite3](https://www.sqlite.org/) - Database engine
* [JS Hint](https://jshint.com) - A tool that helps to detect errors and potential problems in your JavaScript code.
* [Grunt](https://gruntjs.com) - Javascript task runner.
