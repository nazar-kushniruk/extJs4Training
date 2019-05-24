Ext.define('tableWieveExtJs.view.ColumnSelectionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.selectionwindow',
    itemId: 'selectionwindowId',
    title: 'Configure',
    autoShow: true,
    modal: true,
    initComponent: function () {
        this.items = [
            {
                xtype: 'columnselectionview'
            }

        ];

        this.bbar = ['->', {
            xtype: 'button',
            text: 'Close',
            handler: function () {
                this.up('selectionwindow').close();

            }
        }, {
            xtype: 'button',
            text: 'Selected',
            itemId: 'confirmButton',
            disabled: true
        }];
        this.callParent(arguments);
    }

});