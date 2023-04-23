import { globalStyle, style } from "@vanilla-extract/css";

export const Article = style({
    margin: '0 auto',
    width: '100%',
    maxWidth: 700,
})

globalStyle(`${Article} img`, {
    width: '100%',
})

globalStyle(`${Article} h1.post-title`, {
    marginTop: 0,
    marginBottom: '1rem',
    fontFamily: 'Roboto Slab, serif',
    fontSize: '6rem',
})

globalStyle(`${Article} p, span, strong`, {
    fontSize: '1.25rem',
})