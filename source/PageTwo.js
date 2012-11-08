
enyo.kind({
	name:"pageTwo",
	components:[
		 {content: "New Expense",style:"border-bottom: 1px solid grey"},
		 {tag: "br"},
		 {tag: "br"},
		 {kind: "onyx.InputDecorator", components: [
				{content:"Currency"},
				{kind: "onyx.Input", name : "currencyInput",style:"padding-left: 10px;", onchange:"inputChanged"},
				{kind: "Image", src: "assets/arrow_down.png" ,ontap:"openCurrencyPicker"}
		]},
		{tag: "br"},
		{tag: "br"},
		 {kind: "onyx.InputDecorator", components: [
				{content:"Amount"},
				{kind: "onyx.Input", name : "dateInput",style:"padding-left: 10px;", onchange:"inputChanged"},
				{kind: "Image", src: "assets/currency-dollar.png" ,ontap:"openDatePicker"}
		]},
		{tag: "br"},
		{tag: "br"},
		{content:"Comment"},
        {kind: "onyx.InputDecorator", components: [
			{tag: "br"},
            {kind: "onyx.TextArea", name: "desc",placeholder: "Optional", onchange:"inputChanged"}
        ]}
			
	],
	
	 create: function() {
        this.inherited(arguments);       
        this.currencyChanged();
    },
	
	currencyChanged : function(){
		this.$.currencyInput.setContent(this.getCurrency()); //this.date is currently not handled
	},
	
	inputChanged:function(inSender, inEvent) {
		console.log("category chosen  ",arguments);//inSender.getValue() will return the date inserted
	},
	
	getCurrency : function(){
		return "USD"; // todo The currency is automatically populated according to the expense country
	},
	
	openCurrencyPicker:function(){
		alert("a currency drop down not yet implemented");
	},
});
