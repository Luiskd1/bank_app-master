import { Icon } from "lucide-react";
import {
	Settings,
	CircleUserRound,
	Landmark,
	HandCoins,
	FileClock,
	AlignJustify,
  } from "lucide-react";

export type siteConfig = typeof siteConfig;

export const siteConfig = {
	navItems: [
		{
			label: "Dashboard",
			href: "/dashboard",
			icon: Landmark
		},
		{
			label: "Account",
			href: "/account",
			icon: CircleUserRound
		},

		{
			label: "Fund Transfer",
			href: "/transfer",
			icon: HandCoins
		},
		{
			label: "History",
			href: "/history",
			icon: FileClock
		},
		{
			label: "Settings",
			href: "/settings",
			icon: Settings
		},
	],
	navMenuItems: [
		{
			label: "Dashboard",
			href: "/dashboard"
		},
		{
			label: "Account",
			href: "/account",
		},

		{
			label: "Fund Transfer",
			href: "/transfer",
		},
		{
			label: "History",
			href: "/history",
		},
		{
			label: "Setting",
			href: "/settings",
		},
	],
};