# E-commerce app technical reference guide

## App working

```
//App component

//Header component(present in all)
	//CartIcon
	//if hidden==false
		//render CartDropDown
		//loop over cartItems from prop and render CartItem
			 //render CartItem

	//if path='/' Load HomePage component
		 //Homepage-load the Directory Component
				 //Directory- Iterate over sections data and load MenuItem(has sections[{title,imageUrl,id,linkUrl},{}..] )
						 //MenuItem-render the ind sections

//if path='/:item' eg-/hats
	 //render ShopPage component  collections:[{ id,title,routeName,items:[{},{}] },{}...]
	 // iterate over array of objects and render CollectionPreview for Each category
			//CollectionPreview props title,items[{id,name,imageUrl,price},{},{}.....]
			// will filter first 4 items from items[{},{}]
				//render CollectionItem props-id,name,imageUrl,price
				// render the item card with image,price,name

	//if path='/signin'
		//render the signin-and-signup component which is a normal page component
			//render SignIn component which contains the form
				 //render FormInput which displays the styled inputs
				 //render CustomButton to render the styled button
			//render SignUp component which contains the form
				 //render FormInput which displays the styled inputs
				 //render CustomButton to render the styled button
```
