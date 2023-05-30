let userContainer=document.getElementById("products");
const getProducts=()=>{
   return fetch('https://dummyjson.com/products?limit=8')
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error.message)
};


const displayProducts=async()=>{
    const users=await getProducts();
    console.log(users.products);
    users.products.map(item=>{
        let div = document.createElement("div");
        div.className="imagez"
        let img = document.createElement("img");
        let title = document.createElement("h2");
        let description =document.createElement("p");

        img.src=item.images;
        title.innerHTML=item.title;
        description.innerHTML=item.description;


        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(description);

        userContainer.appendChild(div);

    })

}
displayProducts();
