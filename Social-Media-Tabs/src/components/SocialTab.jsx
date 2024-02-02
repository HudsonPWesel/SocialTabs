import classes from './SocialTab.module.scss';
const SocialTab = (props) => {
    console.log(props);
    return (<div className={classes['Tab-Container']}><img src={props.icon}/> <p>{props.name}</p></div>)
}

export default SocialTab
