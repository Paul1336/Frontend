"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black items-center h-12">
      <Link
        href="/demo"
        key="Demo"
        className="font-medium text-3xl bg-white border-2 border-white"
      >
        Demo
      </Link>
    </div>
  );
};
export default Footer;

// href: '/notifications', display: 'Notifications'
