import images from './images';

const fastfood = [
  {
    title: 'Pizza',
    price: '$56',
    tags: 'FR | Spicy | Bottle',
  },
  {
    title: 'Burger',
    price: '$59',
    tags: 'FR | Special | Bottle',
  },
  {
    title: 'Shawarma',
    price: '$44',
    tags: 'FR | Delicious | 750 ml',
  },
  {
    title: 'Biriyani',
    price: '$44',
    tags: 'FR | Special | 750 ml',
  },
  {
    title: 'Zinger',
    price: '$44',
    tags: 'FR | Delicious | 750 ml',
  },
  {
    title: 'Fries',
    price: '$26',
    tags: 'FR | Special | 750 ml',
  },
];

const colddrinks = [
  {
    title: 'Sprite',
    price: '$20',
    tags: 'Soda | 30 ml',
  },
  {
    title: "Coca-cola",
    price: '$16',
    tags: 'Dark rum | Slice of lime',
  },
  {
    title: 'Mrinda',
    price: '$10',
    tags: 'Juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Brown sugar',
  },
  {
    title: 'Pepsi',
    price: '$26',
    tags: 'Sweet | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { fastfood, colddrinks, awards };
