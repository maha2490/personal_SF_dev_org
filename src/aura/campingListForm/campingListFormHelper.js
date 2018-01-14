({
	// put validate form method here
	validateItemForm: function(component){

    var validItem = true;

    // Name must not be blank
    var nameField = component.find("name");
    var itemName = nameField.get("v.value");

    if ($A.util.isEmpty(itemName)){
        validItem = false;
        nameField.set("v.errors", [{message:"Item name can't be blank."}]);
    }
    else {
        nameField.set("v.errors", null);
    }

    // Amount must be set, must be a positive number
    var amtField = component.find("amount");
    var amt = amtField.get("v.value");
    if ($A.util.isEmpty(amt) || isNaN(amt) || (amt <= 0.0)){
        validExpense = false;
        amtField.set("v.errors", [{message:"Enter an expense amount."}]);
    }
    else {
        // If the amount looks good, unset any errors...
        amtField.set("v.errors", null);
    }

		// Quantity must be set, must be a positive number
		var amtField = component.find("quantity");
		var amt = amtField.get("v.value");
		if ($A.util.isEmpty(amt) || isNaN(amt) || (amt <= 0.0)){
				validExpense = false;
				amtField.set("v.errors", [{message:"Enter a quantity amount."}]);
		}
		else {
				// If the amount looks good, unset any errors...
				amtField.set("v.errors", null);
		}

		// if(validItem){
    //     var newItemRef = component.get("v.newItem");
    //     var allItems = component.get("v.items");
    //     var newItem = JSON.parse(JSON.stringify(newItemRef));
    //     allItems.push(newItem);
    //     component.set("v.items", allItems);
    //     component.set("v.newItem",
    //                   {'sobjectType' : 'Camping_Item__c',
    //                    'Name' : '',
    //                    'Quantity__c' : 0,
    //                    'Price__c' : 0,
    //                    'Packed__c' : false});
    // }

    return(validItem);
  },
	createItem : function(component, item) {
		var createEvent = component.getEvent("addItem");

		createEvent.setParams({ "item": item });
		createEvent.fire();
	}
})
