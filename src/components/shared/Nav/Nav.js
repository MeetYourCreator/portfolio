import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    listStyle: 'none',
    fontFamily: 'Bungee Inline'
  
  },

  navLink: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 50,
    color: 'white',
    outline: 'none',
    textDecoration: 'none',
    fontSize: 20
  }

})

export default useStyles;