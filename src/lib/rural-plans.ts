/**
 * Rural Tech Store Services plan catalogue.
 *
 * `amountPaise` is the smallest-currency-unit value Razorpay requires. It is
 * NEVER shown to customers and NEVER accepted from the browser — the server
 * resolves the amount from the plan id on every order.
 */
export const ruralPlans = [
  {
    id: "agent",
    name: "Agent",
    priceLabel: "₹10,000",
    amountPaise: 1000000,
    popular: false,
    features: [
      "Access to available digital services",
      "Personal dashboard and wallet functionality",
      "Commission opportunities on eligible transactions",
      "Training and support as applicable",
      "Access to the Rural Tech Store Services ecosystem",
    ],
  },
  {
    id: "distributor",
    name: "Distributor",
    priceLabel: "₹15,000",
    amountPaise: 1500000,
    popular: true,
    features: [
      "Distributor-level access",
      "Ability to manage retailers/agents as applicable",
      "Team and network commission opportunities",
      "Access to available digital services",
      "Business support",
      "Marketing and support resources as applicable",
    ],
  },
  {
    id: "super-distributor",
    name: "Super Distributor",
    priceLabel: "₹25,000",
    amountPaise: 2500000,
    popular: false,
    features: [
      "Super Distributor-level access",
      "Ability to manage a larger retailer/user network as applicable",
      "Higher-level commission opportunities",
      "Territory-level opportunities where applicable",
      "Access to the Rural Tech Store Services ecosystem",
      "Business and support resources as applicable",
    ],
  },
] as const;

export type RuralPlan = (typeof ruralPlans)[number];
export type RuralPlanId = RuralPlan["id"];

export const ruralPlanIds = ruralPlans.map((plan) => plan.id) as [RuralPlanId, ...RuralPlanId[]];

export function getRuralPlan(id: string): RuralPlan | undefined {
  return ruralPlans.find((plan) => plan.id === id);
}

export const pricingNotice =
  "Plan pricing, service availability, commissions, territory opportunities, eligibility, and other benefits may be subject to change. Please contact Samrik Solutions for the latest information and applicable terms.";
