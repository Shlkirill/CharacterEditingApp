import React, { useState } from 'react'
import styles from './Character.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBolt, faRunning, faPen, faCheck, faFistRaised } from '@fortawesome/free-solid-svg-icons'


const Character = ({ name, avatar, lifeParameter, energy, evasion, editName, damageUser }) => {
    let [editNameMode, setEditNameMode] = useState(false)

    let lifeLogoArr = []
    for (let i = 0; i < lifeParameter; i++) {
        lifeLogoArr.push(<FontAwesomeIcon icon={faHeart} className={styles.lifeLogo} />)
    } // Считаем количество жизненной силы

    let energyLogoArr = []
    for (let i = 0; i < energy; i++) {
        energyLogoArr.push(<FontAwesomeIcon icon={faBolt} className={styles.energyLogo} />)
    } // Считаем количество энергии

    let evasionLogoArr = []
    for (let i = 0; i < evasion; i++) {
        evasionLogoArr.push(<FontAwesomeIcon icon={faRunning} className={styles.evasionLogo} />)
    }   // Считаем количество уклонения

    const editNameButton = <FontAwesomeIcon icon={faPen} className={styles.editName}
        onClick={() => { setEditNameMode(true) }} />
    const takeName = <FontAwesomeIcon icon={faCheck} className={styles.takeName}
        onClick={() => { setEditNameMode(false) }} />
    const damageIcon = <FontAwesomeIcon icon={faFistRaised} className={styles.damageIcon} onClick={() => { damageUser() }} />

    const onChangeName = (value) => {
        editName(value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.characterEditing}>
                <div className={styles.lifeParameters}>
                    <div className={styles.life}>
                        {lifeLogoArr}
                    </div>
                    <div className={styles.energy}>
                        {energyLogoArr}
                    </div>
                    <div className={styles.evasion}>
                        {evasionLogoArr}
                    </div>
                </div>
                <div className={styles.characterLogoStyle}>
                    <img src={avatar} alt="" />
                </div>
                <div className={styles.nameInfo}>
                    {editNameMode ? <input type="text" maxLength='10' value={name} autoFocus={true} className={styles.inputName}
                        onChange={(e) => {
                            onChangeName(e.target.value)
                        }} />
                        : <p className={styles.name}>{name}</p>}
                    {editNameMode ? takeName : editNameButton}
                </div>
                <div>
                    {damageIcon}
                </div>
            </div>
        </div>
    )
}

export default Character