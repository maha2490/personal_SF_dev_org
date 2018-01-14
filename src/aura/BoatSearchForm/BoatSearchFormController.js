({
  doInit: function(component, event, helper) {
    var isEnabled = $A.get("e.force:createRecord");

    if (isEnabled) {
      component.set('v.renderNew', true);
    } else {
      component.set('v.renderNew', false);
    }
    var queryBoatTypes = component.get('c.getBoatTypes');

    queryBoatTypes.setCallback(this, function(response) {
      var state = response.getState();
      if (state === 'SUCCESS') {
        component.set('v.boatTypes', response.getReturnValue());
        console.log('boat types', response.getReturnValue());
      } else {
        console.log('queryBoatTypes fail', state);
      }
    })

    $A.enqueueAction(queryBoatTypes);
  },
  onFormSubmit: function(component, event, helper) {

    var selectedTypeId = component.get('v.selectedType'),
      formSubmitEvent = component.getEvent('formData');

    formSubmitEvent.setParams({
      'formData': selectedTypeId
    })
    formSubmitEvent.fire();
  },
  clickNewBoat: function(component, event, helper) {
    console.log('create a new boat');

    var requestNewBoat = component.getEvent("launchNewBoatForm"),
      boatTypeId = component.get("v.selectedType");

    requestNewBoat.setParams({
      "boatTypeId": boatTypeId
    });
    requestNewBoat.fire();
  },
  handleNewBoatForm: function(component, event, helper) {
    console.log("handleNewBoatForm handler called.");
    var boatTypeId = component.get("v.selectedType"),
      createNewBoat = $A.get("e.force:createRecord");

    createNewBoat.setParams({
      "entityApiName": "Boat__c",
    })

    if (!boatTypeId == "") {
      createNewBoat.setParams({
        "defaultFieldValues": {
          'BoatType__c': boatTypeId
        }
      })
    }
  }
})
