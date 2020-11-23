#### Day 01

* Web server
* File throwing software
* Apache, IIS, Ngnix, 
* http is a stateless or connectionless protocol
* the client and the server are not perennially connected


* Web server serves files 
* files can be html, javascript, css, images, text, pdf, excel


* HTML page
* UI
 
##### To Do

* Create a folder say Web_Training in your file system
* Bring up the folder in __VS code__

## HTML

* Markup language
* write and say what to do, you don't have to write and say how to do
* It is made up of tags
* You have __start__ and __end__ tags
* opening and closing tags
* An opening and a closing tag is known as __Element__
* <tag></tag>
* <tag/>
* HTML is very relaxed in syntax

### Structure of HTML 

* DOCTYPE is used to specify version
* __html__ element
* html has two sections __head__ and __body__
* head contains non-visual items like files to be included, meta tags
* body contains the visual items

#### body

* __input__ and __output__ elements
* input elements are usually referred to as __form__ elements
* p, h1 ... h6 are output elements
* attributes are __name="value"__ pairs
* Every html element has many attributes
* Grouping elements
* __table, div, section, li, span__



#### UX/UI

* UX is a User Xperience
* UX designer understands the bigger picture of the page
* She needs to know about the end users, what they would be looking for; 
* Have an eye for the details
* Colors, fonts
* Comes up with a mockup design


* UI Designer
* Translates the mockup designs from UX designer and creates a static HTML/CSS page

* UI Developer
* Takes the code from UI designer and makes it dynamic

### Styling

* (CSS) Cascading style sheets
* External, Internal, Inline
* In projects/products __external stylesheets__ is the most preferred as it can be reused, and made changes easily
* General syntax of CSS is __property: value;__
* color, height, width, font-style, border, position

``` css
accessor {
	property: value;
	property: value;
	property: value;
}
```

* accessors can name of the elements
* Accessed by ids ___#id___
* Accessed by classes __.class__

#### Day 02

* JS is a full blown OO programming language
* JS is used in UI
* Client-side scripting language
* Used for form-validations
* Javascript can be used for backend also

##### Node JS

* javascript engine or interpreter that is installed in your machine
* Has server-side API
* Run using __node filename.js__

#### JavaScript

* JS is an __interpreted__ language
* JS is case-sensitive
* JS is a dynamically typed language
* ECMAScript is the standard for all scripting language
* Scripting languages like JScript, ActionScript, LiveScript, JavaScript
* ES6 was a major revision with significant improvements and changes
* ES6 introduced all the OO concepts for scripting languages

<br/>

* Function hoisting
* Interpreter runs all function definitions first, then it starts execution from the top
* You can define a function anywhere in your file, and call it from anywhere. The order is immaterial


### React JS

* Library from FB
* It's a collection of js files that you include in your page and build
* These files give you built in classes, properties, methods that you can use in the JS code
* React gives you a Virtual DOM 
* Virtual DOM is like an assistant. It gathers all the modifications you want to perform on the Real DOM tree and then reaches out at optimal times
* React gives you component style of building UI


#### JSX

* Extended JavaScript or JavaScript Xtensions
* Not core JS syntax
* Used in React for designing UI
* All React Components override render() method
* render() method returns JSX
* JSX has a strict syntax similar to XML
* THere should be one root element
* Every start tag should have a corresponding end tag


### Create a react application

* __npm i -g create-react-app__
* __create-react-app my-first-react__
* Navigate to __my-first-react__ folder and run __npm start__


#### Some more concepts in React

* Basic concepts -> JSX, State and props
* A single page application is designed using components
* Each component is a self sufficient independently running entity
* Each component has a separate life cycle
* Class based components
* Function based components
* React hooks
* React Router
* Controller components
* talk to servers

### Typescript

* static typed language
* .ts files
* it gets compiled(or transpiled) to JavaScript
* __sudo npm i -g typescript__
* __tsc -version__
* __tsc filename.ts__
* __tsc --init__ to create a typescript project
* For automatic compilation run __tsc --watch__

* __variableName: type__


* tsc filename.js	by default older version of Javascript is taken; ignores tsConfig.json
* Just type __tsc__ if you have tsconfig.json

### Angular

* Component-based UI library/framework
* No virtual DOM like React
* Working with Angular is fairly straightforward
* Angular JS and Angular are very very different
* Version 1 was called Angular JS
* Version 2 and above are known as __Angular__
* Latest 11
* __sudo npm i -g @angular/cli__
* __ng version__
* __ng new friday-app__
* Navigate to friday-app
* __ng serve__ or __ng s__

* made of __modules__
* each module is made of several components

[XYZ module]
	xyz.module.ts -> configure all the components
	[ABC]
		abc.component.html
		abc.component.ts
		abc.component.scss
		abc.component.spec.ts
	[DEF]	
		def.component.html
		def.component.ts
		def.component.scss
		def.component.spec.ts

* __{{variable}}__ binding syntax
* __(eventName)="eventHandlerMethod()"__ handler binding syntax
* __[propertyName]="variable"__ property binding syntax


### Directives

* Built-in feature in ng
* used as attributes in HTML elements
* ngModel, ngClass, ngIg, ngFor


### Generate a component

* __sudo ng g c lab01__
 
#### What all can you do in Angular?

* Generate modules __sudo ng g m modulename__
* A module is made up of components, services, directives, other decorators
* Dependency injection -> A way by which the objects that your classes are dependent upon, will be created and supplied to you
* Router -> Similar to Angular
* spec.ts -> create test cases for angular components and services
* Every component has a life cycle with callbacks like React








































