import React from 'react'
import CustomInput from '../components/customInput/customInput'
import { AddCircle } from '@mui/icons-material'

function CreateTask() {

    return (
        <div className='px-4 w-full m-auto py-10  space-y-4'>

            <CustomInput label={"Quest Name"} placeholder='Enter Quest Name' type="text" />
            <textarea className='rounded-lg p-3 h-[150px] border-black border w-full' placeholder='Enter Description'>

            </textarea>

            <CustomInput label={"Deadline"} placeholder='Enter Reward' type="date" />
            <CustomInput label={"Reward"} placeholder='Enter Reward' type="number" />

            <div className='flex flex-row justify-center absolute w-full left-0 bottom-[15%]'>
                <button className='bg-[#FF8A00] text-white p-2 rounded-lg'>Create Quest <AddCircle /> </button>
            </div>

        </div>
    )
}

export default CreateTask