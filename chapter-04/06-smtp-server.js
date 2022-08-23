/**
 * Create a SMTP server that can receive email messages
 *
 * https://nodemailer.com/extras/smtp-server
 * */
const { SMTPServer } = require("../node_modules/smtp-server/lib/smtp-server");

new SMTPServer({
  disabledCommands: ["STARTTLS", "AUTH"],
  logger: true,
})
  .on("error", (err) => {
    console.error(err);
  })
  .listen(4321);
