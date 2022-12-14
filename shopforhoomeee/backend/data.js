import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'shop',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: '1',
      name: 'Bed 01',
      slug: 'bed-01',
      category: 'Beds',
      image: '/images/p1.jpg',
      price: 6000,
      countInStock: 5,
      brand: 'mattrresses',
      rating: 4.5,
      numReviews: 5,
      description: 'high quality wood',
    },
    {
      _id: '2',
      name: 'DoubleBed 02',
      slug: 'bed-02',
      category: 'Beds',
      image: '/images/p2.jpg',
      price: 10000,
      countInStock: 5,
      brand: 'wakefit',
      rating: 4.5,
      numReviews: 5,
      description: 'high quality wood',
    },
    {
      _id: '3',
      name: 'drawer 01',
      slug: 'drawer-01',
      category: 'drawers',
      image: '/images/p3.jpg',
      price: 2000,
      countInStock: 0,
      brand: 'mattrresses',
      rating: 4,
      numReviews: 5,
      description: 'high quality wood',
    },
    {
      _id: '4',
      name: 'drawer 02',
      slug: 'drawer-02',
      category: 'drawers',
      image: '/images/p4.jpg',
      price: 2500,
      countInStock: 10,
      brand: 'wakefit',
      rating: 4,
      numReviews: 5,
      description: 'high quality wood and with doors',
    },
    {
      _id: '5',
      name: 'Rapri Clip Led Light',
      slug: 'rapri-clip-led-light',
      category: 'Speciaity Lightening',
      image: '/images/p5.jpg',
      price: 439,
      countInStock: 10,
      brand: 'Zentec',
      rating: 4.5,
      numReviews: 10,
      description:
        'Wonderful Decoration Add Something Special To Your Bedroom, Room, College Dorm, Wedding, Party. Easy to Use Just hang it on the wall. No mounting tools needed, suitable for art works or crafts, prints, cards etc.',
    },
    {
      _id: '6',
      name: 'hanging lights',
      slug: 'hanging-lights',
      category: 'Speciaity Lightening',
      image: '/images/p6.jpg',
      price: 489,
      countInStock: 10,
      brand: 'Zentec',
      rating: 4.0,
      numReviews: 10,
      description: '',
    },
    {
      _id: '7',
      name: 'wall Light',
      slug: 'wall-light',
      category: 'Speciaity Lightening',
      image: '/images/p7.jpg',
      price: 899,
      countInStock: 10,
      brand: 'Zentec',
      rating: 4.5,
      numReviews: 14,
      description: 'gives a bright light and color to the wall',
    },
    {
      _id: '8',
      name: 'hallway runway',
      slug: 'hallway-runway',
      category: 'runway',
      image: '/images/p8.jpg',
      price: 349,
      countInStock: 10,
      brand: 'Zebtec',
      rating: 4.5,
      numReviews: 10,
      description: 'makes the runway good and absorbs dust',
    },
  ],
};
export default data;
