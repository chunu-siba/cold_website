import React, { useState } from 'react';
import { Star, CheckCircle2, X, Send } from 'lucide-react';

interface ReviewFormProps {
  businessName: string;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ businessName }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [reviewText, setReviewText] = useState('');

  const resetForm = () => {
    setRating(0);
    setHover(0);
    setReviewText('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return alert("Please select a star rating.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-10 text-center bg-slate-800 rounded-3xl border border-white/5 shadow-2xl animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-blue-500" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white uppercase tracking-tighter">Feedback Received</h3>
        <p className="text-slate-400 text-sm">Thank you for your industry feedback. We appreciate your contribution to {businessName}.</p>
        <button 
          onClick={() => {
              setSubmitted(false);
              resetForm();
          }}
          className="mt-8 text-blue-400 font-bold text-sm hover:underline uppercase tracking-widest active:scale-95"
        >
          Post another
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-[#1E293B] border border-white/10 shadow-2xl">
      <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-800/50">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center text-[10px] font-black text-white">G</div>
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">Rate {businessName}</span>
        </div>
        <button 
            type="button" 
            onClick={resetForm}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
            title="Reset Form"
        >
            <X className="w-5 h-5 text-slate-500 hover:text-white" />
        </button>
      </div>
      
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="text-center">
            <div className="flex justify-center space-x-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="transition-transform hover:scale-125 focus:outline-none"
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(star)}
                  aria-label={`Rate ${star} stars`}
                >
                  <Star
                    className={`w-10 h-10 ${
                      (hover || rating) >= star ? 'fill-blue-500 text-blue-500' : 'text-slate-700'
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Select Proficiency Rating</p>
          </div>

          <div>
            <textarea
              required
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
              className="w-full p-6 rounded-2xl bg-slate-900 border border-white/5 text-white focus:ring-2 focus:ring-blue-500 outline-none text-sm leading-relaxed transition-all"
              placeholder="Detail your site coordination or build experience..."
            ></textarea>
          </div>

          <div className="flex justify-end pt-4 space-x-6 items-center">
            <button 
                type="button" 
                onClick={resetForm}
                className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors active:scale-95"
            >
                Clear
            </button>
            <button
              type="submit"
              className="px-10 py-3 rounded-lg font-black uppercase tracking-widest bg-blue-600 hover:bg-blue-700 text-white transition-all text-xs shadow-lg active:scale-95 flex items-center space-x-2"
            >
              <Send className="w-3 h-3" />
              <span>Post Feedback</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};