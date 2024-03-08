import { render, screen } from '@testing-library/react'
import Home from '.'

describe('Home Component', () => {
  it('should render the heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: new RegExp(String(Home)),
    })
    expect(heading).toBeTruthy()
  })
})
