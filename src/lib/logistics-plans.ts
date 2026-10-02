/**
 * Logistics franchise plan catalogue.
 * Amounts are resolved on the server; smallest-unit values are never displayed.
 */
export const logisticsPlans = [
  {
    id: "logistics-agent-franchise",
    name: "Agent Franchise",
    priceLabel: "₹1,00,000",
    amountPaise: 10000000,
    popular: false,
    features: [
      "Access to the available multi-service platform",
      "Five delivery rider accounts",
      "Coverage for one pincode",
      "Training and technical support",
      "Marketing support materials",
      "Mobile and web dashboard access",
    ],
  },
  {
    id: "logistics-distributor-franchise",
    name: "Distributor Franchise",
    priceLabel: "₹1,80,000 + GST",
    amountPaise: 18000000,
    popular: true,
    features: [
      "Distributor-level platform access",
      "Fifteen delivery rider accounts",
      "Coverage for five pincodes",
      "Agent-level features included",
      "Sub-agent network access",
      "Priority support",
    ],
  },
  {
    id: "logistics-super-distributor",
    name: "Super Distributor",
    priceLabel: "₹2,50,000 + GST",
    amountPaise: 25000000,
    popular: false,
    features: [
      "Super Distributor-level platform access",
      "City-level coverage",
      "Unlimited delivery rider accounts",
      "Master franchise and territory rights",
      "Sub-distributor network access",
      "Dedicated support manager",
    ],
  },
] as const;

export type LogisticsPlan = (typeof logisticsPlans)[number];
export type LogisticsPlanId = LogisticsPlan["id"];

export const logisticsPlanIds = logisticsPlans.map((plan) => plan.id) as [
  LogisticsPlanId,
  ...LogisticsPlanId[],
];

export const logisticsPricingNotice =
  "Franchise pricing, services, benefits, eligibility, support, territory availability, and other terms may be subject to change. Please contact Samrik Solutions for the latest information and applicable terms.";