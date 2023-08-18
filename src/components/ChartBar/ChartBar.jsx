import classes from './ChartBar.module.css'

export const ChartBar = ({ value, maxValue, label }) => {
  let barWidth = '0%';

  if (maxValue > 0) {
    barWidth = Math.round((value / maxValue) * 100) + '%'
  };

  const labelColor = barWidth === '0%' ? '#D6D7E1' : '#FD5359';

  return (
    <div className={classes.chartbar}>
      <div className={classes.chartbar__inner}>
        <div className={classes.chartbar__fill} style={{width: barWidth}}></div>
      </div>
      <div
        className={classes.chartbar__label}
        style={{color: labelColor}}
      >
        <p>{label}</p>
        <p>{barWidth}</p>
      </div>
    </div>
  )
}