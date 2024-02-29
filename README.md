
Nuxt.js Demo Project
====================

This is a demo project to showcase various Nuxt.js features and capabilities.

Features
--------

-   Nuxt.js v2
-   [@nuxtjs/axios](https://github.com/nuxt-community/axios-module) - Making HTTP requests
-   [@nuxtjs/auth-next](https://auth.nuxtjs.org/) - Authentication module
-   Custom layouts
-   Custom serverMiddleware
-   Custom plugin
-   Dynamic `titleTemplate`
-   Reusable components
-   Route middleware

Layouts
-------

There are 2 layouts:

-   default - The main layout used on most pages
-   custom - A custom simple layout for the `/custom` route

Server Middleware
-----------------

The `/server-middleware` route displays the current time from a simple [serverMiddleware](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware).

Plugins
-------

The `/plugins` route displays a message from the custom `plugins/myPlugin.js` plugin.

Components
----------

Reusable components:

-   `<BaseButton>` - A button with default styles
-   `<BaseIcon>` - An icon wrapper with default styles

These components are registered globally and used across pages.

Middleware
----------

Route middleware exists on `/middleware` to check auth state before allowing access.

Authentication
--------------

Uses [@nuxtjs/auth-next](https://auth.nuxtjs.org/) module for authentication.

Displays username when logged in on `/auth` route.

Build Setup
-----------
install dependencies
```bash
  $ npm  install
```
server with hot reload at localhost:3000  
```bash
  $ npm run dev
```
build for production and launch server  
```bash
  $ npm run build 
  $ npm run start
```

generate static project
```bash
  $ $ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org/).
