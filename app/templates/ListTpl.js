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
            '   <div class="{[this.getItemClassName()]}">',
            '       <div class="item-id">{id}</div>',
            '       <div class="item-name">{name} </div> ',
            '       {[this.getButton()]}',
            '   </div>',
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