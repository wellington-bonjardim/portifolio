import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMiM() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Wellington!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto de Wellington Bonjardim sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Fico muito feliz em tê-lo(a) aqui e gostaria de te convidar a conhecer um pouco mais sobre mim!
            </p>
            <p className={styles.paragrafo}>
                Sou formado em Licenciatura em Matemática pelo Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro (IFRJ), onde tive o meu primeiro contato com a programação através da disciplina "Introdução à Programação" que tinha como objetivo fornecer aos estudantes um primeiro contato com Python.
            </p>
            <p className={styles.paragrafo}>
                Neste momento, fiquei bastante curioso e admirado com as possibilidades que essa linguagem pode nos proporcionar e com tudo o que poderia ser feito. Porém, devido a circunstâncias da vida que envolviam estudos e trabalho, concluí a disciplina e não tive mais contato com a programação até concluir a faculdade. 
            </p>
            <p className={styles.paragrafo}>
                Algum tempo depois, já formado e atuando como professor de Matemática, senti que ainda faltava algo na minha vida e que eu não estava envolvido o suficiente com algo que realmente amo desde a infância: a Tecnologia. Conversando sobre isso com um amigo programador, ele comentou comigo sobre o JavaScript e disse para que eu "desse uma olhada". Então lá fui eu, curioso como sempre, tentar conhecer o que era esse tal de JavaScript, e foi aí que eu realmente tive contato com o que estava faltando na minha vida!
            </p>
            <p className={styles.paragrafo}>
                A partir daí, comprei um curso de desenvolvimento web na Udemy e mergulhei no mundo da programação e descobri que realmente quero dedicar a minha vida profissional à programação. Neste curso, tive a oportunidade de ter contato com algumas tecnologias como Bootstrap, JavaScript, PHP(Orientação a Objetos | PDO | Arquitetura MVC), Apache, MySQL, AJAX, jQuery, SASS e IONIC. 
            </p>
            <p className={styles.paragrafo}>
                Ao concluir este curso, conheci a plataforma da Alura e resolvi conhecer um pouco sobre uma tecnologia que todos comentam: o React. Neste momento, fiquei completamente maravilhado com a inteligência desse framework. Sua objetividade, organização e desempenho que é proporcionado ao usuário realmente me deixaram encantado. Desde então, sigo estudando a respeito desta maravilhosa tecnologia que é o React e também tenho tido contato com o TypeScript.
            </p>
            <p className={styles.paragrafo}>
                Paralelamente aos estudos, tenho tentado migrar para a área da tecnologia para enfim poder trabalhar com o que realmente amo e com o que me faz feliz! Dito isto, estou aberto a conversas e, se você leu até aqui, entre em contato comigo para podermos conversar através dos ícones que se encontram no rodapé desta página!
            </p>
            <p className={styles.paragrafo}>
                Por fim, gostaria de agradecê-lo(a) por estar aqui! Fico realmente muito feliz por você estar aqui conhecendo um pouco mais sobre mim e sobre os meus projetos!
            </p>

        </PostModelo>
    )
}