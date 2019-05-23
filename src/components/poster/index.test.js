import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Poster from './index'

it('should render placeholder on error', () => {
  const {queryByTestId} = render(<Poster />)
  expect(queryByTestId('poster-placeholder')).toBe(null)
  fireEvent.error(queryByTestId("poster-image"))
  expect(queryByTestId('poster-placeholder')).not.toBe(null)
  expect(queryByTestId('poster-image')).toBe(null)
})