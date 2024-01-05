import IProps from './IProps'
import styles from './style.module.scss'


export const FlexRow = (
  { gap, children }: IProps,
) => {
  return (
    <div className={ styles.FlexRow } style={{ gap }}>{ children }</div>
  )
}
