import { redirect } from 'next/navigation';

export default function Home() {
	// Redirect to the first slide, preserving ref if present
	if (typeof window !== 'undefined') {
		const params = new URLSearchParams(window.location.search);
		const ref = params.get('ref');
		redirect(ref ? `/ref/${ref}/1` : '/1');
	}

	redirect('/1');
}
