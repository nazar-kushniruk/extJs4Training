 /*Ext.define('tableWieveExtJs.store.TableStore', {
    extend: 'Ext.data.Store',
    model: 'tableWieveExtJs.model.TableModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'users.json',
        reader: {
            type: 'json'
        }
    }
});*/

/*
var store = Ext.create('Ext.data.Store', {
    model: 'Table',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'users.json',
        reader: {
            type: 'json',
            root: 'users'
        }
    }
});*/
 Ext.define('tableWieveExtJs.store.TableStore', {
     extend: 'Ext.data.Store',
     model: 'tableWieveExtJs.model.TableModel',
     autoLoad: true,
    // fields: ['name', 'email'],
     // data: [
     //     {name: 'Ed',    email: 'ed@sencha.com'},
     //     {name: 'Tommy', email: 'tommy@sencha.com'}
     //
     // ]

     proxy: {
         type: 'ajax',
        // url: 'users1.json',
         api: {
             read: 'data/users.json',
             update: 'data/updateUsers.json'
         },
         reader: {
             type: 'json',
             root: 'users',
             successProperty: 'success'
         }
     }
 });