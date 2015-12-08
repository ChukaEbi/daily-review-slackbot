var SlackBot = require('slackbots');
var CronJob = require('cron').CronJob;

var bot = new SlackBot({
    token: process.env.SLACKBOT_TOKEN,
    name: 'daily-review-bot'
  });


    bot.on('start', function() {
    bot.getUsers().always(function(data){
      var users;
      users = data._value.members;
      users.forEach(function(person){
        console.log(person.name);
        bot.postMessageToUser(person.name, "We are awesome").always(function(data){
          console.log(data);
        });
      });
    });
  });

