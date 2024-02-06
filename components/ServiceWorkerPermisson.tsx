"use client";
import React from "react";
import { Button } from "./ui/button";
import { initServiceWorker } from "@/lib/service_worker_utils";

const ServiceWorkerPermisson = () => {
  return (
    <div>
      <Button onClick={initServiceWorker}>Register Service Worker</Button>
    </div>
  );
};

export default ServiceWorkerPermisson;
