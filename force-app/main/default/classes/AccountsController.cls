public class AccountsController {
    @AuraEnabled
    public static List <Account> getAccounts() {
        return [SELECT Id,
                industry,
                name,
                NumberOfEmployees,
                Phone,
                TickerSymbol,
                Type
                FROM Account
                ORDER BY CreatedDate DESC];
    }
}