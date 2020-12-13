import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import DarkModeToggler from './DarkModeToggler'
import { DarkModeProvider } from '../../context/DarkMode'

describe('DarkModeToggler component', () => {
  it('Should render a label', () => {
    const { container } = render(
      <DarkModeProvider>
        <DarkModeToggler />
      </DarkModeProvider>
    )

    expect(container.querySelector('label')).toBeTruthy()
  })

  it('Should render an input inside the label', () => {
    const { container } = render(
      <DarkModeProvider>
        <DarkModeToggler />
      </DarkModeProvider>
    )

    expect(container.querySelector('label > input')).toBeTruthy()
  })

  it('Should be unchecked by default', () => {
    const { container } = render(
      <DarkModeProvider>
        <DarkModeToggler />
      </DarkModeProvider>
    )

    expect(container.querySelector('input').checked).not.toBeTruthy()
  })

  it('Should be checked after a click event is fired', () => {
    const { container } = render(
      <DarkModeProvider>
        <DarkModeToggler />
      </DarkModeProvider>
    )


    act(() => {
      fireEvent.click(container.querySelector('input'))
    })

    expect(container.querySelector('input').checked).toBeTruthy()
  })

  it('Should be checked after a click event on the label is fired', () => {
    const { container } = render(
      <DarkModeProvider>
        <DarkModeToggler />
      </DarkModeProvider>
    )


    act(() => {
      fireEvent.click(container.querySelector('label'))
    })

    expect(container.querySelector('input').checked).toBeTruthy()
  })
})
