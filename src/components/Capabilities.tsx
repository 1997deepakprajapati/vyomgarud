"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardProps = {
	icon: ReactNode;
	title: string;
	desc: string;
};

function CapabilityCard({ icon, title, desc }: CardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-6"
		>
			<div className="mb-4 h-10 w-10 rounded-lg bg-brand/15 text-brand flex items-center justify-center">{icon}</div>
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="mt-2 text-sm text-muted-foreground">{desc}</p>
		</motion.div>
	);
}

export function Capabilities() {
	return (
		<section id="capabilities" className="border-t border-zinc-800/80">
			<div className="container mx-auto px-6 py-16 md:py-20">
				<div className="mb-8 flex items-end justify-between">
					<h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "var(--font-vyom-alt)" }}>
						Capabilities & Products
					</h2>
					<span className="text-xs text-muted-foreground">ISR • Logistics • Recon • EW</span>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					<CapabilityCard
						icon={<span>🛰️</span>}
						title="Autonomous Navigation"
						desc="GNSS-denied SLAM, terrain following, and dynamic obstacle avoidance for contested environments."
					/>
					<CapabilityCard
						icon={<span>📡</span>}
						title="Secure Communications"
						desc="Encrypted datalinks, mesh networking, and BVLOS control with multi-band resilience."
					/>
					<CapabilityCard
						icon={<span>🧠</span>}
						title="Edge Intelligence"
						desc="Onboard compute for target detection, tracking, and decision support at the tactical edge."
					/>
					<CapabilityCard
						icon={<span>⚙️</span>}
						title="Rugged Airframes"
						desc="Modular payloads, redundant avionics, and MIL-STD-tested endurance for harsh operations."
					/>
				</div>
			</div>
		</section>
	);
}

