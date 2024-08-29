import { OpenAI } from 'openai';

const openai = new OpenAI();

async function main() {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'Who is the most famous rapper of all time?',
      },
    ],
  });
  console.log(response.choices[0].message.content);
}

main();
