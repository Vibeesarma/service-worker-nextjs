"use client";
import React from "react";
import { Button } from "./ui/button";
import { initServiceWorker } from "@/lib/service_worker_utils";

type ServiceWorkerPermissonProps = {
  user_id: string;
};

const ServiceWorkerPermisson = ({ user_id }: ServiceWorkerPermissonProps) => {
  const handleInitServiceWorkerClick = async () => {
    initServiceWorker({ user_id });
  };

  return (
    <div>
      <Button onClick={handleInitServiceWorkerClick}>
        Register Service Worker
      </Button>
    </div>
  );
};

export default ServiceWorkerPermisson;
