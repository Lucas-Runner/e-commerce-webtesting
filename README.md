# e-commerce-webtesting

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