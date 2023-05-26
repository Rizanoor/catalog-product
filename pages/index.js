import React from "react";
import Layout from "@common/components/Layout";

const HomePage = ({ products }) => {
  const { list } = products;
  return (
    <Layout>
        {list.map((list) => {
          return <p>{list.name}</p>;
        })}
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default HomePage;
