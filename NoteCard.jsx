import { PenSquareIcon, TrashIcon } from 'lucide-react';
import { Link } from 'react-router'

const NoteCard = ({note}) => {
  return(
   <Link to={`/note/${note._id}`}
    className=" card bg-base-100 hover:shadow-lg transition-all border-t-red-400">

<div className="card-body">

<h3 className="card-title text-base-content">{note.title}</h3>
<p className="text-base-content/70 line line-clamp-3 "></p>
<div className="card-actions justify between items-center">
  <span className="text-sm text-base-content/50">
  {note.createdAt}          </span>
  <div className="flex items-center gap-1">
<PenSquareIcon className="size-4"/>
<button className="btn btn-ghost btn-xs text-error">
    <TrashIcon className="size-5"/>
   
      </button> 
       </div> 
        </div>
  
   

</div>




</Link>
)};
export default NoteCard