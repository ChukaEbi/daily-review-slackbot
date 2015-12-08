var CronJob = require('cron').CronJob;

var job = new CronJob(' */5 * * * * *', function() {
  console.log('Hi there');
},
  null,
  true,
  'Europe/London'
);

job.start();

