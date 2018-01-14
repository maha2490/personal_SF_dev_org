public class StringArrayTest {
    public static List<String> generateStringArray (Integer stringsToReturn){
        String[] arr = new List<String>();
        
        for(Integer i=0; i < stringsToReturn; i++){
            //run up until i is less than stringsToReturn
            arr.add('Test ' + i);
        }
        
        return arr;
    }
}

// system.debug = console.log in apex
// need to declare type of return function has