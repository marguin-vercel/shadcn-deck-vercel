import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const SocialResponseSlide: SlideDefinition = {
	slug: 'social-response-slide',
	component: SlideComponent,
	notes: 'Social media response slide showcasing community feedback and engagement.',
	title: 'Community Response',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Community Response
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						What our community is saying about our latest product launch
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className="space-y-4 rounded-lg border bg-card p-6">
						<div className="flex items-center space-x-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
								<Text size="sm" className="font-bold text-white">
									🐦
								</Text>
							</div>
							<div>
								<Text size="sm" className="font-semibold">
									@techreviewer
								</Text>
								<Text size="xs" className="text-muted-foreground">
									2 hours ago
								</Text>
							</div>
						</div>
						<Text size="sm">
							Just tried the new platform - absolutely blown away by the UX!
							This is how enterprise software should be built.
							#innovation #tech
						</Text>
						<div className="flex items-center space-x-4 text-muted-foreground">
							<div className="flex items-center space-x-1">
								<span className="text-xs">❤️</span>
								<Text size="xs">234</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">🔄</span>
								<Text size="xs">89</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">💬</span>
								<Text size="xs">45</Text>
							</div>
						</div>
					</div>
					<div className="space-y-4 rounded-lg border bg-card p-6">
						<div className="flex items-center space-x-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500">
								<Text size="sm" className="font-bold text-white">
									📸
								</Text>
							</div>
							<div>
								<Text size="sm" className="font-semibold">
									@developer_life
								</Text>
								<Text size="xs" className="text-muted-foreground">
									4 hours ago
								</Text>
							</div>
						</div>
						<Text size="sm">
							Finally, a tool that actually makes my job easier instead of harder.
							The API integration took 5 minutes. FIVE MINUTES! 🤯
						</Text>
						<div className="flex items-center space-x-4 text-muted-foreground">
							<div className="flex items-center space-x-1">
								<span className="text-xs">❤️</span>
								<Text size="xs">567</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">🔄</span>
								<Text size="xs">123</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">💬</span>
								<Text size="xs">78</Text>
							</div>
						</div>
					</div>
					<div className="space-y-4 rounded-lg border bg-card p-6">
						<div className="flex items-center space-x-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
								<Text size="sm" className="font-bold text-white">
									💼
								</Text>
							</div>
							<div>
								<Text size="sm" className="font-semibold">
									@startup_founder
								</Text>
								<Text size="xs" className="text-muted-foreground">
									6 hours ago
								</Text>
							</div>
						</div>
						<Text size="sm">
							This platform just saved our startup 6 months of development time.
							Game changer for small teams looking to scale fast!
							Highly recommended 👏
						</Text>
						<div className="flex items-center space-x-4 text-muted-foreground">
							<div className="flex items-center space-x-1">
								<span className="text-xs">❤️</span>
								<Text size="xs">892</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">🔄</span>
								<Text size="xs">201</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">💬</span>
								<Text size="xs">156</Text>
							</div>
						</div>
					</div>
					<div className="space-y-4 rounded-lg border bg-card p-6">
						<div className="flex items-center space-x-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
								<Text size="sm" className="font-bold text-white">
									🎥
								</Text>
							</div>
							<div>
								<Text size="sm" className="font-semibold">
									@tech_influencer
								</Text>
								<Text size="xs" className="text-muted-foreground">
									8 hours ago
								</Text>
							</div>
						</div>
						<Text size="sm">
							Just published my review video - this is the future of
							enterprise software. The automation features alone are worth it.
							Link in bio! 🎬
						</Text>
						<div className="flex items-center space-x-4 text-muted-foreground">
							<div className="flex items-center space-x-1">
								<span className="text-xs">❤️</span>
								<Text size="xs">1.2K</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">🔄</span>
								<Text size="xs">345</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">💬</span>
								<Text size="xs">89</Text>
							</div>
						</div>
					</div>
					<div className="space-y-4 rounded-lg border bg-card p-6">
						<div className="flex items-center space-x-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
								<Text size="sm" className="font-bold text-white">
									▶️
								</Text>
							</div>
							<div>
								<Text size="sm" className="font-semibold">
									@product_hunter
								</Text>
								<Text size="xs" className="text-muted-foreground">
									12 hours ago
								</Text>
							</div>
						</div>
						<Text size="sm">
							Congrats on the Product Hunt launch! 🚀 Been using the beta
							for weeks and it's been incredible. Well-deserved #1 spot today!
						</Text>
						<div className="flex items-center space-x-4 text-muted-foreground">
							<div className="flex items-center space-x-1">
								<span className="text-xs">❤️</span>
								<Text size="xs">456</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">🔄</span>
								<Text size="xs">67</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">💬</span>
								<Text size="xs">23</Text>
							</div>
						</div>
					</div>
					<div className="space-y-4 rounded-lg border bg-card p-6">
						<div className="flex items-center space-x-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-600">
								<Text size="sm" className="font-bold text-white">
									🔗
								</Text>
							</div>
							<div>
								<Text size="sm" className="font-semibold">
									@enterprise_user
								</Text>
								<Text size="xs" className="text-muted-foreground">
									1 day ago
								</Text>
							</div>
						</div>
						<Text size="sm">
							Our team of 500+ developers adopted this in record time.
							The onboarding experience is seamless and the documentation
							is actually helpful! 🙌
						</Text>
						<div className="flex items-center space-x-4 text-muted-foreground">
							<div className="flex items-center space-x-1">
								<span className="text-xs">❤️</span>
								<Text size="xs">789</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">🔄</span>
								<Text size="xs">134</Text>
							</div>
							<div className="flex items-center space-x-1">
								<span className="text-xs">💬</span>
								<Text size="xs">92</Text>
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-4 text-center">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
						<div className="text-center">
							<Text size="xl" className="font-bold text-2xl text-primary">
								5.2M
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Social impressions
							</Text>
						</div>
						<div className="text-center">
							<Text size="xl" className="font-bold text-2xl text-primary">
								98%
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Positive sentiment
							</Text>
						</div>
						<div className="text-center">
							<Text size="xl" className="font-bold text-2xl text-primary">
								15K
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Community members
							</Text>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}