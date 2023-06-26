    // Adding Adress and billing info

    const adressTitle = newTab.locator("[id='adress_label']");
    const firstName = newTab.locator("[id='address_firstname']");
    const lastName = newTab.locator("[id='address_lastname']");
    const adress = newTab.locator("[id='address_address1']");
    const adressContd = newTab.locator("[id='address_address2']");
    const city = newTab.locator("[id='address_city']");
    const state = newTab.locator("[id='address_state_id']");

    await newTab.locator('a[data-method="get"][href="/addresses/new"]').click();

    const dropboxField = await newTab.locator("[id='address_state_id']");
    await dropboxField.click();

    // Wait for the dropdown options to be visible
    await newTab.waitForSelector('.select2-results__option');

    const desiredStateValue = '483'; // Replace with the desired state value

    // Select the desired state option by its value
    const stateOption = await newTab.locator('.select2-results__option[value="' + desiredStateValue + '"]').first();
    await stateOption.click();


