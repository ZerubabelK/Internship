# Description
This project contains the three tasks given on 08/03/2023. It has a profile page containing the profile components of a user, a counter application for learning hooks, and a contact page implementation for learning react router. 

## Profile page
The profile page is a simple profile component with an inspiration from https://dribbble.com/shots/17219796-My-details-settings-page-Untitled-UI

## Hooks page
This page contains a simple counter app that uses useState for managing react data, useEffect for managing page title change when counter changes, and useRef for manipulating the decrement button.

## Contact page
This page contains a contact list and users can add, edit and delete contacts

# How to Setup

1. clone the repositary
2. run "cd profile"
3. run "npm install"
4. run "npm run dev" 


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
