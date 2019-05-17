Ext.define('tableWieveExtJs.templates.ButtonTpl', {
    extend: 'Ext.XTemplate',
    alias: 'ButtonTpl',
    title: 'myButton',
    constructor: function(props){
        var me = this;
        Ext.apply(me, props || {});
        me.callParent([
            '<tpl>',
            '<button> {[this.getTitle()]} </button>',
            '</tpl>'
        ]);
        console.log('ButtonTpl -> ', this);
    },
    getTitle: function () {
        return this.title;
    }
});
// to use in another template
// Ext.create('tableWieveExtJs.templates.ButtonTpl',{
//     title: 'plus'
// }).apply()