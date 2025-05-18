export const ALPHA_REGEX = /[a-zA-ZğüşıöçĞÜŞİÖÇ\s]/
export const ALPHANUMERIC_REGEX = /^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\s]+$/
export const CARD_REGEX = /^\d{16}$/
export const CVV_REGEX = /^\d{3}$/
export const DIGITS_ONLY_REGEX = /[^\d]/g
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const NUMERIC_REGEX = /^\d+$/
export const PHONE_REGEX = /^\d{10}$/
export const TCKN_REGEX = /^\d{11}$/
export const URL_REGEX =
	/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i
