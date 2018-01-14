({
	packItem : function(component, event, helper) {
        // mark item as packed
        var checkbox = component.get("v.item")
        checkbox.Packed__c = true;
        component.set("v.item", checkbox);
        // disable button
		var btnClicked = event.getSource(); 
   		btnClicked.set("v.disabled",true);
               
	}
})