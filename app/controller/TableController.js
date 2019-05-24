Ext.define('tableWieveExtJs.controller.TableController', {
        extend: 'Ext.app.Controller',
        stores: ['TableStore', 'AllColumnsStore', 'TestStore'],
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
                'userstable': {
                    beforerender: this.onBeforeUserTableRender
                },
                'AllColumnsStore': {
                    load: function () {
                        console.log('!!! AllColumnsStore Load!!')
                    }
                }
            });
            this.listen({
                store: {
                    '#AllColumnsStore': {
                        load: this.onBeforeUserTableRender
                    }
                }

            })
        },

        onConfigureColumnsClick: function (button) {
            var grid = button.up('userstable').down('usergrid');
            Ext.create('tableWieveExtJs.view.ColumnSelectionWindow', {
                onSaveCallback: function () {
                    grid.updateColumns();
                }
            }).show();
        },
        onBeforeUserTableRender: function ( me, records, successful) {
            console.log('!!! usergrid beforerender!!', me);
            console.log('!!! usergrid beforerender!!', records);
          /*  setTimeout(function () {
                console.log('!!! usergrid beforerender!! setTimeout', Ext.getStore('AllColumnsStore').getSelectedColumnForGrid());
            }, 1000);
*/
           // console.log('!!! usergrid beforerender!!', this.getView('GridView'));
            //  this.getModel('tableWieveExtJs.model.TableModel').setFields( Ext.getStore('AllColumnsStore').getSelectedColumnForGrid());
            //  Ext.getStore('SelectedColumnsStore').getSelectedColumns();
            //  Ext.getStore('SelectedColumnsStore').load();
            // Ext.getStore('AvailableColumnsStore').getData();
        }
    }
);