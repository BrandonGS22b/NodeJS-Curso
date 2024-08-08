const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
  },
];

function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return callback(`USUARIO NO ENCONTRADO ${id}`);
  }
  return callback(null, user);
}

module.exports = {
  getUserById,
};

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    return callback(`USUARIO NO ENCONTRADO ${id}`);
  }
  return callback(null, user);
};

/*
const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);
    if (!user) {
        return callback(`USUARIO NO ENCONTRADO ${id}`);
    }
    return callback(null, user);
};

module.exports = {
    getUserById,
};

*/
