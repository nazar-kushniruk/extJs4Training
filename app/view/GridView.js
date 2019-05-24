Ext.define('tableWieveExtJs.view.GridView', {
    alias: ['widget.usergrid'],
    id: 'usergridId',
    extend: 'Ext.grid.Panel',
    title: 'Users',
    store: 'TableStore',
    initComponent: function () {
        var  store  = Ext.getStore('AllColumnsStore').load();

        Ext.apply(this,{columns: store.getSelectedColumnForGrid() || []})

        this.callParent(arguments);
    },

    updateCol(c){
        var me = this;
        me.headerCt.removeAll();
        Ext.getStore('AllColumnsStore').getSelectedColumnForGrid().map(function (i) {
                            me.headerCt.insert(me.columns.length, Ext.create('Ext.grid.column.Column', i));
                        });

                        me.getView().refresh();

    }



});
