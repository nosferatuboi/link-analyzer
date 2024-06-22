const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/analyze', async (req, res) => {
  const { url } = req.body;

  try {
    const openaiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Analyze the content of the following URL and provide a summary, audience, and purpose: ${url}` }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const responseText = openaiResponse.choices[0].message.content.trim();
    console.log('OpenAI Response:', responseText);

    // Ensure proper splitting and parsing of the response
    const sections = responseText.split('\n').map(line => line.trim());
    const summary = sections.find(line => line.startsWith('Summary:'))?.split(': ')[1] || 'Summary not found';
    const audience = sections.find(line => line.startsWith('Audience:'))?.split(': ')[1] || 'Audience not found';
    const purpose = sections.find(line => line.startsWith('Purpose:'))?.split(': ')[1] || 'Purpose not found';

    res.json({ summary, audience, purpose });
  } catch (error) {
    console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to analyze URL' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
