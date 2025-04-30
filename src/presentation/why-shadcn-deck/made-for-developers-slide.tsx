import { Atom, Layers, Palette, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Box, Grid, Heading, Slide, Text } from '~/components/presentation';
import { cn } from '~/lib/utils';

const iconContainerClasses =
	'flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:text-primary-foreground';

function FeatureBox({
	title,
	text,
	icon: Icon,
}: { title: string; text: string; icon: LucideIcon }) {
	return (
		<Box border rounded="lg" padding="md" className="w-full">
			<div className="mb-1 flex items-center gap-3">
				<div className={cn(iconContainerClasses)}>
					<Icon className="size-5" />
				</div>
				<Heading size="lg" className="mb-0">
					{title}
				</Heading>
			</div>
			<Text className="text-lg">{text}</Text>
		</Box>
	);
}

export function MadeForDevelopersSlide() {
	return (
		<Slide contentPosition="center" variant="gradient">
			<Heading size="2xl">What if slides were built for developers?</Heading>
			<Text size="xl" className="mb-6">
				Create presentations the same way you build your apps — with code.
			</Text>
			<Grid columns={2} gap="md" className="mt-6">
				<FeatureBox
					icon={Atom}
					title="React & Next.js"
					text="Define each slide as a component. Use your existing stack."
				/>
				<FeatureBox
					icon={Layers}
					title="shadcn/ui"
					text="Styled with the same components you use every day."
				/>
				<FeatureBox
					icon={Palette}
					title="Style with Tailwind CSS"
					text="Bring your own design system or customize easily."
				/>
				<FeatureBox
					icon={Sparkles}
					title="Build and deploy your slides to the web"
					text="No software to install, just load in the browser."
				/>
			</Grid>
		</Slide>
	);
}
