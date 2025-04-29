import Link from 'next/link';
import { Button } from '~/components/ui/button';

export default function NotFound() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center bg-background text-white">
			<h1 className="mb-6 font-bold text-5xl">404</h1>
			<h2 className="mb-8 text-2xl">Page Not Found</h2>
			<p className="mb-8">
				The page you are looking for doesn't exist or has been moved.
			</p>
			<Button asChild>
				<Link href="/1">Go to Presentation</Link>
			</Button>
		</div>
	);
}
