import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card2 from './Card2';

export default function AllProduct2() {

  let [product, setProduct] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: 'https://fakestoreapi.com/products'
    })
      .then((res) => {
        console.log("res", res);
        setProduct(res?.data)
      })
      .catch((err) => {
        console.log("----err", err)
      });
  }, []);

  return (
    <>
      <div className='d-flex flex-wrap gap-4' style={{ backgroundColor: "lightcoral", width: "100vw" }}>
        {product.map((e) => {
          return (
            <Card2 />
          )
        })}</div>
    </>
  )
}
