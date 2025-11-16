export function Highlights() {
	return (
		<section className="border-t border-zinc-800/80">
			<div className="container mx-auto px-6 py-14 md:py-16">
				<div className="grid gap-6 md:grid-cols-3">
					<div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-6">
						<p className="text-sm text-brand mb-1">Reliability</p>
						<h3 className="text-lg font-semibold">MIL-STD Qualified</h3>
						<p className="mt-2 text-sm text-muted-foreground">Designed for extreme temperatures, vibration, and EMI/EMC hardening.</p>
					</div>
					<div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-6">
						<p className="text-sm text-brand mb-1">Precision</p>
						<h3 className="text-lg font-semibold">Redundant Avionics</h3>
						<p className="mt-2 text-sm text-muted-foreground">Fail-operational control stacks for high assurance autonomy.</p>
					</div>
					<div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-6">
						<p className="text-sm text-brand mb-1">Security</p>
						<h3 className="text-lg font-semibold">Zero-Trust Firmware</h3>
						<p className="mt-2 text-sm text-muted-foreground">Secure boot, attestation, and encrypted comms by default.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

