"use client";
import { motion } from "framer-motion";

export function About() {
	return (
		<section id="about" className="border-t border-zinc-800/80">
			<div className="container mx-auto px-6 py-16 md:py-20">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mx-auto max-w-3xl text-center"
				>
					<h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "var(--font-vyom-alt)" }}>
						Precision. Endurance. Autonomy.
					</h2>
					<p className="mt-4 text-muted-foreground">
						VyomGarud engineers unmanned systems for defense and critical infrastructure. Our platforms combine rugged airframes,
						redundant avionics, and adaptive autonomy to deliver mission success under extreme constraints.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

