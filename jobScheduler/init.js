const schedule = require("node-schedule");

const rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.tz = "Etc/UTC";

// const job = schedule.scheduleJob(rule, function () {
//   console.log("A new day has begun in the UTC timezone!");
// });

const job = schedule.scheduleJob("*/1 * * * *", function (fireDate) {
  console.log(
    "This job was supposed to run at " +
      fireDate +
      ", but actually ran at " +
      new Date()
  );
});
