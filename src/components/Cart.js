import React, { useState } from 'react'
import Data from "../data.json"
import Product from './Product';

function Cart() {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [products] = useState(Data);


  //tipos de productos, para saber si es inventario infinito
  //context
  const add_cart = (_game) => {
    let temporal = { ...products.find(element => element.id === _game.id) }
    const cartExiste = cart.find(element => element.id === _game.id)

    if (cartExiste !== undefined) {
      cart.map(function(arr){
        if (arr.id === _game.id) {
          console.log("Llegaste al limite de objetos.")
        }
      });
    }
    else {
      temporal["amount"] = 1;
      setCart([...cart, temporal]);
      console.log("Se agrego al carrito")
    }
  }

  const add_favorite = (_game) => {
    if (!favorite.includes(_game)) {
      setFavorite(favorite.concat(_game));
      console.log("Se agrego a tus favoritos")
    }
    else {
      let index = favorite.indexOf(_game);
      let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
      setFavorite(temp);
      console.log("Se quito de tus favoritos")
    }
  }

  return (
    <>
      <Product
        products={products}
        add_cart={add_cart}
        cart={cart}
        add_favorite={add_favorite}
        favorite={favorite}
      />
    </>
  )
}

export default Cart