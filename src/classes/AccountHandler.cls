public class AccountHandler {
    public static Account insertNewAccount(String newName) {
        Account acct = new Account(Name= newName);
        try {
        	insert acct;
        } catch(DmlException e) {
            System.debug('A DML exception occurred: ' + e.getMessage() );
            return null;
        }
        return acct;
    }
}