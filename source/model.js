var DataManager = DataManager || {};
DataManager.models = DataManager.models || {};
DataManager.collections = DataManager.collections || {};

(function() {

    /**
     * backbone model
     * @type {*} expense model
     */
    DataManager.models.Expense = Backbone.Model.extend({

        /**
         * will be invoked when a collection is ready
         */
        initialize : function(){
            console.log("im a expense model instance");
        },

        /**
         * default attributes for the model
         */
        defaults: {

			category       : "",
			currency       : "",
			country        : "",
			displayedDate  : "",
			date		   : "",
			description    : "",
			amount         : "",
			comment        : "",
			receiptProv    : ""
        },

        //urlRoot:"/btoa/notes/services/notes/",
        urlRoot:"expenses.json",

        /**
         * overrides the url method , it gets the url , and if an id is available it concats it as requested in the rest service
         * @return {String}
         */
        url : function(){
            var base = this.urlRoot || (this.collection && this.collection.url) || "/";
            if (this.isNew()) return base;

            return base  + encodeURIComponent(this.id);
        }

    });

	


})();

