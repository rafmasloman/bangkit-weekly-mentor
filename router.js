const { getAllContacts } = require('./controller');

const router = [
  {
    method: 'GET',
    path: '/contacts',
    handler: getAllContacts,
  },
];

module.exports = router;
