import { Spin } from 'antd';
import _ from 'lodash';
import { ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { selectActionEnCours, useI18n } from 'waxant';

const blinkPointAnimation = keyframes`
    0%, 100% {
        fill: #333;
    }
    25%, 75% {
        fill: transparent;
    }
    30%, 70% {
        fill: #333;
    }
    35%, 65% {
        fill: transparent;
    }
    40%, 60% {
        fill: #333;
    }
    45%, 55% {
        fill: transparent;
    }
    50% {
        fill: #333;
    }
`;

const Composant = styled(Spin)`
    padding: 10px;
    cursor: pointer;

    .wrap_spinner {
        position: relative;
        margin-top: 200px;
        background-color: #eee;
        border: 2px solid #ddd;
        border-radius: 8px;
    }

    .svg_spinner {
        position: absolute;

        & .blinkpoint {
            animation: ${blinkPointAnimation} 3s ease-in-out infinite;
        }
    }

    .sp1 {
        top: 35px;
        left: -133px;
        width: 266px;
        height: 70px;
    }
    .sp2 {
        top: 130px;
        left: -125px;
        width: 400px;
        height: 200px;
    }
    .text_sp1 {
        font-family: 'ROBOTO';
        font-size: 20px;
        font-weight: normal;
        fill: #777;
        letter-spacing: 8.4px;
    }
    .text_sp2 {
        font-family: 'ROBOTO';
        font-size: 14px;
        font-weight: bold;
        fill: #777;
    }
`;

const Sablier = ({ children }) => {
    const i18n = useI18n();
    const actionEnCours = useSelector(selectActionEnCours);

    const getListeMessage = () => {
        const array = _.flatten(_.values(actionEnCours));
        const liste: ReactNode[] = array.map((actionName: string, i) => {
            return (
                <text x="0" y={30 * (i + 1)} className="text_sp2" key={i}>
                    {i18n.actionCtrl(actionName)} ...
                </text>
            );
        });
        return liste;
    };

    const enAction = useCallback(() => {
        let test = false;

        for (const label of _.values(actionEnCours)) {
            if (!_.isNil(label)) {
                test = true;
                window.scrollTo(0, 0);
                break;
            }
        }

        return test;
    }, [actionEnCours]);

    const spinner = () => (
        <div>
            <div className="wrap_spinner">
                <svg className="svg_spinner sp1" viewBox="0 0 380 100">
                    <rect x="45" y="38" width="16" height="16" fill="#333" className="blinkpoint" />
                    <text x="70" y="57" fontFamily="ROBOTO" fontSize="48" fontWeight="bold" fill="#62b01e">
                        DEMO
                    </text>
                    <text x="210" y="57" fontFamily="ROBOTO" fontSize="48" fontWeight="normal" fill="orange">
                        WAXANT
                    </text>
                </svg>
                <svg className="svg_spinner sp2" viewBox="0 0 400 200">
                    {getListeMessage()}
                </svg>
            </div>
        </div>
    );
    return (
        <Composant spinning={enAction()} indicator={spinner()}>
            {children}
        </Composant>
    );
};

export default Sablier;
