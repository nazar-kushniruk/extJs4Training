Ext.define('tableWieveExtJs.view.ColumnSelectionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.selectionwindow',
    itemId:'selectionwindowId',
    title: 'Configure',
    autoShow: true,
    modal: true,
    initComponent: function () {
        this.items = [
            {
                xtype: 'columnselectionview'
            }

        ],
           /* this.bbar = [
            { xtype: 'button', text: 'Button 1' }
        ]*/
            this.bbar = ['->', {
            xtype: 'button',
            text: 'Close',
            handler: function(){
                 this.up('selectionwindow').close();
               //this.close();
            }
        }, {
            xtype: 'button',
            text: 'Selected',
            handler: function(a){
                console.log('storedColumns-> ',this.up().up());
                //this.up('selectionwindow').close();
            }
        }];
        this.callParent(arguments);
    }

});