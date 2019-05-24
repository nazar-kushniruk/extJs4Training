Ext.define('tableWieveExtJs.controller.TableController', {
        extend: 'Ext.app.Controller',
        stores: ['TableStore', 'AllColumnsStore'],
        views: [
            'TableView',
            'HeaderView',
            'GridView'
        ],
        models: ['tableWieveExtJs.model.TableModel'],
        init() {
            this.control({
                '#configureColumns': {
                    click: this.onConfigureColumnsClick
                },

            })
        },

        onConfigureColumnsClick: function (button) {
            var grid = button.up('userstable').down('usergrid');
            Ext.create('tableWieveExtJs.view.ColumnSelectionWindow').show();
        }
    }
);