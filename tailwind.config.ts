import type { Config } from "tailwindcss";
import plugin from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"radial-gradient":
					"radial-gradient(circle, rgba(101, 43, 170, 0.6) 40%, rgba(101, 43, 170, 0.3) 60%, rgba(12, 16, 23, 1) 90%)",
				"linear-gradient":
					"linear-gradient(268.66deg, #CEB4E9 16.75%, rgba(113, 52, 177, 0) 219.67%)",
			},
			backgroundColor: {
				"sidebar-button-bg": "hsl(213.33deg 18.37% 9.61%)",
				"base-gradient": "hsl(218 31% 7%)",
			},
			colors: {
				"tertiary": "hsl(267.1deg 60.78% 90%)",
				"quaternary": "hsl(266.47deg 14.41% 53.73%)",
				"quinary": "hsl(0deg 0% 12.65%)",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [plugin],
};
export default config;
