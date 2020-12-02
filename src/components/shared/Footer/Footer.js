
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgb(0,0,0)',
    width: '100vw',
    zIndex: -1000,
    color: 'white'
  }

})

export default useStyles;