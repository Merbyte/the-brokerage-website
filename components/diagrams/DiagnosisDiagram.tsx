/**
 * Hero diagram: the sequence a financing situation actually runs in
 * (MASTER.md §7.3, pages/home.md §5.4).
 *
 * The notation is the one used across the whole page: a single axis, stations
 * hung off it, and a bracket marking the stretch where money is committed
 * before it is received. Gold marks exactly one live element -- the
 * assessment -- because gold means action, not approval.
 *
 * There are no figures, no chart and no dashboard chrome. Both drawings are
 * aria-hidden; the list beneath them is the accessible equivalent, so the
 * content is identical whichever one a reader gets.
 */

interface Station {
  title: string;
  lines: [string, string];
}

/*
 * Line breaks are authored rather than wrapped, because SVG text does not
 * wrap. Each line is kept under about 29 characters so the same copy fits the
 * 280-unit mobile drawing without clipping.
 */
const STATIONS: Station[] = [
  {
    title: "The requirement",
    lines: ["A project or order arrives", "and has to be funded."],
  },
  {
    title: "Costs commit",
    lines: ["Materials, labour and", "obligations are paid first."],
  },
  {
    title: "Payment follows",
    lines: ["Certification and receipt run", "to another schedule."],
  },
  {
    title: "Assessment",
    lines: ["What the situation needs,", "before any application."],
  },
];

const FAN_LABEL = "Possible routes";

export function DiagnosisDiagram() {
  return (
    <figure className="m-0">
      {/* Desktop and tablet drawing */}
      <svg
        viewBox="0 0 420 500"
        className="hidden w-full md:block"
        role="presentation"
        aria-hidden="true"
        fill="none"
      >
        <line
          x1="104"
          y1="30"
          x2="104"
          y2="452"
          stroke="var(--diagram-line)"
          strokeWidth="1"
        />

        {/* bracket over the stretch where cash is committed before it returns */}
        <path
          d="M88 156 H80 V268 H88"
          stroke="var(--diagram-line)"
          strokeWidth="1"
        />
        <text
          x="68"
          y="207"
          textAnchor="end"
          fill="var(--text-secondary)"
          fontSize="14"
          fontFamily="var(--font-manrope)"
        >
          Timing
        </text>
        <text
          x="68"
          y="226"
          textAnchor="end"
          fill="var(--text-secondary)"
          fontSize="14"
          fontFamily="var(--font-manrope)"
        >
          pressure
        </text>

        {[44, 156, 268, 356].map((y, index) => {
          const isAssessment = index === 3;
          const station = STATIONS[index];

          return (
            <g key={station.title}>
              <circle
                cx="104"
                cy={y}
                r={isAssessment ? 6 : 5}
                fill={isAssessment ? "var(--gold-500)" : "var(--surface-page)"}
                stroke={
                  isAssessment ? "var(--gold-500)" : "var(--diagram-line-strong)"
                }
                strokeWidth="1.5"
              />
              <text
                x="130"
                y={y + 6}
                fill="var(--text-primary)"
                fontSize="16"
                fontWeight="600"
                fontFamily="var(--font-manrope)"
              >
                {station.title}
              </text>
              <text
                x="130"
                y={y + 30}
                fill="var(--text-secondary)"
                fontSize="14"
                fontFamily="var(--font-manrope)"
              >
                {station.lines[0]}
              </text>
              <text
                x="130"
                y={y + 48}
                fill="var(--text-secondary)"
                fontSize="14"
                fontFamily="var(--font-manrope)"
              >
                {station.lines[1]}
              </text>
            </g>
          );
        })}

        {/* the one live element: assessment carried down into route selection */}
        <line
          x1="104"
          y1="362"
          x2="104"
          y2="452"
          stroke="var(--gold-500)"
          strokeWidth="2"
        />
        <line
          x1="104"
          y1="452"
          x2="168"
          y2="452"
          stroke="var(--diagram-line)"
          strokeWidth="1"
        />
        <line
          x1="168"
          y1="430"
          x2="168"
          y2="474"
          stroke="var(--diagram-line)"
          strokeWidth="1"
        />
        {[430, 452, 474].map((y) => (
          <g key={y}>
            <line
              x1="168"
              y1={y}
              x2="214"
              y2={y}
              stroke="var(--diagram-line)"
              strokeWidth="1"
            />
            <circle
              cx="214"
              cy={y}
              r="3.5"
              fill="var(--surface-page)"
              stroke="var(--diagram-line)"
              strokeWidth="1"
            />
          </g>
        ))}
        <text
          x="230"
          y="457"
          fill="var(--text-secondary)"
          fontSize="14"
          fontFamily="var(--font-manrope)"
        >
          {FAN_LABEL}
        </text>
      </svg>

      {/*
        Mobile drawing. Redrawn rather than scaled: at 320px a 380-unit
        viewBox would render its labels below 13px, and the bracket column has
        nowhere to sit, so the timing annotation moves into the text column.
      */}
      <svg
        viewBox="0 0 280 500"
        className="w-full md:hidden"
        role="presentation"
        aria-hidden="true"
        fill="none"
      >
        <line
          x1="14"
          y1="24"
          x2="14"
          y2="450"
          stroke="var(--diagram-line)"
          strokeWidth="1"
        />

        {[36, 140, 286, 360].map((y, index) => {
          const isAssessment = index === 3;
          const station = STATIONS[index];

          return (
            <g key={station.title}>
              <circle
                cx="14"
                cy={y}
                r={isAssessment ? 6 : 5}
                fill={isAssessment ? "var(--gold-500)" : "var(--surface-page)"}
                stroke={
                  isAssessment ? "var(--gold-500)" : "var(--diagram-line-strong)"
                }
                strokeWidth="1.5"
              />
              <text
                x="38"
                y={y + 6}
                fill="var(--text-primary)"
                fontSize="16"
                fontWeight="600"
                fontFamily="var(--font-manrope)"
              >
                {station.title}
              </text>
              <text
                x="38"
                y={y + 30}
                fill="var(--text-secondary)"
                fontSize="14"
                fontFamily="var(--font-manrope)"
              >
                {station.lines[0]}
              </text>
              <text
                x="38"
                y={y + 48}
                fill="var(--text-secondary)"
                fontSize="14"
                fontFamily="var(--font-manrope)"
              >
                {station.lines[1]}
              </text>
            </g>
          );
        })}

        <path d="M8 140 H2 V286 H8" stroke="var(--diagram-line)" strokeWidth="1" />
        <text
          x="38"
          y="232"
          fill="var(--text-secondary)"
          fontSize="14"
          fontFamily="var(--font-manrope)"
        >
          Timing pressure builds
        </text>
        <text
          x="38"
          y="250"
          fill="var(--text-secondary)"
          fontSize="14"
          fontFamily="var(--font-manrope)"
        >
          between these two points.
        </text>

        <line
          x1="14"
          y1="366"
          x2="14"
          y2="450"
          stroke="var(--gold-500)"
          strokeWidth="2"
        />
        <line
          x1="14"
          y1="450"
          x2="60"
          y2="450"
          stroke="var(--diagram-line)"
          strokeWidth="1"
        />
        <line
          x1="60"
          y1="428"
          x2="60"
          y2="472"
          stroke="var(--diagram-line)"
          strokeWidth="1"
        />
        {[428, 450, 472].map((y) => (
          <g key={y}>
            <line
              x1="60"
              y1={y}
              x2="100"
              y2={y}
              stroke="var(--diagram-line)"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy={y}
              r="3.5"
              fill="var(--surface-page)"
              stroke="var(--diagram-line)"
              strokeWidth="1"
            />
          </g>
        ))}
        <text
          x="114"
          y="455"
          fill="var(--text-secondary)"
          fontSize="14"
          fontFamily="var(--font-manrope)"
        >
          {FAN_LABEL}
        </text>
      </svg>

      <figcaption className="sr-only">
        <p>
          A financing situation in the order it happens, ending at the point
          where a route is chosen.
        </p>
        <ol>
          {STATIONS.map((station) => (
            <li key={station.title}>
              {station.title}. {station.lines.join(" ")}
            </li>
          ))}
          <li>
            Timing pressure builds between the point where costs commit and the
            point where payment follows.
          </li>
          <li>
            Possible routes follow from the assessment rather than preceding it.
          </li>
        </ol>
      </figcaption>
    </figure>
  );
}
