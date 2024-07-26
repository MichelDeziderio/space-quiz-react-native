import { useCallback } from "react";

const IA_API = 'https://api.openai.com/v1/chat/completions';
const OPENAI_API_KEY = '';

export default function iaService() {
  const httpPostResquest = useCallback(async function (body: any): Promise<any> {
    const res = await fetch(`${IA_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(body),
    })

    const data = await res.json()
    console.log(data.choices[0].message.content);
    return JSON.parse(data.choices[0].message.content);

  }, [])

  return { httpPostResquest }
}