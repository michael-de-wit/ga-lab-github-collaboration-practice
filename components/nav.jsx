//import {Link} from "react-router";
import { PlusIcon } from 'lucide-react';
const Navbar = ()=> {
  return (
  <header className="bg-base-300 border-base-content/10 border-b">  
        <div className="mx-auto max-w-6xl py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">I'm sleepy</h1>
              <h2 className='text-5xl from-orange-600 justify-stretch'>Testing</h2>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="btn btn-primary rounded-full hover:underline">Home</a></li>
                        <li><a href="/create" className="btn btn-primary rounded-full hover:underline">Create Note  <PlusIcon className="size-4"/></a></li>
                      
                    </ul>
                </nav>
            </div>

<span>text</span>


</div>
</header>
  )


}



  
  export default Navbar;