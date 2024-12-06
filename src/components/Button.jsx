import React from 'react';

const Button = (props) => {
  const {id,title,leftIcon,containerClass,rightIcon} = props
  return (
   <button className={`group relative z-10 w-fit ${containerClass} cursor-pointer overflow-hidden rounded-full bg-violet-50 py-3 px-7 text-black`} id={id}>
     {leftIcon}
      <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
        {title}
      </span>
      {rightIcon}
   </button>
  )
}

export default Button;
