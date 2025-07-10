export enum EnquiryTypeEnum {
  ProductEnquiry = 0,
  ConsultancyAndSiteSurvey,
  ColdRoomDesign,
  ColdRoomRepairAndMaintenance,
}

export const EnquiryTypeMap: Record<number, string> = {
  0: `Product Enquiry`,
  1: `Consultancy and Site Survey Appointment`,
  2: `Cold Room Design`,
  3: `Cold Room Repair and Maintenance`,
};
