import { render, screen } from '@testing-library/react'
import { Test } from '.'

describe('<Test />', () => {
  it('should render the heading', () => {
    render(<Test />)

    expect(screen.getByRole('heading', { name: /Test/i })).toBeTruthy()
  })
})
