import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Paragraph } from '../src'

describe('Paragraph', async () => {
    it('should render', async () => {
        render(<Paragraph>Paragraph</Paragraph>)
        expect(screen.getByText('Paragraph')).toBeInTheDocument()
    })
})
