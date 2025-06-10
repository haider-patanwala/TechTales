"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HomePage() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<main
			ref={containerRef}
			className='min-h-screen overflow-hidden font-geist-sans'>
			{/* Hero Section */}
			<section className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900'>
				{/* Animated Background Elements */}
				<div className='absolute inset-0'>
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 20,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}
						className='-top-40 -right-40 absolute h-80 w-80 rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-20 blur-3xl'
					/>
					<motion.div
						animate={{
							scale: [1.2, 1, 1.2],
							rotate: [360, 180, 0],
						}}
						transition={{
							duration: 25,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}
						className='-bottom-40 -left-40 absolute h-96 w-96 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 opacity-20 blur-3xl'
					/>
				</div>

				{/* Floating Particles */}
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={`particle-${i}`}
						animate={{
							y: [0, -30, 0],
							x: [0, 15, 0],
							rotate: [0, 360],
						}}
						transition={{
							duration: 5 + i,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
							delay: i * 0.5,
						}}
						className='absolute h-4 w-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-60'
						style={{
							top: `${20 + i * 10}%`,
							left: `${10 + i * 15}%`,
						}}
					/>
				))}

				<motion.div
					style={{ y, opacity }}
					className='container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-32 text-center'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
						className='mb-8'>
						<motion.h1
							className='mb-6 bg-gradient-to-r from-orange-400 via-amber-400 to-red-400 bg-clip-text font-bold font-rufina text-7xl text-transparent md:text-9xl'
							animate={{
								backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
							}}
							transition={{
								duration: 5,
								repeat: Number.POSITIVE_INFINITY,
								ease: "linear",
							}}>
							TechTales
						</motion.h1>
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: "100%" }}
							transition={{ duration: 1.5, delay: 0.5 }}
							className='mx-auto h-1 max-w-md bg-gradient-to-r from-orange-400 to-red-500'
						/>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.3 }}
						className='mb-12 max-w-3xl text-slate-300 text-xl leading-relaxed md:text-2xl'>
						Where cutting-edge technology meets captivating storytelling.
						<br className='hidden md:block' />
						Discover the extraordinary world of innovation through immersive
						narratives.
					</motion.p>

					<motion.button
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						whileHover={{ scale: 1.05, y: -5 }}
						whileTap={{ scale: 0.95 }}
						className='group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 font-semibold text-lg text-white shadow-2xl'>
						<span className='relative z-10'>Explore Stories</span>
						<motion.div
							className='absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600'
							initial={{ x: "100%" }}
							whileHover={{ x: 0 }}
							transition={{ duration: 0.3 }}
						/>
					</motion.button>
				</motion.div>
			</section>

			{/* Features Section */}
			<section className='relative bg-gradient-to-b from-orange-50 to-white py-32'>
				{/* Background Pattern */}
				<div className='absolute inset-0 opacity-5'>
					<svg
						width='100%'
						height='100%'>
						<title>Background Grid Pattern</title>
						<defs>
							<pattern
								id='grid'
								width='40'
								height='40'
								patternUnits='userSpaceOnUse'>
								<path
									d='M 40 0 L 0 0 0 40'
									fill='none'
									stroke='currentColor'
									strokeWidth='1'
								/>
							</pattern>
						</defs>
						<rect
							width='100%'
							height='100%'
							fill='url(#grid)'
						/>
					</svg>
				</div>

				<div className='container relative z-10 mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='mb-20 text-center'>
						<h2 className='mb-6 font-bold font-rufina text-5xl text-slate-900 md:text-6xl'>
							Immersive Experiences
						</h2>
						<p className='mx-auto max-w-2xl text-slate-600 text-xl'>
							Dive deep into the world of technology through our carefully
							crafted stories
						</p>
					</motion.div>

					<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
						{[
							{
								title: "Interactive Stories",
								description:
									"Experience technology through immersive, interactive narratives that adapt to your journey.",
								icon: "🚀",
								color: "from-orange-500 to-red-600",
							},
							{
								title: "Expert Insights",
								description:
									"Learn from industry pioneers and thought leaders shaping the future of technology.",
								icon: "🧠",
								color: "from-amber-500 to-orange-600",
							},
							{
								title: "Community Hub",
								description:
									"Connect with fellow tech enthusiasts and share your own stories and discoveries.",
								icon: "🌟",
								color: "from-yellow-500 to-amber-600",
							},
						].map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								whileHover={{ y: -10, scale: 1.02 }}
								viewport={{ once: true }}
								className='group relative rounded-2xl bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl'>
								<div
									className={`h-16 w-16 bg-gradient-to-r ${feature.color} mb-6 flex items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110`}>
									{feature.icon}
								</div>
								<h3 className='mb-4 font-bold font-rufina text-2xl text-slate-900'>
									{feature.title}
								</h3>
								<p className='text-slate-600 leading-relaxed'>
									{feature.description}
								</p>

								{/* Hover Effect */}
								<motion.div
									className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Top Tales Carousel Section */}
			<section className='relative overflow-hidden bg-gradient-to-b from-slate-100 to-white py-32'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='mb-16 text-center'>
						<h2 className='mb-6 font-bold font-rufina text-5xl text-slate-900 md:text-6xl'>
							Top Tales
						</h2>
						<p className='mx-auto max-w-2xl text-slate-600 text-xl'>
							Discover the most captivating stories from our community of tech
							storytellers
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						viewport={{ once: true }}
						className='relative'>
						{/* Carousel Container */}
						<motion.div
							drag='x'
							dragConstraints={{ left: -800, right: 0 }}
							className='flex cursor-grab gap-8 active:cursor-grabbing'
							whileDrag={{ cursor: "grabbing" }}>
							{[
								{
									title: "The Future of AI",
									author: "Sarah Chen",
									category: "Artificial Intelligence",
									readTime: "8 min read",
									excerpt:
										"Exploring how artificial intelligence is reshaping industries and creating new possibilities for human-machine collaboration.",
									gradient: "from-orange-400 to-red-500",
									views: "12.5k",
									likes: "1.2k",
								},
								{
									title: "Quantum Computing Breakthrough",
									author: "Dr. Michael Rodriguez",
									category: "Quantum Technology",
									readTime: "12 min read",
									excerpt:
										"A deep dive into the latest quantum computing achievements that could revolutionize cryptography and scientific research.",
									gradient: "from-amber-400 to-orange-500",
									views: "8.7k",
									likes: "945",
								},
								{
									title: "Web3 and the Metaverse",
									author: "Alex Thompson",
									category: "Blockchain",
									readTime: "6 min read",
									excerpt:
										"Understanding the intersection of blockchain technology and virtual worlds in shaping the future of digital interaction.",
									gradient: "from-yellow-400 to-amber-500",
									views: "15.3k",
									likes: "2.1k",
								},
								{
									title: "Sustainable Tech Revolution",
									author: "Emma Wilson",
									category: "Green Technology",
									readTime: "10 min read",
									excerpt:
										"How innovative technologies are leading the charge toward a more sustainable and environmentally conscious future.",
									gradient: "from-orange-500 to-red-600",
									views: "9.2k",
									likes: "1.5k",
								},
								{
									title: "Neural Networks Explained",
									author: "Prof. David Kim",
									category: "Machine Learning",
									readTime: "15 min read",
									excerpt:
										"A comprehensive guide to understanding how neural networks process information and learn from data patterns.",
									gradient: "from-red-400 to-orange-500",
									views: "11.8k",
									likes: "1.8k",
								},
							].map((tale, index) => (
								<div key={tale.title}>
									<motion.div
										key={tale.title}
										initial={{ opacity: 0, x: 50 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										whileHover={{ y: -10, scale: 1.02 }}
										viewport={{ once: true }}
										className='group relative min-w-[380px] max-w-[380px] rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl'>
										{/* Gradient Header */}
										<div
											className={`h-48 bg-gradient-to-br ${tale.gradient} relative overflow-hidden rounded-t-3xl`}>
											<div className='absolute inset-0 bg-black/10'></div>
											<motion.div
												whileHover={{ scale: 1.1 }}
												transition={{ duration: 0.3 }}
												className='absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm'>
												<span className='font-semibold text-sm text-white'>
													{tale.category}
												</span>
											</motion.div>

											{/* Floating Elements */}
											<div className='absolute top-8 left-8 h-16 w-16 rounded-full bg-white/10 blur-xl' />
											<div className='absolute right-8 bottom-8 h-12 w-12 rounded-full bg-white/10 blur-lg' />
										</div>

										{/* Content */}
										<div className='p-8'>
											<div className='mb-4 flex items-center justify-between'>
												<div className='flex items-center gap-2 text-slate-500 text-sm'>
													<div className='h-2 w-2 rounded-full bg-orange-400'></div>
													<span>{tale.readTime}</span>
												</div>
												<div className='flex items-center gap-4 text-slate-500 text-sm'>
													<div className='flex items-center gap-1'>
														<span>👁</span>
														<span>{tale.views}</span>
													</div>
													<div className='flex items-center gap-1'>
														<span>❤️</span>
														<span>{tale.likes}</span>
													</div>
												</div>
											</div>

											<h3 className='mb-3 font-bold font-rufina text-2xl text-slate-900 transition-colors duration-300 group-hover:text-orange-600'>
												{tale.title}
											</h3>

											<p className='mb-6 line-clamp-3 text-slate-600 leading-relaxed'>
												{tale.excerpt}
											</p>

											<div className='flex items-center justify-between'>
												<div className='flex items-center gap-3'>
													<div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-red-500 font-bold text-white'>
														{tale.author
															.split(" ")
															.map((n) => n[0])
															.join("")}
													</div>
													<div>
														<p className='font-semibold text-slate-900'>
															{tale.author}
														</p>
													</div>
												</div>

												<motion.button
													whileHover={{ scale: 1.05 }}
													whileTap={{ scale: 0.95 }}
													className='rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg'>
													Read More
												</motion.button>
											</div>
										</div>
									</motion.div>

									<motion.div className='pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
								</div>
							))}
						</motion.div>

						{/* Scroll Indicators */}
						<div className='mt-12 flex justify-center gap-2'>
							{[...Array(3)].map((_, i) => (
								<motion.div
									key={`indicator-${i}`}
									className='h-3 w-3 rounded-full bg-orange-200'
									whileHover={{ scale: 1.2, backgroundColor: "#fb923c" }}
									transition={{ duration: 0.2 }}
								/>
							))}
						</div>
					</motion.div>
				</div>

				{/* Background Decoration */}
				<div className='absolute top-20 right-10 h-32 w-32 rounded-full bg-gradient-to-r from-orange-200 to-amber-200 opacity-20 blur-3xl' />
				<div className='absolute bottom-20 left-10 h-40 w-40 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 opacity-20 blur-3xl' />
			</section>

			{/* CTA Section */}
			<section className='relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 py-32'>
				{/* Animated Background */}
				<motion.div
					animate={{
						rotate: 360,
					}}
					transition={{
						duration: 50,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
					className='absolute inset-0 opacity-10'>
					<div className='absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-orange-400 to-red-500 blur-3xl' />
					<div className='absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 blur-3xl' />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='container relative z-10 mx-auto px-4 text-center'>
					<motion.h2
						className='mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text font-bold font-rufina text-5xl text-transparent md:text-7xl'
						animate={{
							backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
						}}
						transition={{
							duration: 3,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}>
						Ready to Begin?
					</motion.h2>
					<p className='mx-auto mb-12 max-w-2xl text-slate-300 text-xl'>
						Join thousands of tech enthusiasts and start your journey into the
						future
					</p>

					<motion.button
						whileHover={{ scale: 1.05, y: -5 }}
						whileTap={{ scale: 0.95 }}
						className='group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 px-12 py-6 font-bold text-white text-xl shadow-2xl'>
						<span className='relative z-10'>Start Your Adventure</span>
						<motion.div
							className='absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500'
							animate={{
								x: ["-100%", "100%"],
							}}
							transition={{
								duration: 2,
								repeat: Number.POSITIVE_INFINITY,
								ease: "linear",
							}}
							// className="opacity-30"
						/>
					</motion.button>
				</motion.div>
			</section>
		</main>
	);
}
