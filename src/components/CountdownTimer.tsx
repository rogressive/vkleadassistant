import { useCountdown } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date;
  compact?: boolean;
}

const CountdownTimer = ({ targetDate, compact = false }: CountdownTimerProps) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const timeUnits = [
    { value: days, label: 'дней' },
    { value: hours, label: 'часов' },
    { value: minutes, label: 'минут' },
    { value: seconds, label: 'секунд' },
  ];

  if (compact) {
    return (
      <div className="flex items-center gap-1 text-accent font-display font-bold">
        <span>{String(days).padStart(2, '0')}</span>
        <span className="text-muted-foreground">:</span>
        <span>{String(hours).padStart(2, '0')}</span>
        <span className="text-muted-foreground">:</span>
        <span>{String(minutes).padStart(2, '0')}</span>
        <span className="text-muted-foreground">:</span>
        <span>{String(seconds).padStart(2, '0')}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-3 md:gap-4">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-secondary border border-border flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-display font-bold text-foreground counter">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            {/* Glow effect on seconds */}
            {index === 3 && (
              <div className="absolute inset-0 rounded-xl bg-primary/20 animate-pulse -z-10 blur-md" />
            )}
          </div>
          <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
