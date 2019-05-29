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
        me.getColumnsConfiguration().forEach(function (item , index) {
                me.headerCt.insert(index, Ext.create('Ext.grid.column.Column', item));
            }
        );
        me.getView().refresh();
    },

    getColumnsConfiguration() {
        var data = Ext.getStore('AllColumnsStore').getSelectedColumnForGrid();

        return data.map(function (item) {
            return {
                text: item.name,
                dataIndex: item.name,
                flex: 1
            };
        });
    }
});
