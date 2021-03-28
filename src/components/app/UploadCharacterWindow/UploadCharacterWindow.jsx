import React, { useEffect } from 'react'
import styles from './UploadCharacterWindow.module.css'
import Loader from '../../../common/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const UploadCharacterWindow = ({ charcters, setUploadMode, getCharcters, getChar }) => {
    useEffect(() => {
        getCharcters()
    }, [])

    let closeWindow = <FontAwesomeIcon icon={faTimes} className={styles.times} onClick={() => { setUploadMode(false) }} />

    let arrCharcters = charcters.map(item => {
        return <div className={styles.charcter} onClick={() => { getChar(item.id); setUploadMode(false) }} key={item.id}>
            <div className={styles.avatar}>
                <img src={item.avatar} alt="" />
            </div>
            <p className={styles.name}>{item.name}</p>
        </div>
    }) // Получаем список всех пресонажей

    return (
        <div className={styles.container} onClick={(e) => { if (e.target == e.currentTarget) setUploadMode(false) }}>
            {charcters.length == 0 ? <Loader /> :
                <div className={styles.uploadWindow}>
                    <h3 className={styles.title}>Выберите персонажа: </h3>
                    {arrCharcters}
                    {closeWindow}
                </div>}
        </div>
    )
}

export default UploadCharacterWindow