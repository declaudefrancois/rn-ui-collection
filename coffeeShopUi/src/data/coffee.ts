import {ImageRequireSource} from 'react-native';

const coffeeImg0 = require('../../assets/images/coffee-0.png');
const coffeeImg1 = require('../../assets/images/coffee-1.png');
const coffeeImg2 = require('../../assets/images/coffee-2.png');
const coffeeImg3 = require('../../assets/images/coffee-3.png');

export interface Coffee {
  id: number;
  name: string;
  price: number;
  supplement: string;
  image: ImageRequireSource | string;
  description: string;
  rating: number;
}

export const COFFEES: Coffee[] = [
  {
    id: 1,
    image: coffeeImg0,
    price: 4.53,
    name: 'Cappuccino',
    supplement: 'with chocolate',
    description:
      'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, quos?',
    rating: 4.8,
  },
  {
    id: 2,
    image: coffeeImg1,
    price: 3.9,
    name: 'Cappuccino',
    supplement: 'with Oat Milk',
    rating: 4.9,
    description:
      'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, quos?',
  },
  {
    id: 3,
    image: coffeeImg2,
    price: 4.53,
    name: 'Cappuccino',
    supplement: 'with Oat Milk',
    rating: 4.5,
    description:
      'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, quos?',
  },
  {
    id: 4,
    image: coffeeImg3,
    price: 4.53,
    name: 'Cappuccino',
    supplement: 'with chocolate',
    rating: 4.0,
    description:
      'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, quos?',
  },
];
