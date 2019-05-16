Ext.define('tableWieveExtJs.controller.TableController', {
        extend: 'Ext.app.Controller',
        stores: ['TableStore', 'AllColumnsStore'],
        views: [
            'TableView',
            'HeaderView',
            'GridView'
        ],
        init() {
            this.control({
                '#configureColumns': {
                    click: this.onConfigureColumnsClick
                }
            });
        },

        onConfigureColumnsClick: function (button) {
            var grid = button.up('userstable').down('usergrid');
            Ext.create('tableWieveExtJs.view.ColumnSelectionWindow', {
                onSaveCallback: function(){
                    grid.updateColumns();
                }
            }).show();
        }
    }
);