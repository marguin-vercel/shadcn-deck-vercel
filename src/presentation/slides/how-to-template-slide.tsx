import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const HowToTemplateSlide: SlideDefinition = {
	slug: 'how-to-template-slide',
	component: SlideComponent,
	notes: 'Instructions slide explaining how to use the presentation template.',
	title: 'How to use this template',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="text-center">
					<Text size="sm" className="text-primary font-medium mb-2">
						~/internal-deck/how-to
					</Text>
					<Heading size="2xl" align="center" className="font-bold">
						How to use this template
					</Heading>
				</div>
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
					<div className="space-y-8">
						<Text size="lg" className="leading-relaxed">
							This template has been designed for internal use, whether that's for
							team hands, company pitches, or other internal presentations. It's
							optimized for clarity and impact.
						</Text>
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
									1
								</div>
								<div>
									<Text size="lg" className="font-semibold mb-2">
										Copy the template
									</Text>
									<Text size="sm" className="text-muted-foreground">
										Make a copy of this presentation to get started with your own content.
									</Text>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
									2
								</div>
								<div>
									<Text size="lg" className="font-semibold mb-2">
										Or import the template
									</Text>
									<Text size="sm" className="text-muted-foreground">
										Import these slides into your existing presentation software.
									</Text>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
									3
								</div>
								<div>
									<Text size="lg" className="font-semibold mb-2">
										Make it your own
									</Text>
									<Text size="sm" className="text-muted-foreground">
										Customize the content, colors, and layout to match your needs.
									</Text>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:pl-8">
						<div className="rounded-lg border bg-gradient-to-br from-primary/5 to-primary/10 p-6">
							<div className="mb-4 flex items-center space-x-2">
								<div className="h-3 w-3 rounded-full bg-primary" />
								<Text size="sm" className="font-semibold text-primary">
									Tip
								</Text>
							</div>
							<Text size="sm" className="leading-relaxed mb-4">
								You can easily edit the gradient text by selecting the text and
								changing the fill to a gradient. This gives your presentations a
								modern, polished look.
							</Text>
							<div className="mt-4 p-3 rounded border bg-background/50">
								<Text size="xs" className="text-muted-foreground">
									Each slide includes helpful tips and notes in the presenter notes
									section to guide you through customization.
								</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}