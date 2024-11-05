import React from 'react'
import { ArrowLeft, ArrowRight } from '../Icons/index';
import { ButtonCarouselProps } from './ButtonCarousel.type';
import './ButtonCarousel.styles.css'

export const ButtonCarousel: React.FC<ButtonCarouselProps> = ({ cliked, direction }) => {
  return (
    <div className='button-carousel' onClick={cliked}>
      {direction === 'left' && (
        <ArrowLeft />
      )}
      {direction === 'right' && (
        <ArrowRight />
      )}
    </div>
  )
}
