
enyo.kind({
    name: "SubRepView",
    kind: "FittableRows",
    classes: "subRepView",
    components: [
        { tag:"div", name:"title",content:"Expense Management" ,classes:"title"},
        {kind : "FittableRows" ,
			classes:"ExpenseMgmtRows",
            components :[
                {tag:"div" ,name : "expensesButton" ,classes:"expensesButton" , content:"Expenses" , ontap:"buttonTapped"},
                {tag:"div" ,name : "reportsButton" ,classes:"reportsButton" , content:"Reports" ,ontap:"buttonTapped"},
				{tag:"div" ,classes:"imagesContainer" , components:[
					{tag:"div" ,classes:"cameraPicButton" , ontap:"openCamera"},
					{tag:"div" ,classes:"unassignedButton" , content:"unassigned images" ,ontap:"unassignedImages"}
				]},
            ]
        },
		{kind: "Panels", name:"listsPanels", fit:true, realtimeFit: true, draggable: false ,classes: "listsPanels", components: [
			{kind:"ExpensesList", name:"expenseList" ,type:"Expenses" ,classes:"expenseList"},
			{kind:"lista", name:"reportList" ,type:"Reports" ,style:"background:orange;"}
			
		]
		}
	],
	
	create: function() {
        this.inherited(arguments);
		//this.addRemoveClass("selscted-Btn", this.$.reportsButton);
	},
	//rendered : function(){},
	
	openCamera : function(){
		alert("say cheese !!");
	},
	
	unassignedImages : function(){
		alert("unassigned images not yet supported");
	},
	
	buttonTapped : function(inSender , inEvent){
	
		if(inSender.getContent() ==='Expenses'){
			this.$.listsPanels.setIndex(0);
		}
		else if (inSender.getContent() ==='Reports'){
			this.$.listsPanels.setIndex(1);
		}
		console.log(arguments);
		
	}
});