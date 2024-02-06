import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { FaUser } from "react-icons/fa";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Container, Title,LineWrapper, RightColumn, LeftColumn, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper, Terms } from './styles';


const schema = yup.object({
    userName: yup.string().required('Invalid username'),
    email: yup.string().required('Invalid e-mail'),
    password: yup.string().min(8, 'You need at least 8 chars').required()
}).required();


const Register = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors, isValid  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

const handleCreateAccount = () => {
    navigate('/login')
}


    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <LeftColumn >
            <LineWrapper />
                <Title>The platform for you to learn from experts, master the main technologies and get into the most sought-after companies faster.</Title>
            </LeftColumn>
            <RightColumn>
            <LineWrapper />
                <Wrapper>
                <TitleLogin>Start now for free</TitleLogin>
                <SubtitleLogin>Create your account and make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Name" leftIcon={<FaUser color="#8647AD"/>} name="user_name"  control={control} />
                    {errors.user_name && <span>User Name is mandatory</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail color="#8647AD"/>} name="email"  control={control} />
                    {errors.email && <span>Email is mandatory</span>}
                    <Input type="password" placeholder="password" leftIcon={<MdLock color="#8647AD" />}  name="senha" control={control} />
                    {errors.senha && <span>Password is mandatory</span>}
                    <Button title="Create Account" variant="secondary" type="submit"/>
                </form>
                <Terms>By clicking on "create my free account", I declare that I accept DIO's Privacy Policy and Terms of Use.</Terms>
                <Row>
                    <Terms>I already have an account.</Terms>
                    <CriarText href="" onClick={() => handleCreateAccount()}>Login</CriarText>
                </Row>
                </Wrapper>
            </RightColumn>
        </Container>
    </>)
}

export { Register }