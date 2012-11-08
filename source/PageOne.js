
enyo.kind({
	name:"pageOne",
	components:[
		 {content: "New Expense",style:"border-bottom: 1px solid grey"},
		  //{kind: "onyx.InputDecorator", components: [
				{content:"Category" ,classes:"p1-category"},
				{tag:"div",classes:"p1-input", content: "chosen", style:"padding-left: 10px;", onchange:"inputChanged"},			
				{tag: "div", classes:"arrow-down" ,ontap:"openCategoryPicker"},
		//]},
	     {tag: "br"},
		 {kind: "onyx.InputDecorator", components: [
				{content:"Country"},		
				{kind: "onyx.Input", placeholder: "Choose Country", style:"padding-left: 10px;", onchange:"inputChanged"},
				{kind: "Image", src: "assets/arr_down.png" ,ontap:"openCountryPicker"}
		]},
		 
		 {tag: "br"},
		 {kind: "onyx.InputDecorator", components: [
				{content:"Date"},
				{kind: "onyx.Input", name : "dateInput",style:"padding-left: 10px;", onchange:"inputChanged"},
				{kind: "Image", src: "assets/calender.png" ,ontap:"openDatePicker"}
		]},
		{tag: "br"},
        {kind: "onyx.InputDecorator", components: [
            {kind: "onyx.TextArea", name: "desc",placeholder: "Enter description here", onchange:"inputChanged"}
        ]}
			
	],
	
	 create: function() {
        this.inherited(arguments);       
        this.dateChanged();
    },
	
	dateChanged : function(){
		this.$.dateInput.setContent(this.dateFormatter(this.date)); //this.date is currently not handled
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

