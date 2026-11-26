import SuggestionComposer from "./pages/SuggestionComposer";
import SuggestionHeader from "./pages/SuggestionHeader";
import SuggestionsFeed from "./pages/SuggestionsFeed";

export default function SuggestionsPage() {
  return <>
  <SuggestionHeader />
  <SuggestionComposer /> 
  <SuggestionsFeed />
  </>
}