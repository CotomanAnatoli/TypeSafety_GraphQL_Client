import { useState, useRef } from 'react'
import Message from './Message'
import { FaPlusCircle } from 'react-icons/fa'
import { User } from '../types'

type Props = {
    user: User
}

export default function UserDisplay({ user }: Props) {

    const [isAdding, setIsAdding] = useState<boolean>(false)
    const ref = useRef<HTMLTextAreaElement>(null)

    const toggle = () => {
        setIsAdding(prev => !prev)
    }

    const onSave = () => {
        console.log(`Create note: ${ref.current?.value}`)
        toggle()
    }

    return <div className="flex gap-x-24 justify-center">
        <div className="rounded-md  flex justify-center items-center drop-shadow-md bg-orange-300 shadow-sm shadow-orange-600 w-48 h-20">
            <p className="text-xl text-black font-bold">
                {user.name}
            </p>
        </div>
        <div>
            {user.notes.map((message, i) => <Message key={i} index={i} note={message} />)}
            {
                isAdding ?
                    <div className="bg-white-100 pt-2">
                        <div className="mt-1">
                            <textarea ref={ref} id="about" name="about" rows={1} className="mt-1 p-2 block w-full shadow-neutral-500 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Note"></textarea>
                            <button onClick={onSave} className="group flex justify-center w-full  rounded-lg p-2 transition ease-in-out duration-300 hover:bg-opacity-100 hover:scale-105">
                                <FaPlusCircle className='fill-blue-900 w-full pt-2 h-8 text-center transition ease-in-out duration-300 group-hover:fill-blue-500 group-hover:opacity-75 hover:fill-blue-700'  />
                            </button>

                        </div>
                    </div>
                    :
                    <button onClick={toggle} className="group flex justify-center w-full border-2 rounded-lg p-2 border-neutral-900 bg-sky-500 bg-opacity-70 border-opacity-50 transition ease-in-out duration-300 hover:bg-opacity-100 hover:scale-105">
                        <FaPlusCircle className="fill-slate-600 w-8 h-8 transition ease-in-out duration-300 group-hover:fill-slate-900 group-hover:opacity-75" />
                    </button>
            }
        </div>
    </div>
}