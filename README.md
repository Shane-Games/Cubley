<h1 align="center">
	<img src="https://i.imgur.com/17Ii15e.png" alt="drawing" width="200"/>
</h1>

> A Node.js library for colorful logs and log files.

## Installation

Use the [npm](https://www.npmjs.com/get-npm) to install Cubley.

```npm
npm install cubley
```

## Usage

```js
const cubley = require("cubely")
```

```js
cubley.Info('Hello')    //-> [INFO]: Hello
cubley.Debug('Hello')   //-> [DEBUG]: Hello
cubley.Warn('Hello')    //-> [WARN]: Hello
cubley.Error('Hello')   //-> [ERROR]: Hello
```

Custom Logs
```js
cubley.Custom('Custom', 'Hello', cubley.colors.foreground.Cyan) //-> [Custom]: Hello
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
## License
[MIT](https://choosealicense.com/licenses/mit/)