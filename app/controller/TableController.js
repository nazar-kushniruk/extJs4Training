Ext.define('tableWieveExtJs.controller.TableController', {
        extend: 'Ext.app.Controller',
        stores: ['TableStore'],
        models: ['TableModel'],
        views: [
            'Table','Edit'
        ],
        init() {
            console.log('Initialized Users! This happens before ' +
                'the Application launch() function is called');
            this.control({
                'viewport > mytable': {
                    itemdblclick: this.editUser
                },
                'useredit button[action=save]': {
                    click: this.updateUser
                }
            });
            //console.log('View', this.getDocumentsView());


            // reference the Documents store

        },
    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
    editUser: function(grid, record) {
            // Ext.create('widget.useredit')
            var view = Ext.widget('useredit');
            view.down('form').loadRecord(record);


        console.log('Double clicked on ' + record.get('name'));
        console.log('Double clicked on ' + record.get('email'));

    },
    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form');
        record = form.getRecord(),
            values = form.getValues();
        record.set(values);
        win.close();
        // synchronize the store after editing the record
        this.getTableStoreStore().sync();

        console.log('clicked the Save button win->', win);
        console.log('clicked the Save button', form);
        console.log('clicked the Save record', record);
        console.log('clicked the Save values', values);
    }
    }
);