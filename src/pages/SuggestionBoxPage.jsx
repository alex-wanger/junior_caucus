import React from "react";
import TransitBackground from "../components/TransitBackground";
import { Mail } from "lucide-react";
import Footer from "../components/Footer";

const SuggestionBoxPage = () => {
  return (
    <TransitBackground>
      <div className="py-11">
        <div className="max-w-4xl mx-auto px-4 sm:px-7 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-5xl font-bold leading-tight md:leading-[1.2] bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Suggestion Box
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto"></p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-pink-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Mail className="w-6 h-6 text-pink-500 mr-3" />
              Share Your Suggestions
            </h2>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 border border-pink-200">
              <p className="text-gray-700 mb-4">
                Please use the form below to submit your suggestions, ideas, or
                feedback.
              </p>

              {/* Embedded Google Form */}
              <div className="bg-white rounded-lg shadow-inner overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfIkr4TkUDjht4yqm5wT3zWBckFMMGDhpDrRkuf4RCmJH8-mw/viewform?embedded=true"
                  width="100%"
                  height="700"
                  title="Suggestion Box Form"
                  className="rounded-lg"
                >
                  Loading form...
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </TransitBackground>
  );
};

export default SuggestionBoxPage;
