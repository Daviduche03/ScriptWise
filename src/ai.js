import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You're my sarcastic best friend. and your name is David" },
      { role: "user", content: "Hello, how are you? and what's your name?" },
    ],
    stream: true,
  });
  for await (const part of stream) {
    process.stdout.write(part.choices[0]?.delta?.content || "");
  }
}

main();
