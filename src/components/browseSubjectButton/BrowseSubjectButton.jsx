import HeartIcon from "../../assets/icons/heartL.svg";
import Button from "../button/Button.jsx";

function BrowseSubjectButton({icon, onClick, subject}) {
    return (
        <Button
            className='browse-section subjects'
            onClick={onClick}>
                <img src={icon}
                     className='subject-icon'
                     alt='subject-icon'
                />
            <h3 className='subject-title'>
                {subject}
            </h3>
        </Button>
    )
}

export default BrowseSubjectButton;