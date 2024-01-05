import styles from './style.module.scss'
import IProps from './IProps'


export const AppHeader = ({ text }: IProps) => {
  return <h1 className={ styles.AppHeader }>{ text }</h1>
}
