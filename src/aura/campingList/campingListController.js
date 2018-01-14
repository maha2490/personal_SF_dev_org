({
  doInit: function(component, event, helper) {
    // Create the action
    var action = component.get("c.getItems");

    // Add callback behavior for when response is received
    action.setCallback(this, function(response) {
      var state = response.getState();
      if (component.isValid() && state === "SUCCESS") {
        component.set("v.items", response.getReturnValue());
      } else {
        console.log("Failed with state: " + state);
      }
     });

    $A.enqueueAction(action);
  },
  createCampingItem: function(component, event, helper) {
    if(helper.validateExpenseForm(component)){
        // Create the new expense
        var newItem = component.get("v.newItem");
        helper.createItem(component, newItem);
    }
  },
  handleAddItem: function(component, event, helper) {
    var newItem = event.getParam('item');
    // console.log('item in handle add item', newItem )
    var action = component.get('c.saveItem');
    action.setParams({'item': newItem});
    $A.enqueueAction(action);

    var updatedItem = event.getParam("item");

    var allItems = component.get("v.items");
    allItems.push(updatedItem);
    component.set("v.items", allItems);
  }
})
