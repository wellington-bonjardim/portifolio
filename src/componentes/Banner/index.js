import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá!!! 
                </h1>

                <p className={styles.paragrafo}>     
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque et earum in eaque reprehenderit minus, facilis excepturi esse voluptates debitis cupiditate tempora. Error sint amet laudantium velit sunt dolore porro.  
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