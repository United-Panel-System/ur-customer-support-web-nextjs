export enum EnquiryTypeEnum {
  ProductEnquiry = 0,
  ColdRoomDesign,
  ConsultancyAndSiteSurvey,
  ColdRoomRepairAndMaintenance,
}

export const EnquiryTypeMap: Record<number, string> = {
  0: `Product Enquiry`,
  1: `Cold Room Design`,
  2: `Consultancy and Site Survey Appointment`,
  3: `Cold Room Repair and Maintenance`,
};
