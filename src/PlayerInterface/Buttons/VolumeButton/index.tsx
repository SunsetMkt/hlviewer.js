import { h } from 'preact'
import { classes } from 'typestyle'
import { VolumeButton as s } from './style'
import { ControlsStyle as cs } from '../../Controls.style'

export function VolumeButton(props: { onClick(): void }) {
  return (
    <button type="button" class={classes(cs.button, s.button)} onClick={props.onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentcolor">
        <title>Volume</title>
        <path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z" />
      </svg>
    </button>
  )
}
