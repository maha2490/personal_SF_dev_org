({
	submitForm : function(component, event, helper) {
		if(helper.validateItemForm(component)){
			// Create the new expense
			var newItem = component.get("v.newItem");
			helper.createItem(component, newItem);
		}
	}
})
