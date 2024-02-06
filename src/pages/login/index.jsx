import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from "react-hook-form";
import * as yup from 'yup';

import { Container, Title,LineWrapper, RightColumn, LeftColumn, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    userName: yup.string().required('Invalid username'),
    email: yup.string().required('Invalid e-mail'),
    password: yup.string().min(8, 'You need at least 8 chars').required()
}).required();


const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            alert('Opa! Encontramos um erro aqui ' + e)
        }
    };
const handleForgetPassword = () => {
    alert('Você está esquecido demais calabreso, me faça o pix que eu troco a senha para você')
}
const handleCreateAccount = () => {
    navigate('/register')
}


    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <LeftColumn >
            <LineWrapper />
                <Title>The platform for you to learn from experts, master the main technologies and enter the most desired companies faster.</Title>
            </LeftColumn>
            <RightColumn>
            <LineWrapper />
                <Wrapper>
                <TitleLogin>Are you registered yet?</TitleLogin>
                <SubtitleLogin>Log in and make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail color="#8647AD"/>} name="email"  control={control} />
                    {errors.email && <span>E-mail is mandatory</span>}
                    <Input type="password" placeholder="password" leftIcon={<MdLock color="#8647AD" />}  name="senha" control={control} />
                    {errors.senha && <span>Senha is mandatory</span>}
                    <Button title="Login" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText href="" onClick={() => handleForgetPassword()} >Forgot my password</EsqueciText>
                    <CriarText href="" onClick={() => handleCreateAccount()}>Create Account</CriarText>
                </Row>
                </Wrapper>
            </RightColumn>
        </Container>
    </>)
}

export { Login }