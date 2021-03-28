import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './AppContainer.module.css'
import { initalLifeParametersAC, editParmetersAC, editNameAC, damageUserAC, getCharTC, getSaveCharTC } from '../redux/charcterReducer'
import Skills from './skillsCharacter/Skills'
import Character from './visualCharacter/Character'
import CharacterEditing from './сharacterEditingComponent/CharacterEditing'
import Loader from '../../common/Loader'

const AppContainer = (props) => {

    useEffect(() => {
        props.getChar()
    }, [])

    useEffect(() => {
        if (props.id) props.initalLifeParameters()
    }, [props.basicParameters])

    return (
        <div>
            {!props.id ? <Loader /> :
                <div className={styles.container}>
                    <div className={styles.saveAndUploadNavigations}>
                        <button className={styles.upload} > Загрузить</button>
                        <button className={styles.save} onClick={() => { props.getSaveChar(props.id, props.charcter) }}>Сохранить</button>
                    </div>
                    <div className={styles.appHeader}>
                        <Character name={props.name} lifeParameter={props.lifeParameter} energy={props.energy}
                            evasion={props.evasion} editName={props.editName} damageUser={props.damageUser} />

                        <CharacterEditing pointParm={props.pointParm} basicParameters={props.basicParameters}
                            editParmeters={props.editParmeters} />
                    </div>
                    <div className={styles.appBottom}>
                        <Skills skills={props.skills} />
                    </div>
                </div>}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        id: state.charcterInfo.id,
        pointParm: state.charcterInfo.pointParm,
        basicParameters: state.charcterInfo.basicParameters,
        skills: state.charcterInfo.skills,
        name: state.charcterInfo.name,
        lifeParameter: state.charcterInfo.lifeParameter,
        energy: state.charcterInfo.energy,
        evasion: state.charcterInfo.evasion,
        charcter: state.charcterInfo,
    }
}
let mapDispatchToProps = {
    getChar: getCharTC,
    initalLifeParameters: initalLifeParametersAC,
    editParmeters: editParmetersAC,
    initalLifeParameters: initalLifeParametersAC,
    editName: editNameAC,
    damageUser: damageUserAC,
    getSaveChar: getSaveCharTC
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
