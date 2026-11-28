
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Lightbulb, ChevronDown, Info } from "lucide-react";
import VoteButton from "../components/VoteButton";
import type { SuggestionCategory } from "../types";

interface SuggestionFormValues {
  title: string;
  description: string;
  category: SuggestionCategory | "";
}

function SuggestionComposer() {
  const initialValues: SuggestionFormValues = {
    title: "",
    description: "",
    category: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(5, "Title must be at least 5 characters")
      .required("Title is required"),

    description: Yup.string()
      .min(15, "Description must be at least 15 characters")
      .required("Description is required"),

    category: Yup.string()
      .oneOf(["Feature", "Improvement", "Bug", "UI/UX", "Other"])
      .required("Please select a category"),
  });

  const handleSubmit = (values: SuggestionFormValues) => {
    console.log(values);
  };

  return (
    <section className="group relative isolate mt-5 w-full min-w-0 overflow-hidden rounded-none border-0 bg-transparent transition-all duration-500 sm:mt-6 sm:rounded-2xl sm:border sm:border-[#30263d] sm:bg-[#12111b] sm:hover:border-[#a855f7]/50 sm:hover:shadow-[0_15px_50px_rgba(168,85,247,0.12)]">

      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="suggestion-pulse absolute -right-16 -top-20 h-44 w-44 rounded-full bg-[#a855f7]/10 blur-[70px]" />

        <div className="suggestion-float-reverse absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#7c3aed]/10 blur-[65px]" />

        <div className="suggestion-orbit absolute right-8 top-12 h-2 w-2 rounded-full bg-[#c084fc] shadow-[0_0_15px_#a855f7] sm:right-16 sm:top-16" />

        <div className="absolute inset-0 opacity-[0.035]" />
      </div>

      {/* Animated Top Line */}
      <div className="suggestion-shimmer absolute left-0 top-0 h-0.5 w-full bg-linear-to-r from-transparent via-[#c084fc] to-transparent" />

      {/* Header */}
      <div className="relative flex items-center gap-2.5 border-b border-[#30263d] px-0 py-3.5 sm:gap-3 sm:px-5 sm:py-4">

        <div className="suggestion-float flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#a855f7]/20 sm:h-10 ms-1 sm:w-10">
          <Lightbulb size={18} strokeWidth={1.8} className="sm:hidden" />
          <Lightbulb size={20} strokeWidth={1.8} className="hidden sm:block" />
        </div>

        <div className="min-w-0">
          <h2 className="suggestion-shimmer text-sm font-bold text-[#f5f3ff] sm:text-base">
            Share Your Idea
          </h2>

          <p className="text-[11px] text-[#a1a1aa] sm:text-xs">
            Help us make iLink better.
          </p>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1 rounded-full border border-[#a855f7]/15 bg-[#a855f7]/5 px-2 py-1 sm:gap-1.5 sm:px-2.5">

          <span className="suggestion-pulse h-1.5 w-1.5 rounded-full bg-[#a855f7]" />

          <span className="text-[8px] font-semibold tracking-wide text-[#c084fc] sm:text-[10px]">
            YOUR VOICE MATTERS
          </span>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="relative space-y-4 py-4 sm:p-5">

            {/* Title */}
            <div className="space-y-1.5">
              <label htmlFor="titleInput" className="text-xs font-semibold text-[#e9d5ff]">
                Suggestion Title
              </label>

              <Field
                name="title"
                id="titleInput"
                placeholder="Give your idea a title..."
                className="mt-1.5 w-full rounded-lg border border-[#30263d] bg-[#09090f]/70 px-3 py-2.5 text-sm text-[#f5f3ff] outline-none transition-all duration-300 placeholder:text-[#686477] hover:border-[#a855f7]/50 focus:border-[#a855f7] focus:bg-[#09090f] focus:ring-4 focus:ring-[#a855f7]/10 sm:mt-3 sm:rounded-xl sm:px-3.5 sm:py-3"
              />

              <ErrorMessage name="title" component="p" className="text-xs text-red-400" />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <label htmlFor="descriptionInput" className="text-xs font-semibold text-[#e9d5ff]">
                Description
              </label>

              <Field
                as="textarea"
                name="description"
                id="descriptionInput"
                rows={3}
                placeholder="Describe your idea..."
                className="mt-1.5 w-full resize-none rounded-lg border border-[#30263d] bg-[#09090f]/70 px-3 py-2.5 text-sm leading-relaxed text-[#f5f3ff] outline-none transition-all duration-300 placeholder:text-[#686477] hover:border-[#a855f7]/50 focus:border-[#a855f7] focus:bg-[#09090f] focus:ring-4 focus:ring-[#a855f7]/10 sm:mt-3 sm:rounded-xl sm:px-3.5 sm:py-3"
              />

              <ErrorMessage name="description" component="p" className="text-xs text-red-400" />
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <label htmlFor="categoryInput" className="text-xs font-semibold text-[#e9d5ff]">
                Category
              </label>

              <div className="relative">
                <Field
                  as="select"
                  name="category"
                  id="categoryInput"
                  className="mt-1.5 w-full cursor-pointer appearance-none rounded-lg border border-[#30263d] bg-[#09090f]/70 px-3 py-2.5 pr-10 text-sm text-[#f5f3ff] outline-none transition-all duration-300 hover:border-[#a855f7]/50 focus:border-[#a855f7] focus:ring-4 focus:ring-[#a855f7]/10 sm:mt-3 sm:rounded-xl sm:px-3.5 sm:py-3"
                >
                  <option value="">Choose a category</option>
                  <option value="Feature">Feature</option>
                  <option value="Improvement">Improvement</option>
                  <option value="Bug">Bug</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Other">Other</option>
                </Field>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#a1a1aa] transition-transform duration-300 group-focus-within:rotate-180"
                />
              </div>

              <ErrorMessage name="category" component="p" className="text-xs text-red-400" />
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-3 border-t border-[#30263d] pt-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-1.5 text-[11px] text-[#a1a1aa] transition-colors duration-300 hover:text-[#c084fc] sm:text-xs">
                <Info size={14} className="shrink-0 text-[#a855f7]" />
                <span>Every idea makes a difference.</span>
              </div>

             <div className="w-full sm:w-44">
  <VoteButton
    type="submit"
    variant="primary"
    size="sm"
    fullWidth
    loading={isSubmitting}
    disabled={isSubmitting}
  >
    Submit Idea
  </VoteButton>
</div>
            </div>

          </Form>
        )}
      </Formik>
    </section>
  );
}

export default SuggestionComposer;
