import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  sku: DS.attr('string'),
  imageThumbnail: DS.attr('string'),
  imageMedium: DS.attr('string'),
  imageDetail: DS.attr('string'),
  inCart: DS.attr('boolean'),
  price: DS.attr('int')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      sku: '01',
      name: 'Apple',
      category: 'fruit',
      imageThumbnail: 'http://placehold.it/32x32',
      imageMedium: 'http://placehold.it/300x200',
      imageDetail: 'http://placehold.it/600x400',
      price: 5.00,
      inCart: false
    },
    {
      id: 2,
      sku: '02',
      name: 'Banana',
      category: 'fruit',
      imageThumbnail: 'http://placehold.it/32x32',
      imageMedium: 'http://placehold.it/300x200',
      imageDetail: 'http://placehold.it/600x400',
      price: 5.00,
      inCart: false
    },
    {
      id: 3,
      sku: '03',
      name: 'Tomato',
      category: ['fruit', 'vegetable'],
      imageThumbnail: 'http://placehold.it/32x32',
      imageMedium: 'http://placehold.it/300x200',
      imageDetail: 'http://placehold.it/600x400',
      price: 5.00,
      inCart: false
    },
    {
      id: 4,
      sku: '04',
      name: 'Cucumber',
      category: ['fruit', 'vegetable'],
      imageThumbnail: 'http://placehold.it/32x32',
      imageMedium: 'http://placehold.it/300x200',
      imageDetail: 'http://placehold.it/600x400',
      price: 5.00,
      inCart: false
    },
    {
      id: 5,
      sku: '05',
      name: 'Potato',
      category: 'vegetable',
      imageThumbnail: 'http://placehold.it/32x32',
      imageMedium: 'http://placehold.it/300x200',
      imageDetail: 'http://placehold.it/600x400',
      price: 5.00,
      inCart: false
    },
    {
      id: 6,
      sku: '06',
      name: 'Beet',
      category: 'vegetable',
      imageThumbnail: 'http://placehold.it/32x32',
      imageMedium: 'http://placehold.it/300x200',
      imageDetail: 'http://placehold.it/600x400',
      price: 5.00,
      inCart: false
    },
    {
      id: 7,
      sku: '07',
      name: 'Kale',
      category: 'vegetable',
      imageThumbnail: 'http://placehold.it/32x32',
      imageMedium: 'http://placehold.it/300x200',
      imageDetail: 'http://placehold.it/600x400',
      price: 5.00,
      inCart: false
    },
    {
      id: 8,
      sku: '08',
      name: 'Blueberry',
      category: 'fruit',
      imageThumbnail: 'http://placehold.it/32x32',
      imageMedium: 'http://placehold.it/300x200',
      imageDetail: 'http://placehold.it/600x400',
      price: 5.00,
      inCart: false
    },
    {
      id: 9,
      sku: '09',
      name: 'Celery',
      category: 'vegetable',
      imageThumbnail: 'http://placehold.it/32x32',
      imageMedium: 'http://placehold.it/300x200',
      imageDetail: 'http://placehold.it/600x400',
      price: 5.00,
      inCart: false
    },
    {
      id: 10,
      sku: '10',
      name: 'Orange',
      category: 'fruit',
      imageThumbnail: 'http://placehold.it/32x32',
      imageMedium: 'http://placehold.it/300x200',
      imageDetail: 'http://placehold.it/600x400',
      price: 5.00,
      inCart: false
    }
  ]
});
