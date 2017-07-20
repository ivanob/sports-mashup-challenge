var program = require('commander');
var controllers = require('./controllers');

program
  .arguments('')
  .option('-k, --keyword <keyword>', 'The word you want to search')
  .action(function() {
    controllers.search(program.keyword)
  })
  .parse(process.argv);
