"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-15 drop-shadow-[0_0_80px_rgba(255,123,0,0.25)]" style={{ background: "radial-gradient(closest-side, #ff7b00 10%, transparent 70%)" }} />
				<div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full opacity-10 drop-shadow-[0_0_60px_rgba(255,123,0,0.2)]" style={{ background: "radial-gradient(closest-side, #ff7b00 10%, transparent 70%)" }} />
			</div>
			<div className="container mx-auto px-6 py-24 md:py-28 lg:py-32">
				<motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
					<p className="mb-4 text-sm tracking-widest text-muted-foreground">MILITARY‑GRADE UAV SYSTEMS</p>
					<h1 className="font-semibold leading-tight tracking-tight" style={{ fontFamily: "var(--font-vyom-alt)" }}>
						<span className="text-4xl md:text-6xl">Vyom</span>
						<span className="text-4xl md:text-6xl text-brand">Garud</span>
					</h1>
					<p className="mt-4 text-lg md:text-xl text-muted-foreground">
						High‑reliability, precision‑engineered autonomous platforms for the toughest missions.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-3">
						<Link href="#contact" className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90">
							Request Demo
						</Link>
						<Link href="#capabilities" className="inline-flex items-center justify-center rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold text-foreground hover:bg-zinc-900">
							Explore Capabilities
						</Link>
					</div>
				</motion.div>
				<motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="mt-12 md:mt-16">
					<div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950">
						<div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-20">
							{Array.from({ length: 72 }).map((_, i) => (
								<div key={i} className="border border-zinc-800/40" />
							))}
						</div>
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="flex items-center gap-3">
								<div className="h-10 w-10 rounded-full bg-brand/80 drop-shadow-[0_0_24px_rgba(255,123,0,0.55)]"></div>
								<div className="h-6 w-6 rounded-full bg-brand/60 drop-shadow-[0_0_18px_rgba(255,123,0,0.5)]"></div>
								<div className="h-3 w-3 rounded-full bg-brand/40 drop-shadow-[0_0_12px_rgba(255,123,0,0.45)]"></div>
							</div>
						</div>
						<div className="absolute bottom-3 right-3 text-xs text-muted-foreground">Autonomy • ISR • Edge Compute</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

