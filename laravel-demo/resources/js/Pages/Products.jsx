import Authenticated from "@/Layouts/Authenticated";
import { useEffect, useState } from "react";

export default function Products(props) {

    const [products, setProducts] = useState(null);

    useEffect(() => {

        if (products !== null)
            return;

        let productsL = JSON.parse(sessionStorage.getItem("products"));
        if (productsL === null) {
            productsL = props.products;
        }
        setProducts(productsL);

    }, [])

    const addProduct = (event) => {
        const id =
            Number(event.target.getAttribute("productid"));

        let basket = JSON.parse(sessionStorage.getItem("basket"));
        if (basket === null) {
            basket = [];
        }
        let productInBasket = basket.find((product) => {
            return product.id == id;
        })

        const productsUpdated = [...products];
        const product = productsUpdated.find((product) => {
            return product.id === id;
        });

        product.stockquantity--;
        if (productInBasket === undefined) {
            const name = product.name;
            productInBasket = { id: id, name: name, quantity: 1, stockquantity: product.stockquantity }
            basket.push(productInBasket);
        }
        else {
            productInBasket.quantity++;
            productInBasket.stockquantity--;

        }
        setProducts(productsUpdated);

        sessionStorage.setItem("products", JSON.stringify(productsUpdated));
        sessionStorage.setItem("basket", JSON.stringify(basket));
    }

    return (
        <div className="container">
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={""}
                csrf_token={props.csrf_token}
            >
                <div class="products row">
                    {(products !== null) && products.map((product) => {
                        return (<div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">
                                        Product descrition</p>
                                    <button productId={product.id}
                                        onClick={(event) => { addProduct(event) }}
                                        class="btn btn-primary">Add</button>
                                    <h6>Quantity : {product.stockquantity}</h6>
                                </div>
                            </div>
                        </div>);
                    })}
                </div>
            </Authenticated>
        </div>
    )

}