
enyo.kind({
	name:"pageOne",
	components:[
                {tag:"div" ,classes:"page-field", components:[
                    {tag:"label" , content:localize.pageOne.category+":"},
                    {classes:"" , allowHtml:true , content:"<select><option>"+localize.pageOne.category+"</option></option></select>"}
                ]},
                {tag:"div" ,classes:"page-field", components:[
                    {tag:"label" , content:localize.pageOne.country+":"},
                    {classes:"" , allowHtml:true , content:"<select><option>"+localize.pageOne.country+"</option></option></select>"}
                ]},
                {tag:"div" ,classes:"page-field", components:[
                    {tag:"label" , content:localize.pageOne.date+":"},
                    {classes:"" , name :"dateInput" ,allowHtml:true , content:"<input type='date' value='15/10/2012'>"}
                ]},
                {tag:"div" ,classes:"page-field desc", components:[
                    {tag:"label" , content:localize.pageOne.description+":"},
                    {tag:"input" , classes:"desc"}
                ]}
	],

	 create: function() {
        this.inherited(arguments);
        var date = new Date();
        this.expenseDate = date.getTime();
        this.dateChanged(date);
    },
	
	dateChanged : function(date){
		this.$.dateInput.setContent(this.dateFormatter(date)); //this.date is currently not handled
	},
	
	inputChanged:function(inSender, inEvent) {
		console.log("category chosen  ",arguments);//inSender.getValue() will return the date inserted
	},
	
	dateFormatter : function(d){
		//var d = new Date();
		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();
		var date=  curr_date + "/" + curr_month + "/" + curr_year;
        return "<input type='date' value="+date+">"
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
    addDataToModel : function(model){

    }
});

