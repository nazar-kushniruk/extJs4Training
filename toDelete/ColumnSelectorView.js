// Ext.define('tableWieveExtJs.view.ColumnSelectorView', {
//     extend: 'Ext.Container',
//     alias: ' widget.columnSelector',
//     xtype: 'basic-panels',
//  /*   width: 660,*/
//     tdAttrs: { style: 'margin : auto;' },
//     requires: [
//         'Ext.layout.container.Table',
//         'Ext.panel.Panel',
//         'tableWieveExtJs.Constants'
//     ],
//
//     layout: {
//         type: 'table',
//         columns: 2,
//         tdAttrs: { style: 'padding-top : 20px;' }
//     },
//
//     defaults: {
//         xtype: 'panel',
//         width: 200,
//         height: 200,
//         bodyPadding: 10
//     },
//
//     initComponent: function () {
//         this.items = [
//             {
//                 xtype: 'columnList',
//
//             }
//             /*{   title: 'Selected',
//
//                 html:  tableWieveExtJs.Constants.DEFAULT_COLUMNS.map(function (item) {
//                     return "<div >"+ item + "</div>";
//                 }),
//                 tools: [
//                     { type:'pin' },
//                     { type:'refresh' },
//                     { type:'search' },
//                     { type:'save' }
//                 ],
//             },
//             {
//                 title: 'All',
//                 html:  tableWieveExtJs.Constants.ALL_COLUMNS.map(function (item) {
//                     return "<div>"+ item + "</div>";
//                 }),
//             }*/
//         ];
//
//         this.callParent();
//     }
// });
//
// /*
// Ext.define('tableWieveExtJs.view.ColumnSelectorView', {
//     extend: 'Ext.panel.Panel',
//     alias: 'widget.columnSelector',
//
//     title: 'Edit User',
//    // layout: 'fit',
//    /!* autoShow: true,
//     width: 500,
//     height : 100,
//     border : true,
//     frame : true,*!/
//     initComponent: function() {
//         this.items = [
//             {
//                 xtype: 'panel',
//                 items: [
//                     {
//                         xtype: 'panel',
//                         name : 'name',
//                         fieldLabel: 'Name'
//                     },
//                     {
//                         xtype: 'container',
//                         name : 'email',
//                         fieldLabel: 'Email'
//                     }
//                 ]
//             }
//         ];
//
//         this.buttons = [
//             {
//                 text: 'Save',
//                 action: 'save'
//             },
//             {
//                 text: 'Cancel',
//                 scope: this,
//                 handler: this.close
//             }
//         ];
//
//         this.callParent(arguments);
//     }
// });*/
//
