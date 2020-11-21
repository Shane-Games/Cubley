<h1 align="center">
	<img src="https://imgur.com/e7CJWAg.png" alt="Cubely" width="200"/>
</h1>

> A Node.js library for colorful logs and log files.

## Installation

Use the [npm](https://www.npmjs.com/get-npm) to install Cubely.

```npm
npm install cubely
```

## Usage

```js
const cubely = require("cubely")
```

```js
cubely.Info('Hello')    //-> [INFO]: Hello
cubely.Debug('Hello')   //-> [DEBUG]: Hello
cubely.Warn('Hello')    //-> [WARN]: Hello
cubely.Error('Hello')   //-> [ERROR]: Hello
```

Custom Logs
```js
cubely.Custom('Custom', 'Hello', cubely.colors.foreground.Cyan) //-> [Custom]: Hello
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
## License
[MIT](https://choosealicense.com/licenses/mit/)