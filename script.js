async function generateCode() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  if (!prompt.trim()) {
    output.textContent = "⚠️ Please enter a prompt!";
    return;
  }

  output.textContent = "⏳ Generating... Please wait...";

  try {
    const res = await fetch("async function generateCode() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  if (!prompt.trim()) {
    output.textContent = "⚠️ Please enter a prompt!";
    return;
  }

  output.textContent = "⏳ Generating... Please wait...";

  try {
    const res = await fetch("https://code-generator-x3de.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    if (data.code) {
      output.textContent = data.code;
    } else {
      output.textContent = `❌ Error: ${data.error || "Something went wrong"}`;
    }
  } catch (err) {
    output.textContent = `🚨 Fetch Error: ${err.message}`;
  }
}
", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    if (data.code) {
      output.textContent = data.code;
    } else {
      output.textContent = `❌ Error: ${data.error || "Something went wrong"}`;
    }
  } catch (err) {
    output.textContent = `🚨 Fetch Error: ${err.message}`;
  }
}
