Ext.define('tableWieveExtJs.templates.ButtonTpl', {
    extend: 'Ext.XTemplate',
    alias: 'ButtonTpl',
    title: 'myButton',
    constructor: function (props) {
        var me = this;
        Ext.apply(me, props || {});
        me.callParent([
            '<tpl>',
            '<button> {[this.getTitle()]} </button>',
            '</tpl>'
        ]);
    },
    getTitle: function () {
        return this.title;
    }
});

