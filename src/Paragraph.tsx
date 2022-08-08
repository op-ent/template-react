import React from 'react'

export interface ParagraphProps {
    children: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
    return <p>{children}</p>
}
