import classes from './ProfileImage.module.css';

const ProfileImage = ({ image, fullName }) => {
    return (<div className={classes['Image-Container']}>
        <img src={image} alt="profile" />
        <h1>{fullName}</h1>
        
        </div>)
}
export default ProfileImage;
