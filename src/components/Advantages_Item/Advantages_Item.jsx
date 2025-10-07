import "./Advantages_Item.scss";
import iconChat from '../../assets/images/icon-chat.png';
import iconMoney from '../../assets/images/icon-money.png';
import iconSecurity from '../../assets/images/icon-security.png';

function AdvantagesItem({ title, description, altImage, iconItem }) {
    return (
        <div className="advantages-item">
            <img src={iconItem} alt={altImage}/>
            <h1>
                {title}
            </h1>
            <p>{description}</p>
        </div>
    )
}

export default AdvantagesItem;