"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const integrationCategories = [
  {
    title: "Accounting & ERP",
    icon: "/accounting-and-erp.png",
    integrations: ["QuickBooks", "NetSuite", "Xero", "Workday"],
  },
  {
    title: "HRIS & Payroll",
    icon: "/hris-and-payroll.png",
    integrations: ["Gusto", "Rippling", "ADP"],
  },
  {
    title: "File storage",
    icon: "/file-storage.png",
    integrations: ["Dropbox", "Box", "Google Drive"],
  },
  {
    title: "Spreadsheets",
    icon: "/spreadsheets.png",
    integrations: ["Excel", "Google Sheets"],
  },
  {
    title: "Cap Table & Equity Management",
    icon: "/cap-table-and-equity-management.png",
    integrations: ["Carta", "Pulley", "LTSE Equity"],
  },
  {
    title: "CRM and deal flow",
    icon: "/crm-and-dealflow.png",
    integrations: ["Salesforce"],
  },
  {
    title: "Banking & Spend Management",
    icon: "/banking-and-spend-management.png",
    integrations: ["Mercury", "Ramp", "Brex"],
  },
];

export default function Integrations() {
  return (
    <section className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/integrations-with-text.svg"
            alt="Integrations"
            width={1400}
            height={1000}
            className="h-auto w-full md:w-[85%] mx-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
