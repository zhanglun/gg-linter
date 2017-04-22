const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');

const spinner = ora('generating\n').start();
const root = path.join(__dirname, '../../');
const filename = '.eslintrc.yaml';
const eslintPath = path.join(root, filename);


if (!fs.existsSync(eslintPath)) {
  let source = path.join(__dirname, 'templates', filename);
  fs.createReadStream(source).pipe(fs.createWriteStream(eslintPath));
  spinner.stopAndPersist({
  	symbol: '😊',
  	text: chalk.green(' gg-linter finished!')
  });
} else {
  spinner.stopAndPersist({
  	symbol: '😞',
  	text: chalk.bold.red(' .eslint.yaml has existed!\n')
  });
}
