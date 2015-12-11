var SlackBot = require('slackbots');
var CronJob = require('cron').CronJob;

var bot = new SlackBot({
    token: process.env.SLACKBOT_TOKEN,
    name: 'shefbot'
});


var users;
var job;

function postNotification(person){
  bot.postMessageToUser(person.name, "Please log in and fill out the brief form:\nhttps://shining-fire-9962.firebaseapp.com/");
}

function sendReminder(channel){
  users = channel.members;
  job = new CronJob('*/10 * * * * *', function(){
    users.forEach(postNotification);
  },
  null,
  true,
  'Europe/London'
  );
}



bot.getUsers().then(sendReminder)
.fail(console.log.bind(console));


