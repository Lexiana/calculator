import React, { useState } from 'react'

const Calculator = () => {
    return (
        <div id='calculator' className='snap-center w-2/12 text-lg'>
            <div id='display' className='bg-emerald-900 h-20 text-white grid place-items-center'>
                display
            </div>
            <div className='buttons  grid grid-cols-4 gap-0 divide-y divide-x divide-emerald-900 border border-emerald-900 border-l-0'>
                <button className='col-span-2 h-12 bg-emerald-900  text-white' id='clear'>AC</button>
                <button id='divide' className=' h-12  bg-emerald-200'>/</button>
                <button id='multiply' className=' h-12  bg-emerald-200'>*</button>
                <button id='seven' className=' h-12  bg-emerald-400'>7</button>
                <button id='eight' className=' h-12  bg-emerald-400'>8</button>
                <button id='nine' className=' h-12  bg-emerald-400'>9</button>
                <button id='subtract' className=' h-12  bg-emerald-200'>-</button>
                <button id='four' className=' h-12  bg-emerald-400'>4</button>
                <button id='five' className=' h-12  bg-emerald-400'>5</button>
                <button id='six' className=' h-12  bg-emerald-400'>6</button>
                <button id='add' className=' h-12  bg-emerald-200'>+</button>
                <button id='one' className=' h-12  bg-emerald-400'>1</button>
                <button id='two' className=' h-12  bg-emerald-400'>2</button>
                <button id='three' className=' h-12  bg-emerald-400'>3</button>
                <button id='equals' className='row-span-2    bg-emerald-200'>=</button>
                <button id='zero' className='col-span-2 h-12  bg-emerald-400'>0</button>
                <button id='decimal' className=' h-12  bg-emerald-400'>.</button>

            </div>
        </div>
    )
}

export default Calculator