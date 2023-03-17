const Hapi = require('@hapi/hapi');
const contacts = require('./contacts');
const router = require('./router');

const main = async () => {
  const PORT = 5000;

  const server = Hapi.server({
    port: PORT,
    host: 'localhost',
  });

  server.route([
    {
      method: 'GET',
      path: '/contacts',
      handler: (request, res) => {
        return res.response({
          status: true,
          message: 'Data berhasil diambil',
          contacts,
        });
      },
    },
    {
      method: 'GET',
      path: '/contact/{id}',
      handler: (request, res) => {
        const { id } = request.params;
        console.log(id);
        const contact = contacts.filter((contact) => {
          return contact.id === Number(id);
        });
        console.log(contact);
        return res.response({
          status: true,
          message: 'success',
          contacts: contact[0],
        });
      },
    },
    {
      method: 'POST',
      path: '/contacts/add',
      handler: (request, res) => {
        const { id, name, email, phoneNumber } = request.payload;

        contacts.push({
          id,
          name,
          email,
          phoneNumber,
        });

        console.log(contacts);

        return res.response({
          status: true,
          message: 'berhasil menambah data',
        });
      },
    },
  ]);
  await server.start();
  console.log(`Server is running on port ${PORT}`);
};

main();
