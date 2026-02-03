export const PHONE_NUMBER = "917204258006";
export const PHONE_DISPLAY = "+91 72042 58006";

export const EMAIL = "shripadmavathicafe@gmail.com";

export const FSSAI_LICENSE_NUMBER = "11224331001079";
export const GSTIN = "29AFHFS7180P1ZZ";

/** Google Maps link to Tealogy Yelahanka cafe */
export const CAFE_MAPS_URL = "https://www.google.com/maps/place/Tealogy+Yelahanka/@13.0993762,77.5856564,17z/data=!4m6!3m5!1s0x3bae1917ddef283f:0x83437e48c985cf7a!8m2!3d13.0993762!4d77.5882313!16s%2Fg%2F11w281352f?entry=ttu";

export function whatsAppUrl(message: string) {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
