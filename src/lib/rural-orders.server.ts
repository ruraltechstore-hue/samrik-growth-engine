/**
 * Server-only order record store for Rural Tech Store Services registrations.
 *
 * This first version keeps records in process memory and writes an audit line
 * to the server log for every state change. The `RuralOrderStore` interface is
 * the single seam to replace with MySQL/PostgreSQL later — swap `memoryStore`
 * for a DB-backed implementation and nothing else has to change.
 */
export type RuralOrderStatus = "Created" | "Paid" | "Failed" | "Cancelled";

export interface RuralOrderRecord {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  college?: string;
  course?: string;
  internshipStage?: string;
  plan: string;
  amountPaise: number;
  currency: "INR";
  razorpayOrderId: string;
  razorpayPaymentId: string | null;
  status: RuralOrderStatus;
  createdAt: string;
  updatedAt: string;
}

export interface RuralOrderStore {
  create(record: RuralOrderRecord): Promise<void>;
  updateStatus(razorpayOrderId: string, status: RuralOrderStatus, razorpayPaymentId?: string): Promise<void>;
  get(razorpayOrderId: string): Promise<RuralOrderRecord | undefined>;
  list(): Promise<RuralOrderRecord[]>;
}

const records = new Map<string, RuralOrderRecord>();

function audit(record: RuralOrderRecord) {
  // Audit trail so orders survive in the server log even without a database.
  console.log(
    `[payment-order] ${record.status} plan=${record.plan} amountPaise=${record.amountPaise} order=${record.razorpayOrderId} payment=${record.razorpayPaymentId ?? "-"} at=${record.updatedAt}`,
  );
}

export const ruralOrderStore: RuralOrderStore = {
  async create(record) {
    records.set(record.razorpayOrderId, record);
    audit(record);
  },
  async updateStatus(razorpayOrderId, status, razorpayPaymentId) {
    const existing = records.get(razorpayOrderId);
    const updated: RuralOrderRecord = existing
      ? { ...existing, status, razorpayPaymentId: razorpayPaymentId ?? existing.razorpayPaymentId, updatedAt: new Date().toISOString() }
      : {
          customerName: "unknown",
          customerEmail: "unknown",
          customerPhone: "unknown",
          plan: "unknown",
          amountPaise: 0,
          currency: "INR",
          razorpayOrderId,
          razorpayPaymentId: razorpayPaymentId ?? null,
          status,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
    records.set(razorpayOrderId, updated);
    audit(updated);
  },
  async get(razorpayOrderId) {
    return records.get(razorpayOrderId);
  },
  async list() {
    return [...records.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  },
};
