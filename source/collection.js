var DataManager = DataManager || {};
DataManager.models = DataManager.models || {};
DataManager.collections = DataManager.collections || {};

(function(){

    /**
     * a contact backbone collection
     * @type {*}
     */
    var ExpensesCol = Backbone.Collection.extend({

        model : DataManager.models.Expense,

        url:  "expenses.json",

        /**
         * override parse method to return the array of data from server  and not {expense:[..data...]} as defaulted
         * @param resp is the response from the server
         * @param xhr is the http request
         * @return {*} the array of data from server
         */
		initialize : function(){
            console.log("im a expense collection instance");
        },
		
        
       // parse: function(resp, xhr) {
        //    return resp;
       // },
		
        // For sorting the list
		
        comparator: function(expense) {
            return expense.get('Date');
        }

    });

    DataManager.collections.expenses = new ExpensesCol();


})();