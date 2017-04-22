const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const cwd = process.cwd();

function pathResolve() {
  let args = [].slice.call(arguments, 0);
  args.unshift(process.cwd());
  return path.join.apply(path, args);
}

const root = path.join(__dirname, '../../');
const filename = '.eslintrc.yaml';
const eslintPath = path.join(root, filename);

if (!fs.existsSync(eslintPath)) {
  let source = path.join(__dirname, 'templates', filename);
  console.log(source);
  console.log(eslintPath);
  fs.createReadStream(source).pipe(fs.createWriteStream(eslintPath));
  console.log(chalk.green('gg-linter finished!'));
} else {
  console.log(chalk.bold.red('.eslint.yaml has existed!'));
}
