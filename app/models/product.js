import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  sku: DS.attr('string'),
  imageThumbnail: DS.attr('string'),
  imageMedium: DS.attr('string'),
  imageDetail: DS.attr('string'),
  inCart: DS.attr('boolean')
});
