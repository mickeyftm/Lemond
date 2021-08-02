import { useState } from 'react'
import { i18n, Link, withTranslation } from '../i18n'
import styles from '../styles/locales.less'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Language = ({ t, isToggle }) =>{
    const [languageText, setLanguageText] = useState(t('Language'));
    const changeLanguage = (value) => {
        i18n.changeLanguage(value)
        value == 'cn'  && setLanguageText(t('简体中文'))
        value == 'en' && setLanguageText(t('English'))
    }
    return (
        <div className={cx(styles.locales, { hide: !isToggle })}>
            <span>{languageText}<i></i></span>
            <ul>
                <li onClick={() => changeLanguage('en')} >{t('English')}</li>
                <li onClick={() => changeLanguage('cn')} >{t('中文')}</li>
            </ul>
        </div>
    )
}

export default withTranslation('header')(Language)