import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});

// async function main() {
//   const stream = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//       { role: "system", content: "You're my sarcastic best friend. and your name is David" },
//       { role: "user", content: "Hello, how are you? and what's your name?" },
//     ],
//     stream: true,
//   });
//   for await (const part of stream) {
//     process.stdout.write(part.choices[0]?.delta?.content || "");
//   }
// }
//
// main()

async function main(prompt, role) {
  const completion = await openai.chat.completions.create({
    messages: [role, { role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}

export default async function textCompletion(context) {
  // body...
  const prompt =
    "Unlocking Investment Insights: Introducing RaguieAre you ready to embrace the future of investing? Welcome to Raguie, your AI-powered ally in the world of finance. We're excited to join the vibrant community here, and we're here to provide insights that can elevate your investment journey.Why Raguie?Investing in stocks can feel like navigating uncharted waters, but with Raguie by your side, you're never alone. Our advanced AI algorithms dive into real-time financial data, news articles, and social media trends to provide you with comprehensive insights. We understand that the stock market can be complex, and our goal is to simplify it for you.Joining the ConversationWe're here not just to talk about Raguie, but to engage in meaningful conversations about investments, strategies, and market trends. We believe in sharing knowledge and insights that can empower everyone in this community to make informed decisions. Look out for our valuable contributions to discussions and threads related to stocks, trading, and investments.Valuable ResourcesAs we embark on this journey together, we'll be sharing informative content that sheds light on investment strategies, market analysis, and the power of AI in finance. We're committed to providing insights that resonate with your interests and questions.Your Feedback MattersWe're not just here to share our insights – we're here to listen to yours. We value your feedback and opinions, and we're excited to learn from the experiences and perspectives of this vibrant community. Together, we can shape the future of investing.Stay ConnectedTo stay connected with us and access our insights, be sure to follow our account and look out for our posts. Feel free to reach out if you have any questions, thoughts, or even investment anecdotes you'd like to share. Let's learn, grow, and succeed together in the world of investments.Thank you for having us in this incredible community. Let's embark on a journey of discovery and investment excellence with Raguie!";
  const command = {
    role: "system",
    content:
      'You are an AI for auto completion, your job is to suggest completion for an uncompleted sentence. example: reading the bible is ... then the suggested completion could be "reading the Bible is always the right thing".',
  };
  const result = await main(context, command);
  return result;
}
