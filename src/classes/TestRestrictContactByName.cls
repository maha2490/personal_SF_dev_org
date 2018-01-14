@isTest
private class TestRestrictContactByName {
    @isTest static void TestRestrictContactByName() {
        Contact testContact = new Contact();
        testContact.LastName = 'INVALIDNAME';
        insert testContact;
        
        Test.startTest();
        Database.SaveResult result = Database.insert(testContact, false);
        Test.stopTest();

        
        System.assertEquals('The Last Name "'+testContact.LastName+'" is not allowed for DML',
                             result.getErrors()[0].getMessage());
    }
}