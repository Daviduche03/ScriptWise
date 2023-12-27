export class OpenRouterApi {
  constructor() {
    this.apiKey =
      "sk-or-v1-";
    this.siteUrl = "";
    this.siteName = "";
    this.apiUrl = "https://openrouter.ai/api/v1/chat/completions";
  }

  callApi(prompt, onError, onComplete, onFinish) {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "HTTP-Referer": `${this.siteUrl}`,
        "X-Title": `${this.siteName}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-4-1106-preview",
        messages: [
          {
            role: "system",
            content:
              "You are an AI writing assistant that continues existing text based on context from prior text. " +
              "Give more weight/priority to the later characters than the beginning ones. " +
              "Limit your response to no more than 500 characters, but make sure to construct complete sentences.",
            // we're disabling markdown for now until we can figure out a way to stream markdown text with proper formatting: https://github.com/steven-tey/novel/discussions/7
            // "Use Markdown formatting when appropriate.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    };

    fetch(this.apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        onComplete(data.choices[0].message.content);
      })
      .catch((error) => {
        onError(error);
      })
      .finally(() => {
        onFinish();
      });
  }
}
