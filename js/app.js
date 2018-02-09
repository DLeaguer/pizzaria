var extra = [
	{pizzaName: "The Main Event",
	space: " ",
	image: '../assets/organic.gif',
	description: "A delightful combination of organic onions, peppers and tomatoes mixed with grass-fed 100% wagyu beef makes this pizza, dare we say.....Dynamic!", 
	price: 39.99,
	},
	{pizzaName: "My Subways",
	space: " ",
	image: '../assets/subway.gif',
	description: "Paying homage to our favorite sandwich shop Subways, we create your favorite sub as a pizza! Don't you dare miss this train!",
	price: 21.99,
	},
	{pizzaName: "Panda Express",
	space: " ",
	image: '../assets/chinese.gif',
	description: "East definitely meets West in this terrific union. Enjoy your favorite Panda Express flavors of Orange Chicken, Broccoli Beef, Kung Pao Chicken or Honey Walnut Shrimp in a different way.",
	price: 16.88,
	},
	{pizzaName: "Tex Mex",
	space: " ",
	image: '../assets/mexican.gif',
	description: "Build pizzas not walls is the theme for this mex. We draw inspiration from your local cantina to create this masterpiece.",
	price: 21.21,
	}
	];

	var getPizza = document.getElementsByClassName('pizza');

	function listLunch(lunch){
	for (var i=0; i<lunch.length; i++){
		// console.log(lunch[i]);
		// console.log(lunch[i].pizzaName);
		// console.log(lunch[i].description);
		// console.log(lunch[i].price);
		
		var pizzaElem = document.createElement('div');
		pizzaElem.className = 'pizza';
		menu.appendChild(pizzaElem);

		var pElem = document.createElement("p");
		pElem.className = "pizzaName";
		pElem.innerHTML = lunch[i].pizzaName;
		pizzaElem.appendChild(pElem);

		var divElem = document.createElement("p");
		divElem.className = 'space';
		divElem.innerHTML = lunch[i].space;
		pizzaElem.appendChild(divElem);

		var imgElem = document.createElement("img");
		imgElem.className = 'image';
		imgElem.src = lunch[i].image;
		pizzaElem.appendChild(imgElem);
		
		var foodElem = document.createElement("p");
		foodElem.className = "description";
		foodElem.innerHTML = lunch[i].description;
		pizzaElem.appendChild(foodElem);
		
		var priceElem = document.createElement("p");
		priceElem.className = "price";
		priceElem.innerHTML = lunch[i].price;
		pizzaElem.appendChild(priceElem);

	}
}
listLunch(extra);
