import BankTree from '../../assets/images/bank-tree.webp';
import './Banner.scss';

function Banner({}) {
    return (
        <div className="banner-container">
            <div className="advantages-description">
                <p className="big-text">No fees.</p>
                <p className="big-text">No minimum deposit.</p>
                <p className="big-text">High interest rates.</p>
                <p className="small-text">
                    Open a savings account with Argent Bank today!
                </p>
            </div>
        </div>
    );
}

export default Banner;
