import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true, // This is also the default, can be omitted
});
