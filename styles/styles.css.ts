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

export const code = style({
  background: '#fafafa',
  borderRadius: '5px',
  padding: '0.75rem',
  fontSize: '1.1rem',
  fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
})

export const titleLink = sprinkles({
  color: "blue-500",
  backgroundColor: "gray-700",
  // color: vars.color.brand,
  textDecoration: 'none',
})