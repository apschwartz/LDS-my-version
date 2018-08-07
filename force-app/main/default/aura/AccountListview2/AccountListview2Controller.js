({
    doInit: function (component, event, helper) {
        // Fetch the account list from the Apex controller
        helper.getAccountList(component);

        component.set('v.accountColumns', [
            {
                label: 'Account name',
                fieldName: 'Name',
                type: 'text',
                cellAttributes: { iconName: 'standard:account' }
            },
            {
                label: 'Account ID',
                fieldName: 'Id',
                type: 'text',
                actions: []
            }
        ]);

    },

    saveComplete: function (component, event, helper) {
        // Hide recordEditForm to force input field value to be cleared.
        component.set("v.showREform", false);

        helper.getAccountList(component);
    },

})