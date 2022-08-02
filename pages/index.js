import { themeClass, themeVars, exampleStyle } from "./styles.css.ts";

console.log(themeClass, themeVars);

export default function IndexPage() {
  return (
    <div className={themeClass}>
      <span className={exampleStyle}>Hello world!</span>
    </div>
  );
}
