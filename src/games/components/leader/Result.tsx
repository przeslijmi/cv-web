import { Link } from 'react-router-dom';

interface Props {
  result: number;
}

export default function  Result({
  result,
}: Props) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-7">
      <div className="text-center text-3xl mt-10 p-5 text-gray-800 dark:text-gray-200">
        Your score:<br />
        {Number(result).toFixed(2)} <span className="text-xl text-gray-600 dark:text-gray-400">/ 60.00</span>
      </div>
      {result >= 51 && (<div className="text-center text-3xl mt-10 p-5 text-gray-800 dark:text-gray-200">
        <p>Nice! You are a Leader.</p>
        <p className="text-xl text-blue-700 dark:text-blue-300 font-medium"><Link to="/contact">I want to work with You! --&gt;</Link></p>
      </div>)}
      {result < 51 && result > 10 && (<div className="text-center text-3xl mt-10 p-5 text-gray-800 dark:text-gray-200">
        <p>Not Great. Not Terrible.</p>
        <p className="text-xl text-blue-700 dark:text-blue-300 font-medium"><Link to="/contact">Let's talk! --&gt;</Link></p>
      </div>)}
      {result <= 10 && (<div className="text-center text-3xl mt-10 p-5 text-gray-800 dark:text-gray-200">
        <p>Why are You the way that You are?</p>
        <p className="text-xl text-blue-700 dark:text-blue-300 font-medium"><Link to="/contact">Let's talk! --&gt;</Link></p>
      </div>)}
    </div>
  )
}
