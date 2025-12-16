import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
import Navbar from "../components/Navbar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription";
import OutputPanel from "../components/OutputPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";
import { executeCode } from "../lib/piston";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(
    // stater code is JS becz selected language state is Javascript
    PROBLEMS[currentProblemId].starterCode.javascript
  );
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  // initial problem set to be currentProblemId that is Two Sum
  const currentProblem = PROBLEMS[currentProblemId];

  // update problem when URL param changes
  useEffect(() => {
    if (id && PROBLEMS[id]) {
      // Updates state so the app knows which problem is currently active
      setCurrentProblemId(id);

      // Loads the correct starter code for:
      // ---The new problem
      // ---The currently selected language
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);

      // Clears any previous output before running the new code
      setOutput(null);
    }
  }, [id, selectedLanguage]);

  // Handle language change fucntion
  const handleLanguageChange = (e) => {
    // Gets the selected language value from the dropdown
    const newLang = e.target.value;
    setSelectedLanguage(newLang);

    // Loads the default starter code for that language from the current problem
    setCode(currentProblem.starterCode[newLang]);

    // Clears any previous output before running the new code
    setOutput(null);
  };

  // Handle to Change Problem
  const handleProblemChange = (newProblemId) =>
    navigate(`/problem/${newProblemId}`);

  // success celebration effect from canvas confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  // Normalize output for comparison (trim whitespace, handle different spacing)
  const normalizeOutput = (output) => {
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  // Function to check if test passed
  const checkIfTestPassed = (actualOutput, expectedOutput) => {
    // Normalize both outputs
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual === normalizedExpected;
  };

  // Handle Run Code Function
  const handleRunCode = async () => {
    // spinner/loader
    setIsRunning(true);

    // Clears any previous output before running the new code
    setOutput(null);

    // Calls the executeCode function from piston.js:
    // ---Sends the selected programming language
    // ---Sends the user-written code
    // ---Waits (await) until the execution finishes
    const result = await executeCode(selectedLanguage, code);

    //Saves the execution result into state
    setOutput(result);
    setIsRunning(false);

    //check if code executed successfully and matches expected result output
    if (result.success) {
      // Fetches the correct output for the selected language from the problem data
      const expectedOutput = currentProblem.expectedOutput[selectedLanguage];

      // Compares:
      // ---User’s output (result.output)
      // ---Expected output
      const testPassed = checkIfTestPassed(result.output, expectedOutput);

      if (testPassed) {
        triggerConfetti();
        toast.success("All tests passed! Great job!");
      } else {
        toast.error("Test failed! Check your output!");
      }
    } else {
      toast.error("Code execution failed!");
    }
  };

  // Reset Code Handler
  const handleResetCode = () => {
    setCode(currentProblem.starterCode[selectedLanguage]);
    setOutput(null);
    toast.success("Code reset to default");
  };

  return (
    <div className="h-screen bg-base-100 flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex-1 overflow-hidden">
        <PanelGroup direction="horizontal">
          {/* ---- LEFT PANEL- problem desciption ---- */}
          <Panel defaultSize={40} minSize={30}>
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
              onProblemChange={handleProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          {/* Resizable Handle */}
          <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

          {/* ---- RIGHT PANEL- code Editor & output ---- */}
          <Panel defaultSize={60} minSize={30}>
            <PanelGroup direction="vertical">
              {/* Top Panel- Code Editor Panel */}
              <Panel defaultSize={70} minSize={30}>
                <CodeEditorPanel
                  selectedLanguage={selectedLanguage}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handleLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                  onResetCode={handleResetCode}
                />
              </Panel>

              {/* Resizable Handle */}
              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

              {/* Bottom Panel- Output Panel */}
              <Panel defaultSize={30} minSize={30}>
                <OutputPanel output={output} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default ProblemPage;
