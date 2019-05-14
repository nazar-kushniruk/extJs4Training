


Ext.application({
    name: 'tableWieveExtJs',

   /*  models: ['TableModel'],*/
    controllers: ['TableController'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            items: [
                {xtype: "mytable"}
              /*  {
                    xtype: 'panel',
                    title: 'Внутренняя панель 2',
                    height: 100,
                    width: '100%',
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Внутренняя панель 3',
                            height: 100,
                            width: '100%'
                        }
                    ]

                }*/
            ]
        });
    }
});
