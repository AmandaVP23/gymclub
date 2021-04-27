import React, { FunctionComponent } from 'react';

const Home: FunctionComponent = () => {
    return (
        <main className="home">
            <section className="section-welcome">
                <div className="section-welcome__parallax" />
                <div className="section-welcome__information">
                    <h1 className="heading-primary u-margin-bottom-medium">Bem vindo ao GymClub</h1>
                    <p className="paragraph-medium u-margin-bottom-medium">Descubra seu ponto forte</p>
                    <p className="paragraph">Trabalhe no seu ganho de força ou perda de peso no(a) GymClub. Nosso objetivo é ser uma academia para todos. Visite-nos para um rápido treino ou para se matricular. Oferecemos diversas opções acessíveis para que você possa desfrutar de nossas instalações limpas e totalmente equipadas além do atendimento da nossa equipe de profissionais.</p>
                </div>
            </section>
            <section className="section-philosophy">
                <div className="section-philosophy__content">
                    <div className="section-philosophy__text">
                        <h2 className="heading-secondary u-margin-bottom-big">Nossa filosofia</h2>
                        <p className="paragraph-medium u-margin-bottom-big">O que fazemos de melhor</p>
                        <p className="paragraph">No GymClub, nossa abordagem é o que nos torna o(a) melhor Academia na área de São Paulo, seguindo orgulhosamente essa filosofia desde 2000. Nós nos perguntamos o que é vitalmente importante para os nossos alunos e desenvolvemos um método eficaz. Não importa se você é novo nisso ou quer avançar para o próximo nível. No(a) GymClub, vamos ajudar você a alcançar seus objetivos.</p>
                    </div>
                </div>
            </section>
            <section className="section-history">
                <div className="section-history__content">
                    <div className="section-history__content__text">
                        <h2 className="heading-secondary u-margin-bottom-big">Nossa história</h2>
                        <p className="paragraph u-margin-bottom-big">O GymClub tem mudado a vida dos moradores de São Paulo desde que foi inaugurado(a) em 2000. Acreditamos que a prática de exercícios físicos não é um hobby, mas um estilo de vida. Fundamos nossa academia com o intuito de ser a segunda casa dos nossos clientes. Seja você praticante diário de atividades físicas ou caso nunca tenha pisado em uma academia antes, o(a) GymClub pode transformá-lo em uma nova pessoa. Queremos ser seu próximo parceiro de malhação. Ligue para a gente!</p>
                        <a href="contact_us" className="btn btn--primary">Ligue para nós</a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;