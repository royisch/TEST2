
enyo.kind({
    name: "SubRepView",
    kind: "FittableRows",
    classes: "subRepView",
    components: [
        {tag:"div",name : "title" , content: localize.expMgmt.title ,classes:"exp-title"},
        {//kind : "FittableRows" ,
			classes:"expenseMgmtRows",
            components :[
                {tag :"div" , classes:"list-Btn" , components:[
                    {tag:"div" ,name : "expensesButton" ,classes:"" , content:"Expenses" , ontap:"buttonTapped"},
                    {tag:"div" ,name : "reportsButton" ,classes:"" , content:"Reports" ,ontap:"buttonTapped"}
                ]},
                {tag:"div" ,classes:"imagesContainer" , components:[
					{tag:"div" ,classes:"cameraPicButton" , ontap:"openCamera"},
					{tag:"div" ,classes:"" , content:"unassigned images" ,ontap:"unassignedImages"}
				]}
            ]
        },
		{kind: "Panels", name:"listsPanels", fit:true, realtimeFit: true, draggable: false ,classes: "listsPanels", components: [
			{kind:"ExpensesList", name:"expenseList" ,type:"Expenses" ,classes:"listOffset"},
			{kind:"lista", name:"reportList" ,type:"Reports" ,style:"background:orange;"}
			
		]
		}
	],
	
	create: function() {
        this.inherited(arguments);
        this.$.reportsButton.addClass("selected", this.$.reportsButton);
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
            this.$.reportsButton.addClass("selected", this.$.reportsButton);
            this.$.expensesButton.removeClass("selected", this.$.expensesButton);
		}
		else if (inSender.getContent() ==='Reports'){
			this.$.listsPanels.setIndex(1);
            this.$.expensesButton.addClass("selected", this.$.expensesButton);
            this.$.reportsButton.removeClass("selected", this.$.reportsButton);
		}
		console.log(arguments);
		
	}
});