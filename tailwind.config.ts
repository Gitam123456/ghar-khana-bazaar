
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'satoshi': ['Satoshi', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'floating3d': 'floating3d 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
				'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-up': 'slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'shimmer': 'shimmer 1.2s ease-in-out infinite',
				'loading': 'loading 1.5s infinite',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateZ(0deg)'
					},
					'33%': {
						transform: 'translateY(-20px) rotateZ(1deg)'
					},
					'66%': {
						transform: 'translateY(-10px) rotateZ(-1deg)'
					}
				},
				'floating3d': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)'
					},
					'33%': {
						transform: 'translateY(-20px) rotateX(5deg) rotateY(5deg)'
					},
					'66%': {
						transform: 'translateY(-10px) rotateX(-3deg) rotateY(-3deg)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '0.8'
					}
				},
				'scaleIn': {
					from: {
						opacity: '0',
						transform: 'scale(0.8) rotateX(10deg)'
					},
					to: {
						opacity: '1',
						transform: 'scale(1) rotateX(0deg)'
					}
				},
				'slideUp': {
					from: {
						opacity: '0',
						transform: 'translateY(100px) rotateX(20deg)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)'
					}
				},
				'fadeInUp': {
					from: {
						opacity: '0',
						transform: 'translateY(60px) scale(0.95)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-468px 0'
					},
					'100%': {
						backgroundPosition: '468px 0'
					}
				},
				'loading': {
					'0%': {
						backgroundPosition: '200% 0'
					},
					'100%': {
						backgroundPosition: '-200% 0'
					}
				}
			},
			backdropBlur: {
				xs: '2px',
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: any) {
			const newUtilities = {
				'.perspective-1000': {
					perspective: '1000px',
				},
				'.perspective-2000': {
					perspective: '2000px',
				},
				'.transform-3d': {
					transformStyle: 'preserve-3d',
				},
				'.backface-hidden': {
					backfaceVisibility: 'hidden',
				},
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
