enyo.kind({
	name: "WizardManager",
	kind: "FittableRows",
    classes: "enyo-fit wizard-manager",
	components:[
        {tag:"div" , classes:"wizard-backBtn" ,ontap:"goPrev"},
        {name : "title" , content: localize.pageOne.newExpense ,classes:"title"},
		{kind: "Panels", name:"wizardPanel", fit:true, realtimeFit: true, draggable: false ,classes: "enyo-border-box wizard-panel", components: [

            {kind:"Control" ,components:[
					{kind:"pageOne" ,classes:"wizard-page"},
					{tag:"Button" ,classes:"next" ,content:"next" ,ontap:"goNext"}
				]},
				{kind:"Control",components:[
					{kind:"pageTwo" ,classes:"wizard-page"},
					{kind:"Button" ,content:"next" ,ontap:"goNext"}
				]},
				{kind:"Control",components:[
					{kind:"pageThree"},
					{kind:"Button" ,content:"Save" ,ontap:"save"},
					{kind:"Button" ,content:"Submit Report" ,ontap:"submitReport"}
				]}
			]
		}],

    create : function(){

        this.createdExpense = new DataManager.models.Expense({});
        this.inherited(arguments);
    },

  /*  create:function(){
        //

    },
*/

		goNext:function(){
            /*
            * var a = this.$.wizardPanel.getActive()
            * var b = a.children[0] //page[i]
            * b.addDataToModel(this.createdExpense) - a method that adds the data to the model
            * */
			this.$.wizardPanel.next();
		},
		goPrev:function(){
			this.$.wizardPanel.previous();
		},
        holder: function(){
            debugger;
            this.$.title;

        },
        save : function(){

        },

		submitReport: function(){
			alert('submit report not implemented yet');
		}

});
