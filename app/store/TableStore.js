Ext.define('tableWieveExtJs.store.TableStore', {
     extend: 'Ext.data.Store',
     model: 'tableWieveExtJs.model.TableModel',
     autoLoad: true,
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