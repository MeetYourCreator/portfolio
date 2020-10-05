import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    listStyle: 'none'
  
  },

  navLink: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 50,
    color: 'white',
    outline: 'none',
    textDecoration: 'none'
  }

})

export default useStyles;