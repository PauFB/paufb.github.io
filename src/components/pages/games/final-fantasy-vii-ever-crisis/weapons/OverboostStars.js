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
        <svg key={i} width={size} height={size} fill={starColors[i]} viewBox="0 0 512 512">
          <polygon points="512,207.9 315.1,207.9 256,11 196.9,207.9 0,207.9 157.5,316.2 98.5,503.3 256,404.8 413.5,503.3 354.5,316.2 "/>
        </svg>
      )}
    </>
  );
}
