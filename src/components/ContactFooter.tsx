import Link from "next/link";

export function ContactFooter() {
	return (
		<footer id="contact" className="border-t border-zinc-800/80">
			<div className="container mx-auto px-6 py-16 md:py-20">
				<div className="grid gap-10 md:grid-cols-2">
					<div>
						<h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-vyom-alt)" }}>
							Let’s talk mission needs
						</h2>
						<p className="mt-3 text-sm text-muted-foreground max-w-md">
							Request a demo or technical brief. Our engineering team will respond within 2 business days.
						</p>
						<div className="mt-6 flex flex-wrap gap-3 text-sm">
							<Link className="rounded-md bg-brand px-5 py-2.5 font-medium text-brand-foreground" href="mailto:contact@vyomgarud.com">
								Email Us
							</Link>
							<Link className="rounded-md border border-zinc-700 px-5 py-2.5 font-medium" href="#capabilities">
								View Capabilities
							</Link>
						</div>
					</div>
					<form className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-6 space-y-4">
						<div>
							<label className="mb-1 block text-xs text-muted-foreground">Name</label>
							<input className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-foreground placeholder:text-zinc-500" placeholder="Jane Doe" />
						</div>
						<div>
							<label className="mb-1 block text-xs text-muted-foreground">Email</label>
							<input type="email" className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-foreground placeholder:text-zinc-500" placeholder="jane@company.com" />
						</div>
						<div>
							<label className="mb-1 block text-xs text-muted-foreground">Message</label>
							<textarea className="min-h-28 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-foreground placeholder:text-zinc-500" placeholder="Tell us about your mission profile..." />
						</div>
						<button type="submit" className="w-full rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground hover:opacity-90">
							Send
						</button>
						<p className="text-[10px] text-muted-foreground">By sending, you agree to our communications policy.</p>
					</form>
				</div>
				<div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-800 pt-6 text-xs text-muted-foreground md:flex-row">
					<p>© {new Date().getFullYear()} VyomGarud</p>
					<div className="flex items-center gap-4">
						<Link href="#" className="hover:text-foreground">Privacy</Link>
						<Link href="#" className="hover:text-foreground">Security</Link>
						<Link href="#" className="hover:text-foreground">Careers</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

