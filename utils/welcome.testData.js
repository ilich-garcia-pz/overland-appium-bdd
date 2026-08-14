export const welcomeTestData = {
  names : {
    validName: 'Rosetta Kuhn',
    validBusinessName: 'Bradtke - Steuber',
    overMaxLengthName: 'A'.repeat(51),
    overMaxLengthBusinessName: 'B'.repeat(101),
  },
  phoneNumbers : {
    validPhoneNumber: '5855650242',
    overMaxLengthPhoneNumber: '58556502421'
  },
  emails : {
    validEmail: 'rosetta.kuhn@example.com',
    invalidEmail: 'rosetta.kuhn@example' // Missing top-level domain.
  },
  titles : {
    welcomeTitle: 'Welcome'
  }
};