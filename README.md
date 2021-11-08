### @crispengari/fsmove

This package is build on top of the native `fs` package in node.js. It brings the interface of moving `files` or `folders` from one path to the other.

### Installation

1. yarn

```shell
yarn add @crispengari/fsmove

```

2. npm

```shell
npm install @crispengari/fsmove
```

### Usage

To use this package is very simple. All you need to do is to provide the path for the `source` and the path of the `destination` to the `move` function to move files or folders.

### Examples

1. `es6` typescript example

```ts
import { move } from "@crispengari/fsmove";

const source: string = "/path/source/filename.ext";
const destination: string = "/path/destination/filename.ext";

const moveFile = async () => {
  console.log(await move(source, destination)); // returns true on success
};

moveFile();
```

2. `es6` javascript example

```js
import { move } from "@crispengari/fsmove";

const source = "/path/source/filename.ext";
const destination = "/path/destination/filename.ext";

const moveFile = async () => {
  console.log(await move(source, destination)); // returns true on success
};

moveFile();
```

3. `es5` javascript example.

```js
const { move } = require("@crispengari/fsmove");

const source = "/path/source/filename.ext";
const destination = "/path/destination/filename.ext";

async function moveFile() {
  console.log(await move(source, destination)); // returns true on success
}

moveFile();
```

### Why this simple package?

I created this package, so that i can reuse it whenever i want to deal with moving files and folders around in node.js. I created this package because i wanted to use it on my toy project [fmanager](https://github.com/CrispenGari/fmanager) to move files and folders from one folder to another.
