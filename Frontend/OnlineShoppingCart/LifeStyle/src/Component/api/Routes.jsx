import React from "react";
import { Route, Switch } from "react-router-dom";
import NewProduct from "./NewProduct";
import NewCart from "./NewCart";

const Routes = ({productItem, cartItems}) => {
    return(
        <div>
            <Switch>
                <Route path="/" exact>
                    <Product productItem = {productItem} />
                </Route>
                <Route>
                    
                </Route>
            </Switch>
        </div>
    )
}
