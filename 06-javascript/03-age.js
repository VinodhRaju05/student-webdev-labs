// Add your code here
const calculateAge = function (dateString) {
  const birthDate = new Date(dateString);
  const today = new Date();

  if (isNaN(birthDate.getTime())) {
    return 'Error: Invalid date format';
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthsDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthsDiff < 0 || (monthsDiff === 0 && dayDiff < 0)) age--;

  if (age < 0) {
    return 'Error: You cannot be less than zero years old.';
  }

  if (age > 100) {
    return 'Are you sure you are more than 100 years old?';
  }

  if (age === 1) {
    return `You are ${age} year old`;
  }

  return `You are ${age} years old`;
};

console.log(calculateAge('2000-07-01'));
// You are 25 years old
console.log(calculateAge('1988-05-18'));
// You are 38 years old
console.log(calculateAge('2190-01-01'));
// Error: You cannot be less than zero years old.
console.log(calculateAge('1800-01-01'));
// Are you sure you are more than 100 years old?
const someday = 'not-a-date';
console.log(calculateAge(someday));
// Error: Invalid date format

// Note: These calculations were done on May 18, 2026.