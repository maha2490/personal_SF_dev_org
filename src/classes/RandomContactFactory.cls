public class RandomContactFactory {
   
    public static List<Contact> generateRandomContacts(Integer numOfContacts, String givenLastName){
        List<Contact> randomContacts = new List<Contact>();
        
        for (Integer i=0; i < numOfContacts; i++ ){
            
            Contact newContact = new Contact();
            newContact.LastName = givenLastName;
            newContact.FirstName = 'Test ' + i;
            
            randomContacts.add(newContact);
        }
        
        return randomContacts;
    }
}