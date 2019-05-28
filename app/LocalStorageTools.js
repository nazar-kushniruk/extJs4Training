Ext.define('tableWieveExtJs.LocalStorageTools', {
    singleton: true,
    alternateClassName: 'App.LocalStorageTools',
    STORAGE_SELECTED_COLUMNS_KEY: 'selectedColumns',

    getSelectedColumnsFromLocalStorage: function () {
        var selectedColumnsIds = localStorage.getItem(this.STORAGE_SELECTED_COLUMNS_KEY);
        return selectedColumnsIds ? selectedColumnsIds.split(',').map(i => +i) : [];
    },

    setSelectedColumnsToLocalStorage: function (data) {
        localStorage.setItem(this.STORAGE_SELECTED_COLUMNS_KEY, data);
    }
});

