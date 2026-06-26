const products = [

    {
        name:"iPhone 15",
        category:"phone",
        price:"$999"
    },

    {
        name:"Samsung Galaxy",
        category:"phone",
        price:"$799"
    },
    {
        name:"Samsung S24",
        category:"phone",
        price:"$999"
    },
    {
        name:"iPhone 15 pro",
        category:"phone",
        price:"$1999"
    },
     {
        name:"Mac Book Air",
        category:"phone",
        price:"$3199"
    },

    {
        name:"MacBook Pro",
        category:"laptop",
        price:"$1999"
    },
        {
        name:"Smart Watch pro",
        category:"watch",
        price:"$1999"
    },
    {
        name:"Dell",
        category:"laptop",
        price:"$1009"
    },
    {
        name:"HP",
        category:"laptop",
        price:"$1229"
    },
      {
        name:"ROG",
        category:"laptop",
        price:"$4009"
    },
      {
        name:"Lenova",
        category:"laptop",
        price:"$2009"
    },
      {
        name:"Assus",
        category:"laptop",
        price:"$1449"
    },
      {
        name:"IQ",
        category:"phone",
        price:"$1009"
    },
      {
        name:"Nothing Phone",
        category:"laptop",
        price:"$1009"
    },


    {
        name:"HP  300",
        category:"laptop",
        price:"$899"
    },


    {
        name:"Apple Watch 2",
        category:"watch",
        price:"$4919"
    }

];



const container = document.getElementById("productContainer");



function displayProducts(items){

    container.innerHTML="";


    items.forEach(product=>{


        container.innerHTML += `

        <div class="card">

            <h3>${product.name}</h3>

            <p class="category">
            ${product.category}
            </p>

            <p>
            ${product.price}
            </p>


        </div>

        `;


    });


}




function filterProducts(category){


    if(category === "all"){

        displayProducts(products);

    }

    else{


        const filtered = products.filter(product => 
            product.category === category
        );


        displayProducts(filtered);

    }


}



// initial display

displayProducts(products);