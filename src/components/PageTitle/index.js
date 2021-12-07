import classes from './PageTitle.module.css'

export default function PageTitle(props) {
    return <div className={classes.title}>{props.title}</div>
}
