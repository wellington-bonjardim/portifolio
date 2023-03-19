import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Seja muito bem-vindo(a)!
                </h1>

                <p className={styles.paragrafo}>     
                    Aqui compartilho alguns de meus projetos e também um pouco mais sobre quem eu sou! Fique à vontade para conhecer meus projetos e entrar em contato ! Meu nome é Wellington Bonjardim e sou desenvolvedor Full Stack!
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Wellington Bonjardim sorrindo"
                />
            </div>
        </div>
    )
}