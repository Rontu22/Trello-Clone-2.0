import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { todos } = await request.json();
    console.log(todos);

    // communicate with openAI GPT
    // const response = await openai.createCompletion({
    //   model: "text-davinci-002",
    //   prompt: "Write a short story about your favorite things",
    //   temperature: 0.7,
    //   max_tokens: 100,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    // });
    console.log("CAME HERE ");

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      n: 1,
      stream: false,
      messages: [
        {
          role: "system",
          content: `When responding, welcome the user always as Mr.Rontu and say welcome to the Todo App ! Limit the response to 200 characters`,
        },
        // {
        //   role: "user",
        //   content: `Hi there, provide a summary of the following todos, Count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day! Here's the data : ${JSON.stringify(
        //     todos
        //   )}`,
        // },
      ],
    });

    console.log("RESSS");

    console.log("RESPONSE : ", response);

    const { data } = response;

    console.log("DATA IS : ", data);
    console.log(data.choices[0].message);

    return NextResponse.json(data.choices[0].message);
  } catch (error) {
    console.log("ERROR OCCURED ", error);
  }
}
