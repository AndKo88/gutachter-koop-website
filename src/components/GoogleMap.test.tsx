import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import GoogleMap from './GoogleMap'

describe('GoogleMap', () => {
  const ORIGINAL_ENV = process.env

  beforeEach(() => {
    vi.resetModules()
    process.env = { ...ORIGINAL_ENV }
  })

  afterEach(() => {
    process.env = ORIGINAL_ENV
  })

  it('renders an iframe with the Google Maps Embed API when API key is set', () => {
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'TEST_KEY_123'
    const { container } = render(<GoogleMap />)
    const iframe = container.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe!.getAttribute('src')).toContain(
      'https://www.google.com/maps/embed/v1/place'
    )
    expect(iframe!.getAttribute('src')).toContain('key=TEST_KEY_123')
    expect(iframe!.getAttribute('src')).toContain('L%C3%BCdenscheid')
  })

  it('renders a static fallback with link to Google Maps when API key is missing', () => {
    delete process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    render(<GoogleMap />)
    const link = screen.getByRole('link', { name: /google maps/i })
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toContain('google.com/maps')
  })

  it('has a responsive container that fills its parent', () => {
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'TEST_KEY_123'
    const { container } = render(<GoogleMap />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper).toHaveClass('w-full', 'h-full')
  })

  it('sets appropriate iframe attributes for accessibility and performance', () => {
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'TEST_KEY_123'
    const { container } = render(<GoogleMap />)
    const iframe = container.querySelector('iframe')
    expect(iframe).toHaveAttribute('title')
    expect(iframe).toHaveAttribute('loading', 'lazy')
    expect(iframe!.getAttribute('style')).toContain('border')
  })
})
