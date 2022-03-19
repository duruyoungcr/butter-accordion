# Butter-Collapsible

<div align="center">
  <br />
  <br />
  <img src="https://res.cloudinary.com/kadet/image/upload/v1642358094/insect/logo_dbzodw.svg" width="200" height="auto" alt="butter-collapsible logo" align="center" />
  <br />
  <br />
  <h3 align="center">🛠 A simple and lightweight React collasible package.</h3>

  <p align="center">
  <a href="https://npm.im/butter-collapsible"><img src="https://img.shields.io/npm/v/butter-collapsible.svg?color=brightgreen&style=flat-square" alt="Package version."></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PR(s)-welcome-brightgreen.svg?style=flat-square" alt="Make a pull request."></a>
  </p>
</div>

<br />

## ⚡️ Features

- Easy to use
- Lightweight (~4kb Gzip)
- Fully responsive.
- Highly customizable.
- No 3rd party dependencies.
- Typescript

<br />
<br />

## 💾 Installation

```
$ npm i butter-collapsible
```

```
$ yarn add butter-collapsible
```

<br />
<br />

## 📄 Basic Usage

```jsx
// Import statement
import { Collapsible } from "butter-collapsible";

// Here's an example of how to use it
export const MyComponent = () => {
  return (
    <>
      <Collasible
        trigger="Click me to see more"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus officia voluptate totam minima cum? Laboriosam, recusandae veritatis dolore saepe quibusdam nesciunt esse delectus aut consequuntur ex aliquid, enim cupiditate commodi!"
        roundedSize={"lg"}
      />
    </>
  );
};
```

<br />
<br />

## 🪄 Props

Here's a table of all available props for the Collapsible.

<br />
<br />

### 🧩 General props

| Prop        | Description                                                  | Type                      | default |
| ----------- | ------------------------------------------------------------ | ------------------------- | ------- |
| trigger\*   | The part of the collapsible that you click to expand.        | _`string \| JSX.Element`_ |         |
| content\*   | The part shown after the collapsible is expanded.            | _`string \| JSX.Element`_ |         |
| rounded     | Determines whether the collapsible wrapper would be rounded. | _`boolean`_               | true    |
| roundedSize | Sets the size of the collapsible wrapper's rounded corners.  | _`sm \| md \| lg \| xl`_  | _`md`_  |
| triggerIcon | Icon at the left of collapsible trigger                      | _`string \| JSX.Element`_ | +       |
| color       | Applied as collapsible wrapper border color                  | _`string`_                | #333333 |
| borderWidth | Applied as collapsible wrapper border width                  | _`number`_                | 2       |
| paddingSize | Applied as collapsible wrapper padding size                  | _`sm \| md \| lg \| xl`_  | _`md`_  |

<br />
<br />

## 👷🏽 Contribution Guide

Butter-Collapsible is an opensource project and public contribution is always welcomed. You can check [Issues](https://github.com/duruyoungcr/butter-collapsible/issues) for bugs to fix or features to add.

1. Fork this repository.
2. Clone the forked repository to your local machine.
3. Create a new branch with a name like this - feature/name-of-feature.
4. Run `npm` to install dependencies.
5. Write code and then commit changes.
6. Run `npm run build` to compile a build into the dist folder.
7. Now You can decide to manually copy the index.tsx and index.scss file from here into a local project in order to test the feature/bug you have fixed.
8. Alternatively, run `npm link` in your local butter-collapsible root folder.
9. On the local project you want to test the features on, run `npm link 'butter-collapsible'`.
10. Now navigate back to the terminal on your local butter-collapsible folder and then run `npm link ../path-to-test-project/node_modules/react`. This will make butter-collapsible use the copy of react from your local test project. Now you can test your changes.
11. After all is done, push to your forked repository and then send a pull request.

<br />
<br />

## ⚖️ Licence

MIT (c) [Raymond Duru-young](https://dycr.dev).
