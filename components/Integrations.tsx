"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative pt-24 px-8 bg-[#EFF1F2]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 items-start">
          {/* Dashboard image on the left - 50% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-1/2"
          >
            <Image
              src="/integrations.png"
              alt="Dashboard showing integrations"
              width={400}
              height={250}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Text content on the right - 50% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-1/2 flex flex-col pt-0 sm:pt-4 md:pt-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2 sm:mb-4 leading-tight">
              Integrations
            </h2>
            <p className="text-sm sm:text-md text-gray-700 leading-tight font-light">
              Create a single pane of glass for your team to access key investment information - any
              type, from any source.
            </p>
          </motion.div>
        </div>
      </div>
      {/* Collapsible Integrations Section */}
      <div className="max-w-4xl mx-auto w-full mt-4 pb-24">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-2 text-black hover:text-gray-700 transition-colors"
        >
          <span className="text-lg font-medium">Explore Integrations</span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {integrationCategories.map((category, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-16 h-16 bg-[#5465FF] rounded-lg flex items-center justify-center flex-shrink-0 p-3">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black mb-2">{category.title}</h3>
                  <div className="grid grid-cols-2 gap-y-1">
                    {category.integrations.map((integration, idx) => (
                      <p key={idx} className="text-sm text-gray-700">
                        • {integration}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
