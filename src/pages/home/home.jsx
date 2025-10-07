import Banner from '../../components/Banner/Banner.jsx';
import AdvantagesItem from '../../components/Advantages_Item/Advantages_Item.jsx';
import iconChat from '../../assets/images/icon-chat.png';
import iconMoney from '../../assets/images/icon-money.png';
import iconSecurity from '../../assets/images/icon-security.png';
import './home.scss';

function Home({}) {
    return (
        <div className="banner-advantages-container">
            <Banner />
            <div className="advantages-container">
                <AdvantagesItem 
                    iconItem={iconChat}
                    altImage="Chat icon"
                    title="You are our #1 priority"
                    description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <AdvantagesItem 
                    iconItem={iconMoney}
                    altImage="Money icon"
                    title="More savings means higher "
                    description="The more you save with us, the higher your interest rate will be!"
                />
                <AdvantagesItem 
                    iconItem={iconSecurity}
                    altImage="Shield icon"
                    title="Security you can trust"
                    description="We use top of the line encryption to make sure your data and money is always safe."
                />
            </div>
        </div>
    )
}

export default Home;