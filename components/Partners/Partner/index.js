import classes from './Partner.module.css'

export default function Partner (props) {
  return (
    <div
      className={classes.partner}
      style={{backgroundImage: `url(${props.image})`}}
    >
      <div className={classes.title}>
        <div>{props.title}</div>
      </div>
    </div>
  )
}
