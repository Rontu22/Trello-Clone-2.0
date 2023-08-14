import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
console.log("KEY : ", process.env.OPENAI_API_KEY);

export default openai;
