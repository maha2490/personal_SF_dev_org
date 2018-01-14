public with sharing class BoatSearchFormController {

	@AuraEnabled
	public static List<BoatType__c> getBoatTypes() {
		List<BoatType__c> results = new List<BoatType__c>();

		results = [SELECT Id, Name FROM BoatType__c ORDER BY Name];
		
		return results;
	}
}
