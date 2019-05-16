Ext.define('tableWieveExtJs.view.TableView', {
    extend: 'Ext.container.Container',
    alias: ['widget.userstable'],
    items: [
        {xtype: "gridheader"},
        {xtype: "usergrid"}
    ]
});