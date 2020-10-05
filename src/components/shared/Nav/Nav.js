import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },

  navLink: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 50,
    color: 'white',
    outline: 'none',
    textDecoration: 'none',
    listStyle: 'none'
  }

})

export default useStyles;