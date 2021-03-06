import React, { Component } from 'react';
import videoJumpRope from '../videos/video-jump_rope.mp4';
import videoJogging from '../videos/video-jogging.mp4';
import videoTrainingBattleRope from '../videos/video-training_battle_rope.mp4';
import cyclingIndoorImg from '../images/indoor-cycling.jpg';
import cardioImg from '../images/cardio.jpg';
import yogaImg from '../images/yoga.jpg';
import IconPlayCircle from '../icons/IconPlayCircle';
import IconChevronRight from '../icons/IconChevronRight';
import IconPauseCircle from '../icons/IconPauseCircle';
import IconChevronLeft from '../icons/IconChevronLeft';

interface OwnProps {}

enum VIDEOS {
    JUMP_ROPE = 'JUMP_ROPE',
    TRAINING_BATTLE_ROPE = 'TRAINING_BATTLE_ROPE',
    JOGGING = 'JOGGING',
}

interface OwnState {
    videoIsPlaying: boolean;
    videoSelected: VIDEOS;
}

const initialState: OwnState = {
    videoIsPlaying: false,
    videoSelected: VIDEOS.JUMP_ROPE,
};

class Home extends Component<OwnProps, OwnState> {
    state = initialState;

    videoRef = React.createRef<HTMLVideoElement>();

    onVideoEnded = () => {
        if (this.videoRef && this.videoRef.current) {
            this.videoRef.current.currentTime = 0;
            this.setState({
                videoIsPlaying: false,
            });
        }
    }

    togglePlaying = () => {
        const { videoIsPlaying } = this.state;

        if (this.videoRef && this.videoRef.current) {
            if (videoIsPlaying) {
                this.videoRef.current.pause();
                this.setState({
                    videoIsPlaying: false,
                });
                return;
            }

            this.videoRef.current.play();
            this.setState({
                videoIsPlaying: true,
            });
        }
    }

    previousVideo = () => {
        const { videoSelected } = this.state;

        if (videoSelected === VIDEOS.TRAINING_BATTLE_ROPE) {
            this.setState({
                videoSelected: VIDEOS.JUMP_ROPE,
                videoIsPlaying: false,
            });
        } else if (videoSelected === VIDEOS.JOGGING) {
            this.setState({
                videoSelected: VIDEOS.TRAINING_BATTLE_ROPE,
                videoIsPlaying: false,
            });
        }
    }

    nextVideo = () => {
        const { videoSelected } = this.state;

        if (videoSelected === VIDEOS.JUMP_ROPE) {
            this.setState({
                videoSelected: VIDEOS.TRAINING_BATTLE_ROPE,
                videoIsPlaying: false,
            });
        } else if (videoSelected === VIDEOS.TRAINING_BATTLE_ROPE) {
            this.setState({
                videoSelected: VIDEOS.JOGGING,
                videoIsPlaying: false,
            });
        }
    }

    render() {
        const { videoIsPlaying, videoSelected } = this.state;

        let video = videoJumpRope;
        if (videoSelected === VIDEOS.JOGGING) {
            video = videoJogging;
        } else if (videoSelected === VIDEOS.TRAINING_BATTLE_ROPE) {
            video = videoTrainingBattleRope;
        }

        return (
            <main className="home">
                {/* WELCOME SECTION */}
                <section className="section-welcome">
                    <div className="section-welcome__parallax" />
                    <div className="section-welcome__information">
                        <h1 className="heading-primary u-margin-bottom-medium">Bem vindo ao GymClub</h1>
                        <p className="paragraph-medium u-margin-bottom-medium">Descubra seu ponto forte</p>
                        <p className="paragraph">Trabalhe no seu ganho de for??a ou perda de peso no(a) GymClub. Nosso objetivo ?? ser uma academia para todos. Visite-nos para um r??pido treino ou para se matricular. Oferecemos diversas op????es acess??veis para que voc?? possa desfrutar de nossas instala????es limpas e totalmente equipadas al??m do atendimento da nossa equipe de profissionais.</p>
                    </div>
                </section>

                {/* PHILOSOPHY SECTION */}
                <section className="section-philosophy">
                    <div className="section-philosophy__content">
                        <div className="section-philosophy__text">
                            <h2 className="heading-secondary u-margin-bottom-big">Nossa filosofia</h2>
                            <p className="paragraph-medium u-margin-bottom-big">O que fazemos de melhor</p>
                            <p className="paragraph">No GymClub, nossa abordagem ?? o que nos torna o(a) melhor Academia na ??rea de S??o Paulo, seguindo orgulhosamente essa filosofia desde 2000. N??s nos perguntamos o que ?? vitalmente importante para os nossos alunos e desenvolvemos um m??todo eficaz. N??o importa se voc?? ?? novo nisso ou quer avan??ar para o pr??ximo n??vel. No(a) GymClub, vamos ajudar voc?? a alcan??ar seus objetivos.</p>
                        </div>
                    </div>
                </section>

                {/* VIDEOS SECTION */}
                <section className="section-videos">
                    <div className="section-videos__content">
                        <video ref={this.videoRef} src={video} muted onEnded={() => this.onVideoEnded()} />
                        <div className="section-videos__content__controls">
                            <div
                                className={videoSelected !== VIDEOS.JUMP_ROPE ? 'ico-arrow' : 'ico-arrow-hidden'}
                                onClick={() => this.previousVideo()}
                            >
                                <IconChevronLeft />
                            </div>
                            <div onClick={() => this.togglePlaying()} className="section-videos__content__controls__center">
                                <IconPauseCircle classes={videoIsPlaying ? 'pause-show' : 'section-videos__content__controls__hide'} />
                                <IconPlayCircle classes={videoIsPlaying ? 'section-videos__content__controls__hide' : 'section-videos__content__controls__show'} />
                            </div>
                            <div
                                className={videoSelected !== VIDEOS.JOGGING ? 'ico-arrow' : 'ico-arrow-hidden'}
                                onClick={() => this.nextVideo()}
                            >
                                <IconChevronRight />
                            </div>
                        </div>
                    </div>
                </section>

                {/* HISTORY SECTION */}
                <section className="section-history" id="about_us">
                    <div className="section-history__content">
                        <div className="section-history__content__text">
                            <h2 className="heading-secondary u-margin-bottom-big">Nossa hist??ria</h2>
                            <p className="paragraph u-margin-bottom-big">O GymClub tem mudado a vida dos moradores de S??o Paulo desde que foi inaugurado(a) em 2000. Acreditamos que a pr??tica de exerc??cios f??sicos n??o ?? um hobby, mas um estilo de vida. Fundamos nossa academia com o intuito de ser a segunda casa dos nossos clientes. Seja voc?? praticante di??rio de atividades f??sicas ou caso nunca tenha pisado em uma academia antes, o(a) GymClub pode transform??-lo em uma nova pessoa. Queremos ser seu pr??ximo parceiro de malha????o. Ligue para a gente!</p>
                            <a href="contact_us" className="btn btn--primary">Ligue para n??s</a>
                        </div>
                    </div>
                </section>

                {/* SCHEDULE INFORMATION SECTION */}
                <section className="section-schedule">
                    <div className="section-schedule__info">
                        <div>
                            <h4 className="heading-tertiary u-margin-bottom-big txt-primary-color">Hor??rio</h4>
                            <p className="paragraph-medium u-margin-bottom-big">Venha nos visitar</p>
                            <p className="paragraph">Seg - Sex: 9:00 - 18:00</p>
                            <p className="paragraph">S??b: 10:00 - 14:00</p>
                            <p className="paragraph">Dom: fechado</p>
                        </div>
                    </div>
                    <div className="section-schedule__img-bg" />
                </section>

                {/* CLASSES SECTION */}
                <section className="section-classes">
                    <h2 className="heading-secondary u-margin-bottom-big txt-primary-color">PARTICIPE DE UMA AULA DE GIN??STICA</h2>
                    <p className="paragraph">No(a) GymClub, criamos aulas para pessoas de qualquer n??vel de preparo f??sico. Se voc?? quer chegar longe, voc?? consegue! Ou se voc?? quiser apenas perder peso e se manter ativo, temos a aula certa para voc??. Escolha as aulas que melhor se ad??quam aos seus hor??rios.</p>
                    <p className="paragraph">Garanta j?? seu lugar na pr??xima aula.</p>
                    <div className="section-classes__items">
                        <div className="section-classes__items__item">
                            <img src={cyclingIndoorImg} alt="cycling indoor" />
                            <h3 className="heading-fourth txt-primary-color u-margin-top-big">Ciclismo Indoor</h3>
                            <p className="paragraph u-margin-top-big">Fortale??a-se</p>
                        </div>
                        <div className="section-classes__items__item">
                            <img src={cardioImg} alt="cardio" />
                            <h3 className="heading-fourth txt-primary-color u-margin-top-big">Exerc??cios de cardio</h3>
                            <p className="paragraph u-margin-top-big">Elimine os quilos extras</p>
                        </div>
                        <div className="section-classes__items__item">
                            <img src={yogaImg} alt="yoga" />
                            <h3 className="heading-fourth txt-primary-color u-margin-top-big">Yoga</h3>
                            <p className="paragraph u-margin-top-big">Encontre sua for??a</p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;
