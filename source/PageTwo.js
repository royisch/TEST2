
enyo.kind({
	name:"pageTwo",
	components:[
        {tag:"div" ,classes:"page-field", components:[
            {tag:"label" , content:localize.pageOne.currency+":"},
            {classes:"" , allowHtml:true , content:"<select><option>"+localize.pageOne.currency+"</option></option></select>"}
        ]},
        {tag:"div" ,classes:"page-field", components:[
            {tag:"label" , content:localize.pageTwo.rate+":"},
           // {tag:"input" ,classes:"inputs" ,placeholder:localize.pageTwo.setRate}
            {classes:"inputs" , allowHtml:true , content:"<input type='number' placeholder='Set Rate' >"}
        ]},
        {tag:"div" ,classes:"page-field", components:[
            {tag:"label" , content:localize.pageTwo.vat+":"},
            //{tag:"input" ,classes:"inputs" ,placeholder:localize.pageTwo.vat}
            {classes:"inputs" , allowHtml:true , content:"<input type='number'>"}
        ]},
        {tag:"div" ,classes:"page-field", components:[
            {tag:"label" , content:localize.pageTwo.amount+":"},
            //{tag:"input" ,classes:"inputs" ,placeholder:localize.pageTwo.amount}
            {classes:"inputs" , allowHtml:true , content:"<input type='number'>"}
        ]}
       /* {tag:"div" ,classes:"page-field desc", components:[
            {tag:"div" , classes:"warning"}
        ]}*/

	],
	
	 create: function() {
        this.inherited(arguments);       
        //this.currencyChanged();
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
	}
});


/*
* /*{content: "New Expense",style:"border-bottom: 1px solid grey"},
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
 */
