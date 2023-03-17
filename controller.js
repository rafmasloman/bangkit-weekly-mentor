const contacts = require('./contacts');

const controller = {
  getAllContacts: (request, res) => {
    const response = req.response({
      status: true,
      message: 'data berhasil didapat',
      contacts,
    });
    return response;
  },
};

module.exports = controller;
