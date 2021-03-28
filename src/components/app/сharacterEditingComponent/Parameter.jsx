import React from 'react'
import styles from './CharacterEditing.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'


const Parameter = ({ name, points, editParmeters }) => {

    const onPlus = () => {
        editParmeters(name, 'PLUS')
    }
    const onMinus = () => {
        editParmeters(name, 'MINUS')
    }

    const plusParm = <FontAwesomeIcon icon={faPlusSquare} className={styles.plusParm} onClick={onPlus} />
    const minusParm = <FontAwesomeIcon icon={faMinusSquare} className={styles.minusParm} onClick={onMinus} />

    return (
        <div className={styles.parameter}>
            <p className={styles.titleParameter}>{name}</p>
            <div className={styles.navigations}>
                {minusParm}
                <span className={styles.points}>{points}</span>
                {plusParm}
            </div>
        </div>
    )
}

export default Parameter