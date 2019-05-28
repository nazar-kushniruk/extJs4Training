Ext.define('tableWieveExtJs.view.GridView', {
    alias: ['widget.usergrid'],
    id: 'usergridId',
    extend: 'Ext.grid.Panel',
    title: 'Users',
    store: 'TableStore',
    initComponent: function () {
        Ext.apply(this, {
            columns: this.getColumnsConfiguration()
        });

        this.callParent(arguments);
    },

    updateGridColumns() {
        var me = this;

        me.headerCt.removeAll();
        me.getColumnsConfiguration().forEach(function (i) {
                me.headerCt.insert(me.columns.length, Ext.create('Ext.grid.column.Column', i));
            }
        );
        me.getView().refresh();
    },

    getColumnsConfiguration() {
        var store = Ext.getStore('AllColumnsStore').load(),
            data = store.getSelectedColumnForGrid();

        return data.map(function (item) {
            return {
                text: item.name,
                dataIndex: item.name,
                flex: 1
            };
        });
    }
});
