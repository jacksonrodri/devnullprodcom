In this guide we will explore how to create a new [VueJS](https://vuejs.org/) plugin from scratch. While creating a new standalone vuejs project is fairly straightforward (1. [install](https://vuejs.org/v2/guide/installation.html) vuejs 2. vue create &lt;project_name&gt; 3. yarn serve), creating a reusable plugin that is able to be incorporated into any VueJS project in a generic way is a more complicated process. Furthermore due to the novelty of the entire nodejs and vuejs ecosystem, there is a plethora of documentation specific to different steps of the process scattered across the web. This guide aims to provide a unified tutorial on how to create a plugin from scratch.

**Note**: We will be taking the most straightforward process to accomplish this, while there may be shortcuts, utilities to assist with different stages, and some steps may change over time, this guide should provide a concise resource of how to create and use a VueJS plugin.

## Terminology:

Before we begin, here are some terms that developers will need to know:

- **JavaScript**: eg JS, the programming language which we will be developing in
- **vuejs**: A popular JS framework for creating web-based user interfaces
- **npm**: The *node package manager*, a framework and set of utilities used to package and upload/download reusable bundles of javascript code (known as 'packages')
- **yarn**: Another package manager for javascript with a builtin command specification and execution system. Uses the npm package registry on the backend (thus all packages uploaded to the npm repository are available to yarn for installation &amp; inclusion)

## Additional Terms:

Some additional terms which are good to know though not techincally needed:

- **nodejs**: the JS runtime environment that executes JS code on the local machine
- **ECMAScript**: eg ES, a standardization of syntax for languages such as Javascript. Comes in two primary variants ES5 and ES6. ES6 is an improvement on ES5 but is incompatible and most major browsers do not support it. ES6 has been superseded by more recent versions but those are compatible with ES6.
- **babel**: A transpiler (source-to-source compiler) that converts newer version of ES (ES6+) to ES5 for browser compatability.
- **webpack**: The underlying bundler which determines dependencies amongst your JS components and assembles them together into a single/isolated/importable module.
- **rollup**: Another JS module bundler with a similar feature set to webpack but different implementation &amp; tradeoffs
- **commonjs**: and **AMD**: Older JS encapsulation systems used before modules were standardized in ES6. Developers no longer need to concern themselves with these technologies.

## Project Layout:

To begin, create a new directory for the plugin you would like to create. As a standard, it is good practice to prefix vuejs plugins with the **vue-** moniker. So if we wanted to create a 'nyan-cat' plugin, we would start byrunning:

```
$ mkdir vue-nyan-cat
```

Inside this directory, create some subdirs which will be used to encapsulate standard vuejs constructs and build artifcats:

```
$ cd vue-nyan-cat
$ mkdir dist examples src src/assets
```

## package.json:

Create a **package.json** file, which yarn will you will use to specify dependencies and commands for yarn to execute:

```
{
  "name": "vue-nyan-cat",
  "version": "0.0.2",
  "description": "Renders the Nyan Cat in a VueJS based interface",
  "keywords": [
    "vuejs",
    "plugin",
    "nyan cat"
  ],
  "main": "dist/vue-nyan-cat.common.js",
  "license": "MIT",
  "author": "Mo Morsi <devnullproductions@gmail.com>",
  "repository": "github:DevNullProd/vue-nyan-cat",
  "scripts": {
    "serve": "vue-cli-service serve examples/main.js",
    "build": "vue-cli-service build --target lib src/nyan-cat.vue"
  },
  "dependencies": {},
  "devDependencies": {
    "@vue/cli-service": "^4.1.1",
    "vue": "^2.6.11",
    "vue-template-compiler": "^2.6.11"
  }
}
```

## package.json explained:

Lets explore each of these sections one at a time.

To start we specify package metadata. This includes:

- **name**: The unique name of your plugin</li>
- **version**: The current [version](https://docs.npmjs.com/about-semantic-versioning) of your plugin, make sure to increase appropriately this on every release</li>
- **description**: A human-friendly textual description of your plugin</li>
- **keywords**: Phrases to associate with your plugin to make it easy to lookup when uploaded to the npm package repository (more on this later)</li>
- **main**: The module output by the build system which will be loaded when a developer imports your plugin into their project. Note this module just constitutes the javascript code which is included in your plugin, the developer using it may also have to include the stylesheets (more on this later)</li>
- **license**: The [legal license](https://spdx.org/licenses/) which you are releasing your plugin under</li>
- **author**: The developer/company which you are referencing as the author of the plugin</li>
- **repository**: The location where the plugin source code can be found</li>

```
{
  "name": "vue-nyan-cat",
  "version": "0.0.2",
  "description": "Renders the Nyan Cat in a VueJS based interface",
  "keywords": [
    "vuejs",
    "plugin",
    "nyan cat"
  ],
  "main": "dist/vue-nyan-cat.common.js",
  "license": "MIT",
  "author": "Mo Morsi <devnullproductions@gmail.com>",
  "repository": "github:DevNullProd/vue-nyan-cat",
```

Next we define scripts, or command that will be accessible via invocation with yarn, eg. *yarn run example* which can be abbreviated to *yarn example*.

Here we define two commands:

- **serve** which provides access to the plugin example it via a built-in webserver. Using this you can view the plugin locally by opening a web-brower and pointing it at the provided url (more on this below)</li>
- **build** which builds our package into a format which you can upload to the *npm repository* for subsequent download (by yourself and others, more below)</li>

```
  "scripts": {
    "serve": "vue-cli-service serve examples/main.js",
    "build": "vue-cli-service build --target lib src/nyan-cat.vue"
  },
```

As you can see above, configuration options are specified for both the poi and bili commands, which may be tweaked if desired

Finally we specify *dependencies* and *devDependencies* which our component requires to perform properly. Dependencies are need to execute your plugin in production and are pulled in when it is downloaded/installed from npm. devDependencies are only used during the development phase, in our case the VueJS dependencies we need to run the project commands.

```
  "dependencies": {},
  "devDependencies": {
    "@vue/cli-service": "^4.1.1",
    "vue": "^2.6.11",
    "vue-template-compiler": "^2.6.11"
  }
}
```

## Plugin Implementation:

  Now lets get to actually building the plugin! We won't go into too much detail as to how VueJS works here, there are plenty of docs on how to develop VueJS functionality on the web (including the excellent [developer documentation](https://vuejs.org/v2/guide/), but we will discuss a few critical components:

- **src/nyan-cat.vue** - the main module which will define the top level component constituting our plugin</li>
- **src/index.js** - defines the *install* target which will be executed when our plugin is loaded into a VueJS project</li>
- **examples/index.js** - the main entry point for the *example* target, recall this was referenced in the *poi* script in package.json</li>

### src/nyan-cat.vue

The main implementation of our plugin... do your magic here!

```
<template>
  <div id="nyan-cat">
    <img src="https://raw.githubusercontent.com/DevNullProd/vue-nyan-cat/master/src/assets/nyan-cat.gif" />
  </div>
</template>

<script>
export default {
  name: 'NyanCat'
}
</script>

<style scoped>
#nyan-cat{
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
```

Because we are referencing a static image (nyan-cat.gif) it must be downloaded and placed in the src/assets directory. You may get it from here:

![nyan cat](@/assets/posts/vuejs-plugin-guide/nyan-cat.gif)

### src/index.js

Recall this defines **install** which will be executed when we import &amp; use our plugin in a larger VueJS project.

```
import NyanCat from './nyan-cat.vue'

export default {
  install : function(vue, opts){
    vue.component('NyanCat', NyanCat)
  }
}
```

### examples/index.js

This replicates the 'main' module of a larger VueJS project and will be used for demonstation / test purposes

```
import Vue from 'vue'
import App from './App.vue';

import NyanCat from '../src/index.js'

Vue.use(NyanCat)

new Vue({
  el: '#app',
  render(h){ return h(App) }
})
```

### examples/App.vue

The top level component in our example project where we actually use our plugin in the UI

```
<template>
  <NyanCat />
</template>

<script>
export default{
}
</script>
```

### examples/index.html

Defines the static web page in which the top level component in our example project will be mounted

```
<!DOCTYPE html>
<html>
<body>
  <div id="app"></div>
</body>
</html>
``` 

## Test it!

And that's it! To test our plugin by running the example, do the following:

### Install dependencies

```
$ yarn install
```

### Build and run the example
```
$ yarn serve
```

Finally open a web browser and point it a [http://localhost:4000/vue-nyan-cat/](http://localhost:4000/vue-nyan-cat/) to see your plugin!

![vuejs plugin nyancat](@/assets/posts/vuejs-plugin-guide/vuejs-plugin-nyancat.png)

## Round out your plugin

In general it is good practice to include a README.md file, explaining how to install, import, and use your plugin, and a LICENSE file containing the full text of the license which you are releasing your package under (the same one as that referenced in package.json above).

## Build it!

```
$ yarn build
```

This will place your plugin output in the *dist* directory. Now you are ready to ship it!

## Ship it!

In order for others to access your plugin you will have to upload it to NPM. First [sign up for a new account](https://docs.npmjs.com/creating-a-new-npm-user-account). Once you have done so, login via the following command:

```
$ npm login
```

Enter the credentials you supplied when creating your account. Finally upload it with:

```
$ npm publish
```

The package will now be on NPM! You may view it at: [https://www.npmjs.com/package/vue-nyan-cat](https://www.npmjs.com/package/vue-nyan-cat).

## Use it!

To use our new plugin in a larger VueJS project, first cd to the project dir and install it with yarn:

```
$ yarn add vue-nyan-cat
```

Finally import the plugin into your component and use:

```
<template>
  <div id="app">
    <NyanCat />
  </div>
</template>

<script>
import NyanCat from 'vue-nyan-cat'
import 'vue-nyan-cat/dist/vue-nyan-cat.css'

export default {
  name: 'app',
  components: {
    NyanCat
  }
}
</script>
```

## Fin

You can see the complete example above on [github](https://github.com/DevNullProd/vue-nyan-cat) along with other examples of Vue components under the [DevNullProd](https://github.com/DevNullProd) organization.
