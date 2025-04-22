export enum EnquiryTypeEnum {
  ProductEnquiry = 1,
  ColdRoomDesign,
  ConsultancyAndSiteSurvey,
  ColdRoomRepairAndMaintenance,
}

export const EnquiryTypeMap: Record<number, string> = {
  1: `Product Enquiry`,
  2: `Cold Room Design`,
  3: `Consultancy and Site Survey Appointment`,
  4: `Cold Room Repair and Maintenance`,
};
