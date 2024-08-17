import React from 'react'

const Title = ({Title, SubTitle}) => {
  return (
    <div className= ' pt-20 flex flex-col items-center'>
      <p className='text-Accent font-bold'>{Title}</p>
      <h1 className='font-semibold text-3xl text-black'>{SubTitle}</h1>
    </div>
  )
}

export default Title
