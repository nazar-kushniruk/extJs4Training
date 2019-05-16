Ext.define('tableWieveExtJs.view.GridView', {
    alias: ['widget.usergrid'],
    extend: 'Ext.grid.Panel',
    title: 'Users',
    store: 'TableStore',
    columns: [
        { text: 'Id',  dataIndex: 'id',  flex: 1 },
        { text: 'Name',  dataIndex: 'name',  flex: 1 },
        { text: 'UserName',  dataIndex: 'username',  flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Website', dataIndex: 'website', flex: 1 }
    ]
});
