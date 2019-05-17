Ext.define('tableWieveExtJs.view.ColumnSelectionView', {
    extend: 'Ext.container.Container',
    alias: 'widget.columnselectionview',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    width: 800,
    initComponent: function () {
        this.items = [
            {
                title: 'Avalable',
                xtype: 'columnList',
                itemId: 'avaliableColumns',
                store: 'AllColumnsStore',
                tpl: Ext.create('tableWieveExtJs.templates.ListTpl', {
                    button: '<button class="add-item-button">+</button>'

                })
            },
            {
                title: 'Selected',
                xtype: 'columnList',
                itemId: 'selectedColumns',
                store: 'SelectedColumnsStore',
                tpl: Ext.create('tableWieveExtJs.templates.ListTpl', {
                    button: '<button class="remove-item-button">x</button>'
                })
            }
        ];
        this.callParent(arguments);

    }

});