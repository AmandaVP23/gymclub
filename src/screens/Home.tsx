import React, { Component } from 'react';
import videoJumpRope from '../videos/video-jump_rope.mp4';
import videoJogging from '../videos/video-jogging.mp4';
import videoTrainingBattleRope from '../videos/video-training_battle_rope.mp4';
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
                        <p className="paragraph">Trabalhe no seu ganho de força ou perda de peso no(a) GymClub. Nosso objetivo é ser uma academia para todos. Visite-nos para um rápido treino ou para se matricular. Oferecemos diversas opções acessíveis para que você possa desfrutar de nossas instalações limpas e totalmente equipadas além do atendimento da nossa equipe de profissionais.</p>
                    </div>
                </section>

                {/* PHILOSOPHY SECTION */}
                <section className="section-philosophy">
                    <div className="section-philosophy__content">
                        <div className="section-philosophy__text">
                            <h2 className="heading-secondary u-margin-bottom-big">Nossa filosofia</h2>
                            <p className="paragraph-medium u-margin-bottom-big">O que fazemos de melhor</p>
                            <p className="paragraph">No GymClub, nossa abordagem é o que nos torna o(a) melhor Academia na área de São Paulo, seguindo orgulhosamente essa filosofia desde 2000. Nós nos perguntamos o que é vitalmente importante para os nossos alunos e desenvolvemos um método eficaz. Não importa se você é novo nisso ou quer avançar para o próximo nível. No(a) GymClub, vamos ajudar você a alcançar seus objetivos.</p>
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
                            <h2 className="heading-secondary u-margin-bottom-big">Nossa história</h2>
                            <p className="paragraph u-margin-bottom-big">O GymClub tem mudado a vida dos moradores de São Paulo desde que foi inaugurado(a) em 2000. Acreditamos que a prática de exercícios físicos não é um hobby, mas um estilo de vida. Fundamos nossa academia com o intuito de ser a segunda casa dos nossos clientes. Seja você praticante diário de atividades físicas ou caso nunca tenha pisado em uma academia antes, o(a) GymClub pode transformá-lo em uma nova pessoa. Queremos ser seu próximo parceiro de malhação. Ligue para a gente!</p>
                            <a href="contact_us" className="btn btn--primary">Ligue para nós</a>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;
