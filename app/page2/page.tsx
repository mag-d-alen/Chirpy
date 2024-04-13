import React from "react";
import "../../app/globals.css";
import Layout from "../../components/layout/layout";
import Loader from "@/components/layout/loader";

const Something = () => {
  return (
    <Layout>
      <Loader>Something</Loader>
    </Layout>
  );
};

export default Something;
