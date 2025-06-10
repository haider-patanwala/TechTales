"use client";
import { motion } from "motion/react";

export default function Header() {
	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className='fixed top-0 right-0 left-0 z-50 '>
			<div className='container mx-auto px-4'>
				<div className='flex h-20 items-center justify-between'>
					{/* Logo */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						className='flex items-center gap-3'>
						<div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-orange-400 to-red-500'>
							<span className='font-bold text-white text-xl'>T</span>
						</div>
					</motion.div>

					<div className='flex items-center justify-between gap-10'>
						{/* Navigation */}
						<nav className='hidden items-center gap-8 rounded-4xl border border-primary/50 bg-primary/80 px-6 py-2 backdrop-blur-2xl md:flex'>
							{["Stories", "Categories", "Community", "About"].map(
								(item, index) => (
									<motion.a
										key={item}
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.2,
											ease: "backInOut",
										}}
										whileHover={{ scale: 1.05, y: -2 }}
										href={`#${item.toLowerCase()}`}
										className='font-medium text-white/90 transition-colors duration-300 hover:text-accent'>
										{item}
									</motion.a>
								)
							)}
						</nav>

						{/* CTA Button */}
						<div className='flex items-center gap-4'>
							<motion.button
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								className='hidden rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg sm:block'>
								Write Story
							</motion.button>

							{/* Mobile Menu Button */}
							<motion.button
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.7 }}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className='flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm md:hidden'>
								<div className='flex h-5 w-5 flex-col gap-1'>
									<motion.div
										className='h-0.5 w-full rounded bg-white'
										whileHover={{ scaleX: 1.2 }}
									/>
									<motion.div
										className='h-0.5 w-full rounded bg-white'
										whileHover={{ scaleX: 0.8 }}
									/>
									<motion.div
										className='h-0.5 w-full rounded bg-white'
										whileHover={{ scaleX: 1.2 }}
									/>
								</div>
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</motion.header>
	);
}
