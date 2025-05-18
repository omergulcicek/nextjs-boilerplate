import { Mastercard, Visa } from "@/components/icons"

export const CARD_ICONS = {
	MASTERPASS: Mastercard,
	VISA: Visa
} as const

export type CardIcons = keyof typeof CARD_ICONS
