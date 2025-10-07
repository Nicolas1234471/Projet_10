import BankTree from '../../assets/images/bank-tree.jpeg';
import './Banner.scss';

function Banner ({}) {
    return (
        <div className="banner-container">
            <img src={BankTree} alt="image d'une plante dans un pot contenant de la monnaie"/>
            <div className="advantages-description">
                <p className="big-text">No fees.</p>
                <p className="big-text">No minimum deposit.</p>
                <p className="big-text">Hight interest rates.</p>
                <p className="small-text">Open a savings account with Argent Bank today!</p>
            </div>
        </div>
    )
}

export default Banner;