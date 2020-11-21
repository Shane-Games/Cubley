const fs = require("fs");
const stream = fs.createWriteStream("app.log")

module.exports.colors = {
    info: "\x1b[32m",
    debug: "\x1b[35m",
    warn: "\x1b[33m",
    error: "\x1b[31m",

    underscore: "\x1b[4m",
    reset: "\x1b[0m",
    

    custom:{
        foreground:{
            Black: "\x1b[30m",
            Red: "\x1b[31m",
            Green: "\x1b[32m",
            Yellow: "\x1b[33m",
            Blue: "\x1b[34m",
            Magenta: "\x1b[35m",
            Cyan: "\x1b[36m",
            White: "\x1b[37m",
        },
    
        background:{
            Black: "\x1b[40m",
            Red: "\x1b[41m",
            Green: "\x1b[42m",
            Yellow: "\x1b[43m",
            Blue: "\x1b[44m",
            Magenta: "\x1b[45m",
            Cyan: "\x1b[46m",
            White: "\x1b[47m",
        }
    }
}

module.exports.Info = msg => {
    console.log(`${this.colors.info}[INFO]: ${msg} ${this.colors.reset}`)
    stream.write(`[INFO]: ${msg}\r\n`);
}
module.exports.Warn = msg => {
    console.log(`${this.colors.warn}[WARN]: ${msg} ${this.colors.reset}`)
    stream.write(`[WARN]: ${msg}\r\n`);
}
module.exports.Error = msg => {
    console.log(`${this.colors.error}[ERROR]: ${msg} ${this.colors.reset}`)
    stream.write(`[Error]: ${msg}\r\n`);
}
module.exports.Debug = msg => {
    console.log(`${this.colors.debug}[DEBUG]: ${msg} ${this.colors.reset}`)
    stream.write(`[DEBUG]: ${msg}\r\n`);
}

module.exports.Custom = (prefix, msg, color) => {
    console.log(`${color}[${prefix}]: ${msg} ${this.colors.reset}`)
    stream.write(`[${prefix}]: ${msg}\r\n`);
}

module.exports.CloseLog = function() {
    stream.end();
}