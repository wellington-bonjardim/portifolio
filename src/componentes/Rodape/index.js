import styles from './Rodape.module.css'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>

            <div className={styles.texto}>
                <p>O que acha de conversarmos um pouco? </p>
            </div>

            <div className={styles.icones}>
                <a href='https://www.linkedin.com/in/wellington-bonjardim/' target="_blank">
                    <AiFillLinkedin size={30} />
                </a>

                <a href='mailto: wellingtonbonjardim7@gmail.com' target="_blank">
                    <AiOutlineMail size={30} />
                </a>

                <a href='https://github.com/wellington-bonjardim' target="_blank">
                    <AiFillGithub size={30} />
                </a>
            </div>
            
        </footer>
    )
}