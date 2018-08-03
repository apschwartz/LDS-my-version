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
        helper.getAccountList(component);

        // Grab inputField needing to be reset.  Attempt to change it.
        var cmp = component.find("accountNameField");
        console.log("current value: " + cmp.get("v.value"));    // Display current value
        cmp.set("v.value", "a new value");                      // Change it (hopefully)
        console.log("new value: " + cmp.get("v.value"));        // Display updated value
    },

})