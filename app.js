Ext.application({
    name: 'tableWieveExtJs',
    requires: ['tableWieveExtJs.LocalStorageTools'],
    controllers: ['TableController',
        //'ColumnSelectionController',
        'ColumnSelectionController',
        'ColumnSelectionWindowController'],

        launch: function () {
        Ext.create('Ext.container.Viewport', {
            items: [
                {xtype: "userstable"}
            ]
        });
    }
});
