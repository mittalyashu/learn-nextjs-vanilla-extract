import { createTheme, style, createGlobalTheme, styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const vars = createGlobalTheme(':root', {
  color: {
    brand: "#0070f3"
  },
})

export const [themeClass, themeVars] = createTheme({
  font: {
    body: "arial"
  }
});

export const body = sprinkles({
  color: {
    darkMode: 'white'
  },
  backgroundColor: {
    darkMode: "black"
  }
})

export const main = sprinkles({
  minHeight: '100vh',
  paddingY: "large",
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const title = style([
  sprinkles({
    textAlign: 'center',
    margin: 'none',
    fontSize: 'large'
  }),
  {
    selectors: {
      '&': {
        lineHeight: '1.15'
      },
    },
    ':hover': {
      textDecoration: 'underline'
    },
    ':focus': {
      textDecoration: 'underline'
    },
    ':active': {
      textDecoration: 'underline'
    }
  }
])

export const description = sprinkles({
  textAlign: 'center',
  marginY: 'medium',
  fontSize: 'medium'

})

export const code = sprinkles({
  backgroundColor: '#fafafa',
  borderRadius: 'small',
  padding: 'small',
  fontSize: 'medium',
  fontFamily: 'default'
})

export const titleLink = sprinkles({
  color: "blue-500",
  backgroundColor: "gray-700",
  textDecoration: 'none',
})