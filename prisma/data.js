const { Prisma } = require('@prisma/client');

const users = [
  {
    name: 'administrador',
    email: 'admin@admin',
  },
  {
    name: 'usuario',
    email: 'user@user',
  }
];

const posts = [
  {
    title: 'Bienvenidos a mi Blog',
    content: 'Este es el contenido del posteo',
    imageUrl: '/images/helmet.jpg',
    published: '/images/helmet.jpg',
  },
  {
    title: 'posteo 2.',
    content: 'A nice helmet to wear on your head',
    imageUrl: '/images/helmet.jpg',
    published: '/images/helmet.jpg',
  },
];

module.exports = {
  users,
  posts,
};