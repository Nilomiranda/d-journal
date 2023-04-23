import { globalStyle, style } from "@vanilla-extract/css";

export const Card = style({
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#000000',
})

globalStyle(`${Card} h1`, {
    margin: 0,
})