import { Container } from "./style";
import titleBg from "../../assets/Polygon.png";
import { FiMail, FiUser, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useEffect, useState } from "react";
import { WINDOW_MOBILE_WIDTH } from "../../utils/constants";

export function SignUp() {
    const [isMobile, setIsMobile] = useState([
        window.innerWidth
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    })
    return (
        <Container>

            <div id="title">
                <img src={titleBg} alt="logo" />
                <h1>food Explorer</h1>
            </div>

            <form>
                {
                    isMobile > WINDOW_MOBILE_WIDTH ?
                        <h2>Crie sua conta</h2> : null
                }

                <label htmlFor="user">Nome</label>
                <Input id="user" type="text" placeholder="Exemplo: Maria da Silva" icon={FiUser} />

                <label htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" icon={FiMail} />

                <label htmlFor="password">Senha</label>
                <Input id="password" type="password" placeholder="No mínimo 6 caracteres" icon={FiLock} />

                <Button title="Criar conta" />

                <ButtonText id="buttonText" title="Já tenho uma conta" />
            </form>
        </Container>
    )
}