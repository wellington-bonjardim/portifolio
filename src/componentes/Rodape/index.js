import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistada } from 'assets/marca_registrada.svg'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistada />
            
            Desenvolvido por Wellington Bonjardim.
            
            {/* Colocar no lugar da frase acima e da marca registrada o ícone do github, linkedin e email */}
        </footer>
    )
}