import { useNavigate  } from "react-router-dom";

import bannerImage from '../../assets/home-page-image.png';

import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import { Container, Title, TitleHighlight, TextContent } from "./styles";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                    Code your global future now! <br />
                    </TitleHighlight>
                </Title>
                <TextContent>Rule the technologies used by the most innovative companies in the world and face your new professional challenge, evolving in community with the best experts.</TextContent>
                <Button title="Start Now" variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal do site." />
            </div>
        </Container>
    </>)
}

export { Home }