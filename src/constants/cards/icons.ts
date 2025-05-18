import { Mastercard, Visa } from "@/components/icons"

export const CARD_ICONS = {
	VISA: Mastercard,
	MASTERCARD: Visa
} as const

export type CardIcons = keyof typeof CARD_ICONS
