import { globalStyle, style } from "@vanilla-extract/css";

export const Main = style({
    margin: '0 auto',
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

globalStyle(`${Main} ul`, {
    padding: 0,
    width: '100%',
})