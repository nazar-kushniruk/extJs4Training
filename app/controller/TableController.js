Ext.define('tableWieveExtJs.controller.TableController', {
        extend: 'Ext.app.Controller',
        stores: ['TableStore', 'AllColumnsStore', 'TestStore'],
        views: [
            'TableView',
            'HeaderView',
            'GridView'
        ],
        init() {
            this.control({
                '#configureColumns': {
                    click: this.onConfigureColumnsClick
                },
                'userstable': {
                    beforerender: this.onUserTableRender
                }
            });
        },

        onConfigureColumnsClick: function (button) {
            var grid = button.up('userstable').down('usergrid');
            Ext.create('tableWieveExtJs.view.ColumnSelectionWindow', {
                onSaveCallback: function () {
                    grid.updateColumns();
                }
            }).show();
        },
        onUserTableRender: function (view) {
            Ext.getStore('AllColumnsStore').getAllColumns();
            // Ext.getStore('SelectedColumnsStore').getSelectedColumns();
            Ext.getStore('SelectedColumnsStore').load();
            Ext.getStore('AvailableColumnsStore').getData();
        }
    }
);