import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const TeamGridSlide: SlideDefinition = {
	slug: 'team-grid-slide',
	component: SlideComponent,
	notes: 'Team grid slide showcasing key team members and leadership.',
	title: 'Meet Our Team',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Meet Our Team
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Talented professionals committed to delivering exceptional results
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="text-center">
						<div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
							<Text size="xl" className="font-bold text-white">
								JD
							</Text>
						</div>
						<Text size="lg" className="font-semibold">
							Jane Doe
						</Text>
						<Text size="sm" className="text-primary">
							CEO & Founder
						</Text>
						<Text size="sm" className="mt-2 text-muted-foreground">
							15+ years building scalable tech solutions
						</Text>
					</div>
					<div className="text-center">
						<div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600">
							<Text size="xl" className="font-bold text-white">
								MS
							</Text>
						</div>
						<Text size="lg" className="font-semibold">
							Mike Smith
						</Text>
						<Text size="sm" className="text-primary">
							CTO
						</Text>
						<Text size="sm" className="mt-2 text-muted-foreground">
							Expert in distributed systems and AI
						</Text>
					</div>
					<div className="text-center">
						<div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600">
							<Text size="xl" className="font-bold text-white">
								SJ
							</Text>
						</div>
						<Text size="lg" className="font-semibold">
							Sarah Johnson
						</Text>
						<Text size="sm" className="text-primary">
							Head of Product
						</Text>
						<Text size="sm" className="mt-2 text-muted-foreground">
							Product strategy and user experience leader
						</Text>
					</div>
					<div className="text-center">
						<div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600">
							<Text size="xl" className="font-bold text-white">
								DW
							</Text>
						</div>
						<Text size="lg" className="font-semibold">
							David Wilson
						</Text>
						<Text size="sm" className="text-primary">
							VP of Engineering
						</Text>
						<Text size="sm" className="mt-2 text-muted-foreground">
							Leading high-performance engineering teams
						</Text>
					</div>
					<div className="text-center">
						<div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-600">
							<Text size="xl" className="font-bold text-white">
								EB
							</Text>
						</div>
						<Text size="lg" className="font-semibold">
							Emily Brown
						</Text>
						<Text size="sm" className="text-primary">
							Head of Design
						</Text>
						<Text size="sm" className="mt-2 text-muted-foreground">
							Award-winning UX/UI designer
						</Text>
					</div>
					<div className="text-center">
						<div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600">
							<Text size="xl" className="font-bold text-white">
								RT
							</Text>
						</div>
						<Text size="lg" className="font-semibold">
							Robert Taylor
						</Text>
						<Text size="sm" className="text-primary">
							Head of Sales
						</Text>
						<Text size="sm" className="mt-2 text-muted-foreground">
							Growth strategist with proven track record
						</Text>
					</div>
				</div>
				<div className="mt-8 text-center">
					<Text size="sm" className="text-muted-foreground">
						Join our team of 200+ talented professionals across 25+ countries
					</Text>
				</div>
			</div>
		</Slide>
	);
}