import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addToCart: function(sku) {
      var $this = $(this.element);

      $this.toggleClass('is-active');
    }
  }
});
