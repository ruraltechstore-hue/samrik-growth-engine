import { logisticsPlans } from "@/lib/logistics-plans";
import { paidInternshipPlans } from "@/lib/internship-plans";
import { ruralPlans } from "@/lib/rural-plans";

export const paymentPlans = [...ruralPlans, ...logisticsPlans, ...paidInternshipPlans] as const;
export type PaymentPlan = (typeof paymentPlans)[number];

export function getPaymentPlan(id: string): PaymentPlan | undefined {
  return paymentPlans.find((plan) => plan.id === id);
}