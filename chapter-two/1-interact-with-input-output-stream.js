/**
 * Create a program that can read from STDIN and write to STDIN and STDERR
 * 
 * About the signal events: https://nodejs.org/api/process.html#process_signal_events
 * */ 

process.stdin.on("data", (data) => {
  const name = data.toString().trim().toUpperCase();
  if (name !== "") {
    process.stdout.write(`Hello ${name}!`);
  } else {
    process.stderr.write("Input was empty.");
  }
});
