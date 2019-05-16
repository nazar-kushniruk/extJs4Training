Ext.define('tableWieveExtJs.view.ColumnSelectionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.selectionwindow',
    itemId:'selectionwindowId',
    title: 'Configure',

    autoShow: true,
    initComponent: function () {
        this.items = [
            {
                xtype: 'columnselectionview'
            }
        ];
        this.callParent(arguments);
    }

});