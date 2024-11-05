import SecondaryHeader from "../../components/Header/SecondaryHeader";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const Statistics = () => {
  const products = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <SecondaryHeader></SecondaryHeader>
      <div>
        <div className="mx-auto bg-sky-500 py-10">
          <div className="w-11/12 mx-auto">
            <div className="w-10/12 mx-auto">
              <h1 className="text-center text-white font-semibold text-2xl leading-snug">
                Statistics
              </h1>
              <p className="text-center w-9/12 mx-auto text-white mt-3">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>

        <div className="w-10/12 mx-auto py-5">
          <h2 className="font-bold text-xl">Statistics</h2>
          <div className="flex justify-center bg-white py-5 mt-4">
            <ComposedChart
              width={1400}
              height={400}
              data={products}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="product_title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="price" fill="#8bcbff" />
              <Bar dataKey="price" barSize={30} fill="#0ea5e9" />
              <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
