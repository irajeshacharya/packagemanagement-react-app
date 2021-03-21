React App For Package Management

## Prerequisites
1. First clone the server side code repository and run **packagemanagement** as Spring Boot app.
2. Create Product and Packages using REST APIs.
3. **Bypassing CORS Rules** : All REST APIs are invoked using credentials internally in the react app. Allowing traffic only from **http://localhost:3000** at server side. Install following to avoid CORS blocking. `FireFox Browser : Allow CORS: Access-Control-Allow-Origin or CORS Everywhere` `Googel Chrome Browser : CORS Unblock`

## Note
Since database is not being used at the server side to have the simplified app, terminating of the server leads to losing of data.


## Storage
Designed front end as a thin client so no storage is done at Client Side.

## Code Structure
#### App.js
First point of invocation when pages are loaded. All the apis from different points are invoked from here.

This Contains majorly 3 Components :

	1. Navbar
	2. Packages
	3. Cart

Used **React Route** to switch between **Packages** and **Cart**.

#### Navbar.jsx
Mainly used for Navigation. This contains following components.

	1.	Logo
	2.	Search Bar
	3.	Show Cart Items

#### SearchBar.jsx
Performs case-insensitive serarch on available packges to help user to find the item quickly.

#### Packages.jsx
Responsible for loading list of packages when object is recieved using **Pack** module.
	
#### Pack.jsx
This represents individual package. Main functionalities are 

	1.	Displaying Package Details
	2.	Allowing user to add to the cart

#### Cart.jsx
Represents user cart. Based on count of items present in the cart loads respective component. Main Functionalities are :

	1.	Loading cart item
	2. 	Allowing User to increment or decrement 
	3. Empty the cart

#### CartItem.jsx
CartItem object Represents individual item present in the cart i.e product. So this component renders Item Present in the cart.

#### styles.js
Each component has its own stylesheet which is applied while rendering of the same.

## Screens

#### Home Screen
List of available packages are displayed.

![Home Screen](Images/HomeScreen.png)

#### Package
Package Details. Allows user to add the package to the cart.

![Home Screen](Images/Package.png)

#### Search Package
A Search Bar present on Navigation Bar to help user to search the Package.

![Home Screen](Images/Search.png)

#### Empty Cart
Initially user won't be having item in the cart. An empty screen is displayed with the link **start adding some!**, clicking on which will redirect the user to the home screen.

Notice **Search Box** and **Cart** buttons are not rendered in this page.

![Home Screen](Images/EmptyCart.png)

#### Add Packge
Home Screen allows user to add package to the screen by clicking on **Add to Cart** button which is available on the each package.

![Home Screen](Images/PackageAddedToTheCart.png)

#### Cart
Displays item present in the cart and allows user to do various operations.

![Home Screen](Images/Cart.png)

#### Increment the Package Count
In Cart page if the package is already exist by clicking on **+** button (next to the quantiy of the package) user can increment the count of the package.

Before Increment :
![Home Screen](Images/BeforeIncrement.png)

After Increment :
![Home Screen](Images/AfterIncrement.png)

#### Decrement the Package Count
In Cart page if the package is already exist by clicking on **-** button (next to the quantiy of the package) user can decrement the count of the package.

Before Decrement :
![Home Screen](Images/BeforeDecrement.png)

After Decrement :
![Home Screen](Images/AfterDecrement.png)

#### Remove a Package
Allows user to remove a package from the cart.

Before Remove :
![Home Screen](Images/BeforeRemove.png)

After Remove :
![Home Screen](Images/AfterRemove.png)

#### Discount
Buying **more than 1 Package** gives user **10% Discount** on total amount.

Without Discount :
![Home Screen](Images/WithoutDiscount.png)

With Discount :
![Home Screen](Images/WithDiscount.png) 

#### Empty Cart
At one go user can remove all the items present in the cart by clicking on empty cart.

Before Empty Cart :
![Home Screen](Images/BeforeClickEmptyCart.png)

After Empty Cart :
![Home Screen](Images/AfterClickEmptyCart.png)
