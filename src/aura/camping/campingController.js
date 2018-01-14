({
    createCampingItem: function(component, event, helper) {

        // Simplistic error checking
        var validItem = true;

        // Name validation
        var nameField = component.find("name");
        var itemName = nameField.get("v.value");
        if ($A.util.isEmpty(itemName)){
            validItem = false;
            nameField.set("v.errors", [{message:"Item name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
            
        // Price validation
        var priceField = component.find("name");
        var itemPrice = nameField.get("v.value");
        if ($A.util.isEmpty(itemPrice)){
            validItem = false;
            priceField.set("v.errors", [{message:"Item price can't be blank."}]);
        }
        else {
            priceField.set("v.errors", null);
        }
        
        // Quantity validation
        var qtyField = component.find("name");
        var itemQty = qtyField.get("v.value");
        if ($A.util.isEmpty(itemQty)){
            validItem = false;
            qtyField.set("v.errors", [{message:"Item price can't be blank."}]);
        }
        else {
            qtyField.set("v.errors", null);
        }

        // If passed error checking
        if(validItem){
            var newItemRef = component.get("v.newItem");            
            var allItems = component.get("v.items");
            console.log('all items!', allItems)
            var newItem = JSON.parse(JSON.stringify(newItemRef));
            allItems.push(newItem);
            component.set("v.items", allItems);
            component.set("v.newItem", 
                          {'sobjectType' : 'Camping_Item__c',
                           'Name' : '',
                           'Quantity__c' : 0,
                           'Price__c' : 0,
                           'Packed__c' : false});
        }		                
    }
})