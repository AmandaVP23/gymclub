import React, { FunctionComponent } from 'react';

interface OwnProps {
    classes?: string;
}

const IconPauseCircle: FunctionComponent<OwnProps> = (props: OwnProps) => {
    const { classes } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485 485" className={`svg-icon ${classes}`}>
            <path d="M413.974 71.026C368.171 25.225 307.274 0 242.5 0S116.829 25.225 71.026 71.026C25.225 116.829 0 177.726 0 242.5s25.225 125.671 71.026 171.474C116.829 459.775 177.726 485 242.5 485s125.671-25.225 171.474-71.026C459.775 368.171 485 307.274 485 242.5s-25.225-125.671-71.026-171.474zM242.5 455C125.327 455 30 359.673 30 242.5S125.327 30 242.5 30 455 125.327 455 242.5 359.673 455 242.5 455z"/>
            <path d="M172.5 140h55v205h-55zM257.5 140h55v205h-55z"/>
        </svg>
    );
};

export default IconPauseCircle;
