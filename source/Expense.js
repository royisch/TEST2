enyo.kind({
    name: "Expense",
    kind: enyo.Control,
    tag: "div",
	classes: "expense",
   /* style: "border-bottom: 2px solid grey; " +
        "padding: 10px; margin: 10px; min-height: 20px;width:100% !important",
	*/
    published: {
        amount : 0,
        date : "",
        description : "",
        notes : "",
        title : "",
        validations:{}

    },
	

    components: [
        {tag:"div" , classes:"expenseItem" ,components:[
            { tag: "span", classes: "expense-title", name: "title" },
            { tag: "span", classes: "expense-date", name: "date" },
            { tag: "span", classes: "expense-time" ,name: "time" },
            { tag: "span", classes: "expense-amount" , name: "amount"}//,style:"width:10px;height:20px;float: right;margin-right:40px;padding-top: 10px;margin-left: 5px;"},
        ]}

    ],

    create: function() {
        this.inherited(arguments);
        this.titleChanged();
        this.dateChanged();
		this.timeChanged();
        this.amountChanged();
    },


    titleChanged: function() {
        this.$.title.setContent(this.title);
    },

    dateChanged: function() {
        this.$.date.setContent(this.dateFormatter(this.date)); //this.date is currently not handled
    },
	
	timeChanged : function(){
		 this.$.time.setContent(this.TimeFormatter(this.date)); //this.date is currently not handled
	},
	
    amountChanged: function() {
        this.$.amount.setContent(this.amount);
    }  ,
    
	dateFormatter : function(date){
	
		//var d;// = new Date();
		//date ? d = new Date(date) : d = new Date();
		var d = new Date();
		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();
		return curr_date + "." + curr_month + "." + curr_year + "  ";
	},
	
	TimeFormatter : function(){
		var d = new Date();
		var curr_min = d.getMinutes();
		var curr_hour = d.getHours();
		return curr_hour + ":" + curr_min + "  ";
	}
});	