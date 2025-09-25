'use client';

import { Clock, Play, Timer, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { usePresentation } from '../../../core/hooks';
import { useClock } from '../hooks/use-clock';
import { useTimer } from '../hooks/use-timer';

export function Controls() {
	const router = useRouter();
	const { currentSlug } = usePresentation();

	// Use our custom hooks instead of local state and effects
	const currentTime = useClock();
	const { isRunning, seconds, toggleTimer, formattedTime } = useTimer();

	const handleClose = () => {
		const match = window.location.pathname.match(/^\/(ref\/[^/]+)/);
		const prefix = match ? `/${match[1]}` : '';
		router.push(`${prefix}/${currentSlug}`);
	};

	return (
		<div className="border-border border-b bg-card p-3 shadow-sm backdrop-blur-sm">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Button
						onClick={handleClose}
						variant="ghost"
						size="icon"
						className="size-8 rounded-full"
						aria-label="Close Presenter View"
					>
						<X className="h-4 w-4" />
					</Button>
					<h2 className="font-medium text-base text-foreground">
						Presenter View
					</h2>
				</div>

				<div className="flex items-center gap-4">
					<div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 shadow-sm">
						<Clock className="h-3.5 w-3.5 text-primary" />
						<span className="text-foreground text-sm">{currentTime}</span>
					</div>

					<div className="flex items-center gap-2">
						<Button
							onClick={toggleTimer}
							variant={isRunning ? 'outline' : 'secondary'}
							size="sm"
							className={cn(
								'h-8 gap-1.5 rounded-full border-border text-xs',
								isRunning && 'border-destructive bg-background text-foreground'
							)}
						>
							{isRunning ? (
								<Timer className="h-3.5 w-3.5 text-destructive" />
							) : (
								<Play className="h-3.5 w-3.5" />
							)}
							{isRunning ? 'Reset' : seconds > 0 ? 'Reset' : 'Start'}
						</Button>

						<div className="rounded-full border border-border bg-background px-3 py-1 font-mono text-sm shadow-sm">
							{formattedTime}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
