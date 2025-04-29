'use client';

import { Clock, Play, Timer, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { usePresentation } from '~/hooks/use-presentation';

import { Button } from '~/components/ui/button';
import { useClock } from '~/lib/hooks/use-clock';
import { useTimer } from '~/lib/hooks/use-timer';
import { cn } from '~/lib/utils';

export default function ControlsPage() {
	const router = useRouter();
	const { currentSlideId } = usePresentation();

	// Use our custom hooks instead of local state and effects
	const currentTime = useClock();
	const { isRunning, seconds, toggleTimer, formattedTime } = useTimer();

	const handleClose = () => {
		router.push(`/${currentSlideId}`);
	};

	return (
		<div className="border-border/40 border-b bg-card/50 p-3 backdrop-blur-sm">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Button
						onClick={handleClose}
						variant="ghost"
						size="icon"
						className="h-8 w-8 rounded-full"
						aria-label="Close Presenter View"
					>
						<X className="h-4 w-4" />
					</Button>
					<h2 className="font-medium text-base text-foreground">
						Presenter View
					</h2>
				</div>

				<div className="flex items-center gap-4">
					<div className="flex items-center gap-1.5 rounded-full border border-border/40 bg-card px-3 py-1 shadow-sm">
						<Clock className="h-3.5 w-3.5 text-primary/70" />
						<span className="text-foreground text-sm">{currentTime}</span>
					</div>

					<div className="flex items-center gap-2">
						<Button
							onClick={toggleTimer}
							variant={isRunning ? 'outline' : 'secondary'}
							size="sm"
							className={cn(
								'h-8 gap-1.5 rounded-full border-border/40 text-xs',
								isRunning && 'border-destructive/30 bg-card text-foreground'
							)}
						>
							{isRunning ? (
								<Timer className="h-3.5 w-3.5 text-destructive" />
							) : (
								<Play className="h-3.5 w-3.5" />
							)}
							{isRunning ? 'Reset' : seconds > 0 ? 'Reset' : 'Start'}
						</Button>

						<div className="rounded-full border border-border/40 bg-card px-3 py-1 font-mono text-sm shadow-sm">
							{formattedTime}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
