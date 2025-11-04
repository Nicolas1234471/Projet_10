import './Advantages_Item.scss';

function AdvantagesItem({ title, description, altImage, iconItem }) {
    return (
        <div className="advantages-item">
            <img src={iconItem} alt={altImage} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default AdvantagesItem;
