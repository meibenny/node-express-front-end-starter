var shell = require('shelljs');

shell.rm('-rf', 'dist/public/');
shell.mkdir('dist/public');
shell.cp('-R', 'src/public/js', 'dist/public/js');
// shell.cp('-R', 'src/public/fonts', 'dist/public/');
// shell.cp('-R', 'src/public/images', 'dist/public/');
