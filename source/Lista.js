enyo.kind({
    name:'lista',
    kind: "List",
	classes:"lista enyo-fit",
    handlers: {
        onSetupItem: "setupRow"
    },
    published: {
        type: null
    },
	
	touch:true,
    components: [
       {kind: "Expense", name:"expenseTemplate" , ontap : "onItemSelect"}
      // {kind: "Control", onCancel: "canceled", onDelete: "deleted",components: [{kind: "Expense", name:"expenseTemplate"}]}
    ],
	
	rendered: function(){
		 this.inherited(arguments);
		 //this.populateList();
	},
	
	onItemSelect:function(source, event) {
		alert("selected");
	},
	
    render: function() {
        this.refreshList();
    },
    refreshList: function() {
        if (this.collection) {
            this.setCount(this.collection.length);
        }
        this.reset();
    },
	
    didFetch: function(collection) {
        // do render routine...
        this.setCount(collection.length);
        this.reset();
    },
    didNotFetch: function(collection) {
        //collection.youSuck();
    },

	populateList: function(collectionData) {
        this.setCount(20);// collectionData.length
        this.reset();
    },
    
});
