Ext.define('tableWieveExtJs.view.ColumnSelectionView', {
    extend: 'Ext.container.Container',
    alias: 'widget.columnselectionview',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    initComponent: function () {
        this.items = [
            {
                xtype: 'columnList',
                itemId: 'avaliableColumns',
                store: 'AllColumnsStore',
                listTemplate: new Ext.XTemplate(
                    '<tpl>',
                    '   <div>{name}</div> <button class="add-button">+</button>',
                    '</tpl>'
                )
            },
            {
                xtype: 'columnList',
                itemId: 'selectedColumns',
                store: 'SelectedColumnsStore',
                listTemplate: new Ext.XTemplate(
                    '<tpl>',
                    '   <div>{name}</div> <button class="close-button">x</button>',
                    '</tpl>'
                )
            }
        ];
        this.callParent(arguments);
    }

});