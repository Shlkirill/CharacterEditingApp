import React from 'react'
import styles from './Skills.module.css'

import archery from '../../../img/skills/archery.png'
import atack from '../../../img/skills/atack.png'
import learnability from '../../../img/skills/learnability.png'
import intimidation from '../../../img/skills/intimidation.png'
import insight from '../../../img/skills/insight.png'
import appearance from '../../../img/skills/appearance.png'
import manipulation from '../../../img/skills/manipulation.png'
import medicine from '../../../img/skills/medicine.png'
import stealth from '../../../img/skills/stealth.png'
import survival from '../../../img/skills/survival.png'

const Skills = ({ skills }) => {
    return (
        <div className={styles.container}>
            <div className={styles.skills}>
                <div>
                    <p className={styles.title}>Атака</p>
                    <div className={styles.wrapperSkill}>
                        <div className={styles.skill}>
                            <img className={styles.skillLogo} src={atack} alt="" />
                            {!skills.attack && <div className={styles.skillDisable}>
                            </div>}
                        </div>
                        <p className={styles.lvl}><span>{skills.attack}</span> lvl</p>
                    </div>
                </div>
                <div>
                    <p className={styles.title}>Ловкость</p>
                    <div className={styles.item}>
                        <div className={styles.wrapperSkill}>
                            <div className={styles.skill}>
                                <img className={styles.skillLogo} src={archery} alt="" />
                                {!skills.archery && <div className={styles.skillDisable}>
                                </div>}
                            </div>
                            <p className={styles.lvl}><span>{skills.archery}</span> lvl</p>
                        </div>
                        <div className={styles.wrapperSkill}>
                            <div className={styles.skill}>
                                <img className={styles.skillLogo} src={stealth} alt="" />
                                {!skills.stealth && <div className={styles.skillDisable}>
                                </div>}
                            </div>
                            <p className={styles.lvl}><span>{skills.stealth}</span> lvl</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.title}>Интеллект</p>
                    <div className={styles.item}>
                        <div className={styles.wrapperSkill}>
                            <div className={styles.skill}>
                                <img className={styles.skillLogo} src={learnability} alt="" />
                                {!skills.learnability && <div className={styles.skillDisable}>
                                </div>}
                            </div>
                            <p className={styles.lvl}><span>{skills.learnability}</span> lvl</p>
                        </div>
                        <div className={styles.wrapperSkill}>
                            <div className={styles.skill}>
                                <img className={styles.skillLogo} src={survival} alt="" />
                                {!skills.survival && <div className={styles.skillDisable}>
                                </div>}
                            </div>
                            <p className={styles.lvl}><span>{skills.survival}</span> lvl</p>
                        </div>
                        <div className={styles.wrapperSkill}>
                            <div className={styles.skill}>
                                <img className={styles.skillLogo} src={medicine} alt="" />
                                {!skills.medicine && <div className={styles.skillDisable}>
                                </div>}
                            </div>
                            <p className={styles.lvl}><span>{skills.medicine}</span> lvl</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.title}>Харизма</p>
                    <div className={styles.item}>
                        <div className={styles.wrapperSkill}>
                            <div className={styles.skill}>
                                <img className={styles.skillLogo} src={intimidation} alt="" />
                                {!skills.intimidation && <div className={styles.skillDisable}>
                                </div>}
                            </div>
                            <p className={styles.lvl}><span>{skills.intimidation}</span> lvl</p>
                        </div>
                        <div className={styles.wrapperSkill}>
                            <div className={styles.skill}>
                                <img className={styles.skillLogo} src={insight} alt="" />
                                {!skills.insight && <div className={styles.skillDisable}>
                                </div>}
                            </div>
                            <p className={styles.lvl}><span>{skills.insight}</span> lvl</p>
                        </div>
                        <div className={styles.wrapperSkill}>
                            <div className={styles.skill}>
                                <img className={styles.skillLogo} src={appearance} alt="" />
                                {!skills.appearance && <div className={styles.skillDisable}>
                                </div>}
                            </div>
                            <p className={styles.lvl}><span>{skills.appearance}</span> lvl</p>
                        </div>
                        <div className={styles.wrapperSkill}>
                            <div className={styles.skill}>
                                <img className={styles.skillLogo} src={manipulation} alt="" />
                                {!skills.manipulation && <div className={styles.skillDisable}>
                                </div>}
                            </div>
                            <p className={styles.lvl}><span>{skills.manipulation}</span> lvl</p>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Skills