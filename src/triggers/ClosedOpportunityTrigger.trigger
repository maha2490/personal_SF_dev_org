trigger ClosedOpportunityTrigger on Opportunity (after insert, after update) {
    List<Task> taskList = new List<Task>();
    for (Opportunity opp : Trigger.new) {
        if (opp.StageName == 'Closed Won') {
           Task taskToCreate = new Task(Subject='Follow Up Test Task', WhatId=opp.id);
           tasklist.add(taskToCreate);
        }
    }
    insert taskList; 
}