enyo.kind({
    name:"Expense",
    kind:enyo.Control,
    tag:"div",
    classes:"expense",
    /* style: "border-bottom: 2px solid grey; " +
     "padding: 10px; margin: 10px; min-height: 20px;width:100% !important",
     */
    published:{
        amount:0,
        date:"",
        description:"",
        notes:"",
        title:"",
        validations:{}

    },


    components:[
        {tag:"div", classes:"expenseItems", components:[
            {tag:"div", classes:"expenseDetails", components:[
                {tag:"div", classes:"expenseTitle" ,name:"title"},
                {tag:"span", classes:"expenseDate" ,name:"date"},
                {tag:"span", classes:"expenseSpacer"},
                {tag:"span", classes:"expenseTime" ,name:"time"}
            ]},
            {tag:"div", classes:"expenseAmount", name:"amount" }
        ]}

    ],

    create:function () {
        this.inherited(arguments);
        this.titleChanged();
        this.dateChanged();
        this.timeChanged();
        this.amountChanged();
    },


    titleChanged:function () {
        this.$.title.setContent(this.title);
    },

    dateChanged:function () {
        this.$.date.setContent(this.dateFormatter(this.date)); //this.date is currently not handled
    },

    timeChanged:function () {
        this.$.time.setContent(this.TimeFormatter(this.date)); //this.date is currently not handled
    },

    amountChanged:function () {
        this.$.amount.setContent(this.amount);
    },

    dateFormatter:function (date) {

        //var d;// = new Date();
        //date ? d = new Date(date) : d = new Date();
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth();
        var curr_year = d.getFullYear();
        return curr_date + "." + curr_month + "." + curr_year + "  ";
    },

    TimeFormatter:function () {
        var d = new Date();
        var curr_min = d.getMinutes();
        var curr_hour = d.getHours();
        return curr_hour + ":" + curr_min + "  ";
    }
});	