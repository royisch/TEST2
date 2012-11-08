
enyo.kind({
    name: "ExpensesList",
	classes:"expenseList",
    components: [
		{	kind:"lista",
			name:"expenses" ,
			type:"Expenses" ,
			classes:"lista",
			
			setupRow: function(inSender, inEvent) {
				var idx = inEvent.index;
				var col = DataManager.collections.expenses;
				if(col){
					this.$.expenseTemplate.setTitle(col.at(idx).attributes.name);
					this.$.expenseTemplate.setAmount(col.at(idx).attributes.amount);
					this.$.expenseTemplate.setDescription(col.at(idx).attributes.description);
					this.$.expenseTemplate.setDate(col.at(idx).attributes.date);
				}
    }
		},	
	],
	
	
	create: function() {
        this.inherited(arguments);
		var me = this;
		DataManager.collections.expenses.fetch({
					success : function(collection , xhr , options){					
						me.$.expenses.setCount(collection.length);//
						me.$.expenses.reset();
					},
					error : function(collection, xhr, options){
					}
		});
		
	}
});