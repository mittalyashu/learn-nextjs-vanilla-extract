import { createTheme, style, createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root', {
  
})

export const [themeClass, themeVars] = createTheme({
  color: {
    brand: "#0070f3"
  },
  font: {
    body: "arial"
  }
});

export const exampleStyle = style({
  backgroundColor: themeVars.color.brand,
  fontFamily: themeVars.font.body,
  color: "white",
  padding: 10
});

export const main = style({
  minHeight: '100vh',
  padding: '4rem 0',
  flex: 1,
  display:'flex',
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