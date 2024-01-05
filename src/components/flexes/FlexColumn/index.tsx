import IProps from './IProps'
import styles from './style.module.scss'


export const FlexColumn = (
  { gap, children }: IProps,
) => {
  return (
    <div className={ styles.FlexColumn } style={{ gap: gap+'rem' }}>{ children }</div>
  )
}
