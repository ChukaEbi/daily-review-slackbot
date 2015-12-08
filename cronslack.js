var SlackBot = require('slackbots');
var CronJob = require('cron').CronJob;

var bot = new SlackBot({
    token: process.env.SLACKBOT_TOKEN,
    name: 'daily-review-bot'
});

var users;
bot.getUsers().then(function(data) {
  var job = new CronJob(' */20 * * * * *', function() {
    users.forEach(function(person){
      bot.postMessageToUser(person.name, "We are awesome").always(function(data){
      });
    });
    },
    null,
    true,
    'Europe/London'
  );
  job.start();
}).fail(console.log.bind(console));


