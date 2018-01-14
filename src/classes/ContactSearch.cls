public class ContactSearch {
    public static List<Contact> searchForContacts(String LastName, String MailingPostalCode){
        Contact[] matchingContacts = [SELECT Name FROM CONTACT 
                                      WHERE LastName=:LastName AND MailingPostalCode=:MailingPostalCode];
        
        return matchingContacts;
    }
}