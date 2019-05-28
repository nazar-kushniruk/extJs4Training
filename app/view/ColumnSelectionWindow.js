Ext.define('tableWieveExtJs.view.ColumnSelectionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.selectionwindow',
    itemId: 'columnSelectionPopup',
    title: 'Configure',
    autoShow: true,
    modal: true,
    width: 600,
    height: 700,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [
                {
                    xtype: 'columnselectionview',
                    flex: 1
                }
            ],
            bbar: [
                '->',
                {
                    xtype: 'button',
                    text: 'Close',
                    handler: function () {
                        me.close();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Selected',
                    itemId: 'confirmButton',
                    disabled: true
                }
            ]
        });

        me.callParent(arguments);
    }
});