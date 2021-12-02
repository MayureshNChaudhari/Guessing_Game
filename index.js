function myFunction() {
  const max = prompt("Enter Your Max Number", "100");
  console.log(max);
  let random = parseInt(Math.random() * max + 1);
  console.log(random);
  let quit = "q";
  let i = 20;
  let guess = prompt("Your Guess");
  let attemp = 0;
  while (1 >= 0) {
    if (guess == random) {
      attemp = attemp + 1;
      break;
    } else if (guess > random) {
      guess = prompt("It's Larger Than The Answer! Enter New Guess");
      attemp = attemp + 1;
    } else if (guess < random) {
      guess = prompt("It's Lower Than The Answer! Enter New Guess");
      attemp = attemp + 1;
    } else if (guess == quit) {
      break;
    }
  }
  console.log(attemp);
  alert(`Congrats You Needed ${attemp} Attemps`);
}
