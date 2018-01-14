@isTest
public class TestVerifyDate {
    // METHOD ONE
    @isTest static void testCheckDates() {
        Date dateToTest1 = Date.newInstance(2017, 3, 1);
        Date dateToTest2 = Date.newInstance(2017, 3, 21);
        
        Date result = VerifyDate.CheckDates(dateToTest1, dateToTest2);
        
        //dateToTest2 is within 30 days of dateToTest1, should return dateToTest2
        System.assertEquals(result, dateToTest2);
    }
    @isTest static void testCheckDates2() {
        Date dateToTest1 = Date.newInstance(2017, 3, 1);
        Date dateToTest2 = Date.newInstance(2017, 4, 21);
        
        //call method in test. use name of public method not test method name
        Date result = VerifyDate.CheckDates(dateToTest1, dateToTest2);

        //dateToTest2 is NOT within 30 days of dateToTest1, should return EOM
        System.assertEquals(Date.newInstance(2017, 3, 31), result);
    }
}