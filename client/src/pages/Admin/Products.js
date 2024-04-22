import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart()
  const navigate = useNavigate()

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard m-2 p-3 ">
        <div className="col-md-3 ">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <div className=" text-heading  text-xl text-rubik ">
            <h1 className="text-center  border-b-solid-secondary e">
              All Products
            </h1>
          </div>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <section className="p-2 py-2 bg-purple-50  transform duration-500 hover:-translate-y-2 cursor-pointer w-[300px] h-auto m-2">
                <img src={`/api/v1/product/product-photo/${p._id}`} alt="" />
                <h1 class="text-xl my-4">{p.name}</h1>
                <p class="mb-3">{p.description.substring(0, 60)}...</p>
                <h2 class="font-semibold mb-2 text-[#008000]">
                  {p.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </h2>
                <div className="flex justify-center ">
                  <button
                    class="p-2 px-6 bg-[#3956DE] text-white rounded-md hover:bg-[#455cc2] mr-2 text-muli"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Detail
                  </button>
                  <button
                    class="p-2 px-3 bg-[#3956DE] text-white rounded-md hover:bg-[#455cc2] text-muli"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
