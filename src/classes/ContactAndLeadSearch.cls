public class ContactAndLeadSearch {
    public static List<List<SObject>> searchContactsAndLeads(String NameToSearch){
        List<List<SObject>> searchList = [FIND:NameToSearch IN ALL FIELDS RETURNING Contact(Name), Lead(Name)];
        
        return searchList;
    }
}