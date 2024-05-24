import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: "sk-proj-KpCqOlChFD9qMYAvU6gRT3BlbkFJtIXJUPy3dRB6BcxbcBru",
  dangerouslyAllowBrowser: true, // This is also the default, can be omitted
});
