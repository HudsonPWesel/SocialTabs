import classes from './SocialTab.module.scss';
const clickHandler = (link) => {
    window.location.href = link; 
}
const SocialTab = (props) => {

    return (<div onClick={() => {clickHandler(props.link)}} className={classes['Tab-Container']}>
        <img src={props.icon}/> 
        <p>{props.name}</p>
        </div>)
}

export default SocialTab
