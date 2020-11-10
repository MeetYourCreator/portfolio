import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    fontFamily: 'Bungee Hairline',
    fontSize: 10
  },

  aboutTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontWeight: 900,
    paddingRight: 15
  },

  aboutBio: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 30,
    fontSize: 15,
    textAlign: 'justify',
    textJustify: 'inter-word',
    fontFamily: 'Bungee Hairline',
    fontWeight: 900,
    borderTop: '5px solid black'
  },

  aboutTitleSection: {
    display: 'flex',
    justifyContent: 'space-evenly',
    color: 'white',
    fontSize: 20
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