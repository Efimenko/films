import React from "react";
import { render, fireEvent, cleanup, wait } from "react-testing-library";
import FavoriteButton from './index'

afterEach(cleanup);

describe('<FavoriteButton /> component', () => {
  it('shoul have right title depends on isFavorite prop', () => {
    const {getByTitle, rerender} = render(<FavoriteButton isFavorite removeFromFavorite={() => {}} />)
    expect(getByTitle('Remove from favorite')).not.toBeNull()
    rerender(<FavoriteButton addToFavorite={() => {}} />)
    expect(getByTitle('Add to favorite')).not.toBeNull()
  })
})