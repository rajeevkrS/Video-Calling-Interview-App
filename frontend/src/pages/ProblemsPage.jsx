import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon, SearchIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { useState } from "react";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Difficulty filter state
  const [difficultyFilter, setDifficultyFilter] = useState("ALL");

  // Apply search + difficulty filter
  const filteredProblems = problems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDifficulty =
      difficultyFilter === "ALL" || problem.difficulty === difficultyFilter;

    return matchesSearch && matchesDifficulty;
  });

  // Difficulty counts (ALL problems)
  const easyProblemsCount = problems.filter(
    (p) => p.difficulty === "Easy",
  ).length;
  const mediumProblemsCount = problems.filter(
    (p) => p.difficulty === "Medium",
  ).length;
  const hardProblemsCount = problems.filter(
    (p) => p.difficulty === "Hard",
  ).length;

  // Short description helper
  const getShortDescription = (text, maxLength = 120) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  // Filter button styles
  const getFilterButtonClass = (value) =>
    `btn btn-sm ${difficultyFilter === value ? "btn-primary" : "btn-outline"}`;

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
          <p className="text-base-content/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Difficulty Filters */}
          <div className="flex gap-2 flex-wrap">
            <button
              className={getFilterButtonClass("ALL")}
              onClick={() => setDifficultyFilter("ALL")}
            >
              All
            </button>
            <button
              className={getFilterButtonClass("Easy")}
              onClick={() => setDifficultyFilter("Easy")}
            >
              Easy
            </button>
            <button
              className={getFilterButtonClass("Medium")}
              onClick={() => setDifficultyFilter("Medium")}
            >
              Medium
            </button>
            <button
              className={getFilterButtonClass("Hard")}
              onClick={() => setDifficultyFilter("Hard")}
            >
              Hard
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-base-content/70 z-10 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by title or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered w-full pl-10 focus:outline-1 focus:border-base-100"
            />
          </div>
        </div>

        {/* Problems List */}
        <div className="space-y-4">
          {filteredProblems.length === 0 ? (
            /* Empty State */
            <div className="card bg-base-100">
              <div className="card-body text-center py-16">
                <h3 className="text-xl font-semibold mb-2">
                  No problems found
                </h3>
                <p className="text-base-content/60">
                  Try changing your search or filters
                </p>
              </div>
            </div>
          ) : (
            filteredProblems.map((problem) => (
              <Link
                key={problem.id}
                to={`/problem/${problem.id}`}
                className="card bg-base-100"
              >
                <div className="card-body py-2 px-4 rounded-xl hover:bg-green-950 transition-colors duration-200">
                  <div className="flex items-center justify-between gap-4">
                    {/* Left */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Code2Icon className="size-6 text-primary" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-xl font-bold">
                              {problem.title}
                            </h2>
                            <span
                              className={`badge ${getDifficultyBadgeClass(
                                problem.difficulty,
                              )}`}
                            >
                              {problem.difficulty}
                            </span>
                          </div>

                          <p className="text-sm text-base-content/60">
                            {problem.category}
                          </p>
                        </div>
                      </div>

                      <p className="text-base-content/80">
                        {getShortDescription(problem.description.text)}
                      </p>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-2 text-primary">
                      <span className="font-medium">Solve</span>
                      <ChevronRightIcon className="size-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-title text-lg">Total Problems</div>
                <div className="stat-value text-primary">{problems.length}</div>
              </div>

              <div className="stat">
                <div className="stat-title text-lg">Easy</div>
                <div className="stat-value text-success">
                  {easyProblemsCount}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title text-lg">Medium</div>
                <div className="stat-value text-warning">
                  {mediumProblemsCount}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title text-lg">Hard</div>
                <div className="stat-value text-error">{hardProblemsCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
