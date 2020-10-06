import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    jhustifyContent: 'center',
    backgroundColor: 'white',
    fontFamily: 'Bebas Neue'
  },

  aboutTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20
  },

  press: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'black'
  },

  pressBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  image: {
    display: 'flex',
    width: 700,
    paddingBottom: 25,
    paddingLeft: 20,
  }

})

export default useStyles;