export const welcomeTestData = {
  titles : {
    welcomeTitle: 'Welcome'
  },
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
  addresses: {
    mailingAddressQuery: '1000 Main St',
    physicalAddressQuery: '9191 Westminter Blvd.'
  }
};