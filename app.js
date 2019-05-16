Ext.application({
    name: 'tableWieveExtJs',
    controllers: ['TableController',
        'ColumnSelectionController',
        'ColumnSelectionController',
        'ColumnSelectionWindowController'],
    views: ['ColumnSelectionWindow'],
    requires: ['tableWieveExtJs.Constants', 'tableWieveExtJs.Functions'],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            items: [
                {xtype: "userstable"}
            ]
        });
    }
});
