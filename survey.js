const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please set a username: ', (answer) => {
  console.log(`Username selected: ${answer}`);
  rl.question('Please list your favourite activity: ', (answer) => {
    console.log(`Favourite activity selected: ${answer}`);
    rl.question('What do you listen to while doing that activity?: ', (answer) => {
      console.log(`Audio track selected: : ${answer}`);
      rl.question('Which meal time is your favourite?: ', (answer) => {
        console.log(`Favourite mealtime selected: ${answer}`);
        rl.question('What is your favourite thing to eat during that meal?: ', (answer) => {
          console.log(`Favourite food selected: ${answer}`);
          rl.question('What is your favourite sport?: ', (answer) => {
            console.log(`Favourite sport selected: ${answer}`);
            rl.question('What is your special ability?: ', (answer) => {
              console.log(`Superpower selected: ${answer}`);

  rl.close();
            });
          });
        });
      });
    });
  });
});