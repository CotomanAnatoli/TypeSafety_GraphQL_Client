import TreeLine from './TreeLine'
import { Note } from '../types'
import { FaTimes } from 'react-icons/fa';

type Props = {
    note: Note;
    index: number;
}

export default function Message({ note, index }: Props) {
    return <div className={`group mb-2 shrink-0 rounded-lg flex justify-center items-center shadow-neutral-300 drop-shadow-md bg-neutral-300 hover:bg-orange-300 w-48 h-20 relative`}>
        <FaTimes className='fill-slate-500 hover:cursor-pointer hover:fill-blue-800 text-sm right-2 top-2 absolute' />
        <TreeLine trunk={index === 0} />

        <p className="text-sm text-stone-500 font-bold p-2">
            {note.message}
            <br />
            <strong className="text-gray-800 text-right text-xs font-semibold mt-1">
                {new Date(note.createdAt).getMonth()}/
                {new Date(note.createdAt).getDate()}/
                {new Date(note.createdAt).getFullYear()}
            </strong>
        </p>
    </div>
}