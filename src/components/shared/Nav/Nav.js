import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  
  },

  navLink: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: 'white',
    outline: 'none',
    textDeopration: 'none',
    listStyle: 'none'
  }

})

export default useStyles;