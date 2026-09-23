export interface InternshipPricingEnquiryRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  studentCategory: string;
  studentCount: number;
  internshipStage: "Internship Stage 3 – Advanced Internship Program";
  message: string;
  status: "New";
  createdAt: string;
}

const records = new Map<string, InternshipPricingEnquiryRecord>();

export const internshipPricingEnquiryStore = {
  async create(record: InternshipPricingEnquiryRecord) {
    records.set(record.id, record);
    console.log(
      `[internship-pricing-enquiry] status=${record.status} id=${record.id} stage=${record.internshipStage} students=${record.studentCount} at=${record.createdAt}`,
    );
  },
  async list() {
    return [...records.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  },
};