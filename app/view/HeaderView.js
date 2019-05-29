Ext.define('tableWieveExtJs.view.HeaderView', {
    alias: ['widget.gridheader'],
    extend: 'Ext.container.Container',
    padding: 10,
    margin: '0 0 10 0',
    items: [{
        xtype: 'button',
        text: 'Configure columns',
        itemId: 'configureColumns'
    }]
});