Ext.define('tableWieveExtJs.controller.TableController', {
    extend: 'Ext.app.Controller',
    stores: ['TableStore', 'AllColumnsStore'],
    views: [
        'TableView',
        'HeaderView',
        'GridView'
    ],
    models: ['tableWieveExtJs.model.TableModel'],

    refs: [
        {
            ref: 'userTable',
            selector: '#usergridId'
        }
    ],

    init() {
        this.listen({
            store: {
                '#AllColumnsStore': {
                    load: this.onAllColumnsStoreLoad
                }
            }
        });
        this.control({
            '#configureColumns': {
                click: this.onConfigureColumnsClick
            }
        });

    },

    onConfigureColumnsClick: function () {
        var me = this;

        Ext.create('tableWieveExtJs.view.ColumnSelectionWindow', {
            onSaveCallback: function () {
                me.getUserTable().updateGridColumns();
            }
        });
    },

    onAllColumnsStoreLoad: function (store, records, successful) {
        var me = this,
            grid = me.getUserTable();

        if (successful && grid) {
            grid.updateGridColumns();
        }
    }
});