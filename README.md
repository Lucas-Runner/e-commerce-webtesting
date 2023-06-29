# e-commerce-webtesting

-------------------------------------------

# Test Helpers

## executeRegistration

The `executeRegistration` function is defined as "registration.js" in the "helpers" directory.
It's function is to execute the repeated procedure of registration before tests that require such step.

### Function Steps:

1. Randomly generate a string using the random character generator.
2. Create a new URL by replacing the "random" placeholder in the base URL with the generated string.
3. Create a new email address using the generated string.
4. Create a new browser context.
5. Create a new page within the browser context.
6. Navigate to the generated URL using the page.
7. Create a new tab within the browser context.
8. Navigate to the e-commerce website home page using the new tab.
9. Click on the account button.
10. Click on the "Sign up" link.
11. Type the generated email address into the email input field.
12. Set a fixed password for the registration process.
13. Confirm the password.
14. Click on the registration button.
15. Return the generated email address, new tab, and page for further use.

## executeBillingAddress

The `executeBillingAddress`function is defined as "executeBillingAddress.js" in the "helpers" directory.
It's funcion is to execute the repeated procedure of filling user billing data before steps that require such action.

### Function Steps:

1. Locate the necessary input fields for the billing address and billing information on the page.
2. Create locators for each input field:
   - First Name
   - Last Name
   - Address
   - Address Continued
   - City
   - Zip Code
   - Phone
   - State
   - Save button
3. Set the desired text values for each input field:
   - First Name: "Lucas"
   - Last Name: "Silva"
   - Address: "Billing Street 999"
   - Address Continued: "apartment n° 1040"
   - City: "Columbus"
   - Zip Code: "44039"
   - Phone: "555-0123456"
   - State: "Ohio"
4. Fill in the input fields with the respective text values.
5. Select the desired state from the dropdown list.
6. Click on the save button.
7. Return the new tab and the filled billing address information for further use.
-------------------------------------------

# Test Scenario 1: E-commerce Website Registration

This test verifies the functionality of the registration page.

## Test Steps

1. Set up the test environment by importing the necessary modules and helper functions.
2. Execute the registration process using the `executeRegistration` helper function. (Function described in Helpers section)
3. Perform assertions to check the following:
   - The page contains the expected search page text "My Account".
   - The page displays the registered email in the user information section.
   - The current URL matches the expected account URL.
4. Wait for a 5-second timeout to allow the page to load.

----------------------------------------

# Test Scenario 2: Login Procedure

This test scenario verifies the functionality of the login procedure of the website.

## Test Steps

1. Set up the test environment by importing the necessary modules and helper functions.
2. Execute the registration process using the `executeRegistration` helper function to obtain the necessary login credentials.
3. Perform the login procedure by following these steps:
   - Click on the account button.
   - Click on the "Log out" button (Log-Out: executeRegistration helper funtion results in a logged-in tab, needs to log-out prior to log-in testing).
   - Navigate back to the home page.
   - Click on the account button.
   - Click on the "Log in" link.
   - Fill in the email and password fields with the registered credentials.
   - Click on the login button.
4. Perform assertions to check the following:
   - The page contains the expected search page text "My Account".
   - The page displays the registered email in the user information section.
   - The current URL matches the expected account URL.
5. Wait for a 5-second timeout to allow the page to load.

------------------------------------------

# Test Scenario 3: Adding a Product to the Cart

This test scenario verifies the functionality of adding a product to the cart on an e-commerce website using the Playwright framework.

## Test Steps

1. Set up the test environment by importing the necessary modules and helper functions.
2. Execute the registration process using the `executeRegistration` helper function to obtain the necessary credentials.
3. Perform the following steps:
   - Click on the website logo to return to the home page.
   - Click on the "Shop Now" button.
   - Select the first product.
   - Retrieve the name of the selected product.
   - Click on the "Add to Cart" button.
   - View the cart.
   - Retrieve the name of the product in the cart.
4. Perform an assertion to check if the product name matches between the selected product and the cart.
5. Wait for a 5-second timeout to allow the page to load.

-----------------------------------------   

# Test Scenario 4: Full Purchase Procedure

This test scenario verifies the functionality of the full purchase procedure on an e-commerce website using the Playwright framework.

## Test Steps

1. Set up the test environment by importing the necessary modules and helper functions.
2. Execute the registration process using the `executeRegistration` helper function to obtain the necessary information.
3. Perform the following steps:
   - Return to the home page.
   - Click on the "Shop Now" button.
   - Select the first product.
   - Click on the "Add to Cart" button.
   - View the cart.
   - Proceed to checkout by clicking the checkout link.
   - Perform the billing address filling procedure using the `executeBillingAddress` helper function.
   - Proceed to the shipment and payment options.
   - Click on the "Save" button.
   - Fill in the card number, card expiry, and card code fields.
   - Click on the "Save" button.
4. Perform assertions to check the following:
   - The order details page contains the first name, last name, address, city, and zip code information.
5. Wait for a 5-second timeout to allow the page to load.