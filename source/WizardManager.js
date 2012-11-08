enyo.kind({
	name: "WizardManager",
	kind: "FittableRows",
    classes: "enyo-fit wizard-manager",
	components:[
		{kind: "Panels", name:"wizardPanel", fit:true, realtimeFit: true, draggable: true ,classes: "enyo-border-box wizard-panel", components: [
				{kind:"Control" ,components:[
					{tag:"div" , classes:"wizard-backBtn" ,ontap:"goPrev"},
					{kind:"pageOne" ,classes:"page-one"},
					{kind:"Button" ,content:"next" ,ontap:"goNext"}
				]},
				{kind:"Control",components:[
					{kind:"Button" ,content:"prev" ,ontap:"goPrev"},
					{kind:"pageTwo"},
					{kind:"Button" ,content:"next" ,ontap:"goNext"},
				]},
				{kind:"Control",components:[
					{kind:"Button" ,content:"prev" ,ontap:"goPrev"},
					{kind:"pageThree"},
					{kind:"Button" ,content:"Submit Report" ,ontap:"submitReport"}
				]}				
			]
		}],
		goNext:function(){
			this.$.wizardPanel.next();
		},
		goPrev:function(){
			this.$.wizardPanel.previous();
		},
		submitReport: function(){
			alert('submit report not implemented yet');
		}
	
});
