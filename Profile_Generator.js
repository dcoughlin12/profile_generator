const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (answer1) => {
  rl.question('What\'s an activity you like doing?', (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              console.log(`Nice to Meet you ${answer1}, I also like to ${answer2}. Super weird tht you listen to ${answer3}, you should see someone about that. ${answer4} is my fav meal of the day. I dont know why you would ever eat ${answer5}... weird... You like ${answer6} too? thats awesome!! so do I. ${answer7}? You truly are a Superhero, now go save the world! `);
              rl.close();
            });
          });
        });
      });
    });
  });
});
