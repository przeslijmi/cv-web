import HomeSection from '@home/components/HomeSection';
import { comments } from '@home/constants/comments';
import { Maximize2, Star } from 'lucide-react';

interface Props {}

export default function CommentsSection({}: Props) {

  return (
    <HomeSection
      className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
      title="What People Say"
      titleClass="text-gray-900 dark:text-gray-100"
      children={
        <div className="grid md:grid-cols-2 gap-8">
          {comments.map((c, ci) => (
            <div key={ci} className="group p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800">
              <div className="flex justify-between">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(c.rate)].map((_, ri) => (
                    <Star key={ri} className="w-5 h-5 fill-yellow-400 text-yellow-500 dark:text-yellow-400" />
                  ))}
                </div>
                <div className="border-black/10 border p-1 rounded-full bg-black/5  w-6 h-6 flex items-center justify-center">
                  <Maximize2 size={15} className="text-black/60 dark:text-white/80" />
                </div>
              </div>
              {c.contents.map((p, pi) => (
                <p key={pi} className={`
                  mb-4 italic text-gray-700 dark:text-gray-300
                  ${pi === 0 ? 'block' : 'hidden group-hover:block'}
                `}>
                  "{p}"
                </p>
              ))}
              <div className="font-semibold text-gray-900 dark:text-gray-200">{c.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{c.company}</div>
            </div>
          ))}
        </div>
      }
    />
  );
}
