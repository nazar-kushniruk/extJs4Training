Ext.define('tableWieveExtJs.templates.ListTpl', {
    extend: 'Ext.XTemplate',
    alias: 'listTpl',
    button: '',
    itemClassName: 'list-item',
    backgroundColor: 'white',
    constructor: function (props) {

        var me = this;
        Ext.apply(me, props || {});
        me.callParent([
            '<tpl for=".">',
            '<div class="{[this.getItemClassName()]}"> {name} {[this.getButton(values)]}</div>',
            '</tpl>'
        ]);
    },

    getItemClassName: function(){
        return this.itemClassName;
    },
    getButton: function (values) {
        return this.button;
    }
});