<h1 align="center">
	<img src="https://imgur.com/e7CJWAg.png" alt="Cubely" width="200"/>
</h1>

> <span style="color:#3D80D4">A Node.js library for colorful logs and log files.
</span>.


<img src="https://img.shields.io/bundlephobia/min/cubely" alt="Size"/>
<img src="https://img.shields.io/npm/l/cubely" alt="MIT"/>
<img src="https://img.shields.io/npm/v/cubely" ald="Version">

## Installation

Use the [npm](https://www.npmjs.com/get-npm) to install Cubely.

```npm
npm install cubely
```
Or use [yarn](https://classic.yarnpkg.com/en/docs/install/).
```yarn
yarn add cubely
```

## Usage

```js
const cubely = require("cubely")
```

```js
cubely.info('Hello')    //-> [INFO]: Hello
cubely.debug('Hello')   //-> [DEBUG]: Hello
cubely.warn('Hello')    //-> [WARN]: Hello
cubely.error('Hello')   //-> [ERROR]: Hello
```

Custom Logs
```js
cubely.custom('Custom', 'Hello', cubely.colors.foreground.Cyan) //-> [Custom]: Hello
```

Close the log file
```js
cubely.close() //-> Closes the log
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
## License
[MIT](https://choosealicense.com/licenses/mit/)