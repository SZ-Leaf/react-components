function Product() {

   const nameProduct = [
      {
            title: "aspirateur" ,
            price:20 ,
            IsPublished:true,
      },
      {
            title: "canne a peche" ,
            price:150 ,
            IsPublished: false,
      },
      {
            title:"casque de mobilette",
            price:80 ,
            IsPublished: true,
      },
      {
            title: "canne a peche" ,
            price:150 ,
            IsPublished: false,
      }
   ]

   return(
       <section>
           {nameProduct.map((product) => {
                return (
                    <article>
                        {product.IsPublished && (
                            <>
                                <h2>{product.title}</h2>
                                <p>{product.price}</p>
                            </>
                        )                         
                        }
                    </article>
                        )
            })}  
       </section>

   )
}

export default Product;