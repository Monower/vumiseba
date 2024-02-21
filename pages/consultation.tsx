'use client'
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { fetchServices } from "../http";
import type {NextPage } from "next";
import { ISList, IServices } from "../models/Services";
import dynamic from "next/dynamic";
const Service = dynamic(() => import("../components/Service"), {loading: () => <div>Loading...</div>});

interface IPropTypes {
  services: IServices;
}

const Consultation: NextPage<IPropTypes> = ({ services }) => {
  const [service, setService] = useState<ISList[]>([]);

  const router = useRouter();

  useEffect(() => {
    if (services?.error == "404") {
      router.push("/404");
    }

    if (services?.error !== "404") {
      setService([...services?.data]);
    }
  }, []);

  return (
    <Layout>
      <section className="container mx-auto pt-8">
        <div className=" text-center">
          <p className="font-medium text-16 mb-[5px] lg:mb-0 leading-[13.79px] lg:text-20 lg:leading-[22.98px] lg:pb-1">আমাদের</p>
          <h1 className="font-medium text-20 leading-[22.98px] lg:text-36 lg:leading-[41.36px]">
            পরিষেবা বিভাগ
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {service?.map((item, index) => (
            <Service key={index} data={item} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({}) {
  const { data: services } = await fetchServices();

  return {
    props: {
      services: services,
    },
  };
}

export default Consultation;
