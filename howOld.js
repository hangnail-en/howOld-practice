// Pulls current date
const date = new Date().getFullYear();

const howOld = (age, year) => {
  // Calculate birthyear given the age
  let birthYear = date - age;
  // Calculate the age of the user depending on the year given
  let newAge = age + (year - date);
  // Calculate how many years apart the two years are
  let calcYears = birthYear - year;

  if (year > date) {
    return(`You will be ${newAge} in the year ${year}`);
    } else if  (year < date && year > birthYear) {
    return(`You were ${newAge} in the year ${year}`);
    } else if (year < date) {
    return(`The year ${year} was ${calcYears} years before you were born`);
  };
};

console.log(howOld(28, 2030)); // Output: 'You will be 35 in the year 2030'
