Ext.define('tableWieveExtJs.view.ColumnListView', {
        extend: 'Ext.view.View',
        alias: 'widget.columnList',
        width: 250,
        height: 500,
        backgroundColor: 'white',
        border:1,
        itemSelector: 'div.list-item',
        emptyText: 'No columns selected',

        /*initComponent: function () {
            var me = this;
            Ext.apply(me, {
                tpl: this.listTemplate
            });
            console.log('ColumnListView.listTemplate ->',  this.listTemplate);
            me.callParent(arguments);
        }*/
    }
);

``