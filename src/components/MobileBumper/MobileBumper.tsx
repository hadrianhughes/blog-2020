import React, { FunctionComponent } from 'react'

export interface MobileBumperProps {
  heading: string
  onOpen: () => void
}

const MobileBumper: FunctionComponent<MobileBumperProps> = ({ heading, onOpen }) => (
  <section>
    <h1>{heading}</h1>
    <button type="button" onClick={onOpen}>Toggle</button>
  </section>
)

export default MobileBumper
