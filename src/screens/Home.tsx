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
                        <p className="paragraph">No(a) GymClub, nossa abordagem é o que nos torna o(a) melhor Academia na área de São Paulo, seguindo orgulhosamente essa filosofia desde 2000. Nós nos perguntamos o que é vitalmente importante para os nossos alunos e desenvolvemos um método eficaz. Não importa se você é novo nisso ou quer avançar para o próximo nível. No(a) GymClub, vamos ajudar você a alcançar seus objetivos.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;