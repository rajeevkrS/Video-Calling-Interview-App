// Piston Api is a service that allows us to run code in various programming languages.

// We will use this service to run the user's code and get the output.

// the base URL to access the Piston API service, which runs code
const PISTON_API = "https://emkc.org/api/v2/piston";

const LANGUAGES_VERSION = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
  cpp: { language: "cpp", version: "10.2.0" },
};

/**
 * @param {String} language- programming language
 * @param {String} code - source code to be executed
 * @returns {Promise<{success:boolean , output?:string, error?:string}>} - output of the code execution
 */

// Function to execute code using Piston API
export async function executeCode(language, code) {
  try {
    // Get language configuration
    const languageConfig = LANGUAGES_VERSION[language];
    if (!languageConfig) {
      return { success: false, error: `Unsupported language: ${language}` };
    }

    // Make API request to execute code
    const response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: languageConfig.language,
        version: languageConfig.version,
        // Piston API expects files array with name and content properties
        files: [
          {
            name: `main.${getFileExtension(language)}`,
            content: code,
          },
        ],
      }),
    });

    if (!response.ok) {
      return { success: false, error: `API Error: ${response.statusText}` };
    }

    const data = await response.json();

    // Extract output and error from the response
    const output = data.run.output || "";
    const stderr = data.run.stderr || "";

    if (stderr) {
      return { success: false, output: output, error: stderr };
    }

    return { success: true, output: output || "No Output!" };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}

// Helper function to get file extension based on programming language
function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
    cpp: "cpp",
  };

  // Default to .txt if language is not found
  return extensions[language] || "txt";
}
