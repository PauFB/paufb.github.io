export function OverboostStars({ overboostLevel, size = "1rem" }) {
  const gold = "#d39e24";
  const red = "#ec373a";
  const purple = "#e3cdf9";

  let starColors = [];

  if (overboostLevel <= 5) {
    for (let i = 0; i < overboostLevel; i++) {
      starColors.push(red);
    }
    for (let i = overboostLevel; i < 5; i++) {
      starColors.push(gold);
    }
  } else {
    for (let i = 0; i < overboostLevel - 5; i++) {
      starColors.push(purple);
    }
    for (let i = overboostLevel - 5; i < 5; i++) {
      starColors.push(red);
    }
  }

  return (
    <>
      {[...Array(5)].map((_, i) =>
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={starColors[i]}
          stroke={starColors[i]}
          strokeWidth="2"
        >
          <polygon
            points="12 2 15 8.5 22 9.3 17 14.1 18.6 21 12 17.7 5.4 21 7 14.1 2 9.3 9 8.5 12 2"
          />
        </svg>
      )}
    </>
  );
}
