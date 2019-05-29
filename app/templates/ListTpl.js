Ext.define('tableWieveExtJs.templates.ListTpl', {
    extend: 'Ext.XTemplate',
    alias: 'listTpl',
    actionButton: '',
    constructor: function (props) {
        var me = this;

        Ext.apply(me, props || {});
        me.callParent([
            '<tpl for=".">',
            '   <div class= "list-item",>',
            '       <div class="item-id">{id}</div>',
            '       <div class="item-name">{name} </div> ',
            '       {[this.getTplButton()]}',
            '   </div>',
            '</tpl>'
        ]);
    },

    getTplButton: function () {
        return this.actionButton || '';
    }
});