trigger AccountDeletion on Account (before delete) {
     // Prevent the deletion of accounts if they have related opportunities.
    for (Account a : [SELECT Id FROM Account
                     WHERE Id IN (SELECT AccountId FROM Opportunity) AND
                     Id IN :Trigger.old]) {
        Trigger.oldMap.get(a.Id).addError(
            'Cannot delete account with related opportunities.');
    }
}




// test for this trigger____________________

//@isTest
//private class TestAccountDeletion {

    //@isTest static void TestDeleteAccountWithOneOpportunity() {
        // Test data setup
        // Create an account with an opportunity, and then try to delete it
        // Account acct = new Account(Name='Test Account');
        // insert acct;
        // Opportunity opp = new Opportunity(Name=acct.Name + ' Opportunity',
                                       // StageName='Prospecting',
                                       // CloseDate=System.today().addMonths(1),
                                       // AccountId=acct.Id);
        // insert opp;
        
        // Perform test
        // Test.startTest();
        // Database.DeleteResult result = Database.delete(acct, false);
        // Test.stopTest();

        // Verify 
        // In this case the deletion should have been stopped by the trigger,
        // so verify that we got back an error.
        // System.assert(!result.isSuccess());
        // System.assert(result.getErrors().size() > 0);
        // System.assertEquals('Cannot delete account with related opportunities.',
                             // result.getErrors()[0].getMessage());
//    } 
//}