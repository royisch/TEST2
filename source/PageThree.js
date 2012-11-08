
enyo.kind({
	name:"pageThree",
	components:[
		 {content: "New Expense",style:"border-bottom: 1px solid grey"},
		  {kind: "onyx.InputDecorator", components: [
				{content:"Receipt provided" ,style:"padding-right: 10px;"},
					{kind:"onyx.ToggleButton", onContent:"Yes" ,offContent :"No" ,onChange:"toggleChanged", value: true},
		]},
		{tag: "br"},
		],
	  
			
	
	
	 create: function() {
        this.inherited(arguments);              
    },
	
	inputChanged:function(inSender, inEvent) {
		console.log("category chosen  ",arguments);//inSender.getValue() will return the date inserted
	},
	
	dateFormatter : function(){
		var d = new Date();
		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();
		return curr_date + "/" + curr_month + "/" + curr_year;
	},
	
	openDatePicker:function(){
		alert("a date picker not yet implemented");
	},
	openCategoryPicker:function(){
		alert("a category picker not yet implemented");
	},
	openCountryPicker:function(){
		alert("a country picker not yet implemented");
	},
});

