import Ember from 'ember'

export default Ember.Controller.extend({

  actions: {
    onInputHandler (attrs) {
      console.log('password value: ' + attrs.value)
      this.notifications.addNotification({
        message: "value: '" + attrs.value + "'",
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
