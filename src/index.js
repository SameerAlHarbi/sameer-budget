const express = require('express');
const chalk = require('chalk');
const banksRouter = require('./routers/banks.router');

const app = express();
const port = process.env.Port || 9000;




app.listen(port, () => {
    console.log(chalk.greenBright.inverse(`SERVER IS UP AND RUNNING ON PORT ${port}`));
});
