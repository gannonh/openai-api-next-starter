import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.animal),
    max_tokens: 2000,
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal = animal;
  return `Product name: KRK ROKIT 5 G4 5 inch Powered Studio Monitors
  Review:
  ## KRK ROKIT 5 G4 5 inch Powered Studio Monitors
  
  <ProductImage imageName="krk-rokit-5-g4.jpg" imageAlt="KRK GoAux 4" />
  
  | Attribute | Score |
  | --------- | ------ |
  | Build quality | 8.0 |
  | Sound quality | 8.5 |
  | Playability / Ease-of-use | 8.5 |
  | Compatibility | 8.0 |
  | Value | 8.5 |
  
  The KRK ROKIT 5 G4 5 inch Powered Studio Monitors are a reliable choice for recording and mixing in a home studio or professional setting. With their bi-amped design and Kevlar drivers, these monitors deliver accurate sound with a wide frequency response.
  
  The ROKIT 5 G4 monitors feature a built-in DSP-driven EQ that allows for precise tailoring of the monitors' response to the room. The included Auto Room Correction feature uses a measurement microphone to optimize the monitors' response to the acoustic environment.
  
  <ProductLinks gcUrl="" amzUrl="" />
  
  ### Pros
  - Accurate sound with wide frequency response
  - Built-in DSP-driven EQ and Auto Room Correction feature
  - Variety of connectivity options
  
  ### Cons
  - Some users may find the bass response to be lacking
  
  ## Best For
  The KRK ROKIT 5 G4 5 inch Powered Studio Monitors are suitable for recording and mixing in a home or professional studio. They are particularly useful for those who need precise control over the monitors' response to the room.
  
  ## Key Specifications
  - Frequency response: 43Hz-40kHz
  - Power: 50 W RMS / 100 W peak
  - Inputs: XLR, TRS, RCA
  - Outputs: 1/8" stereo headphone output
  
  <ProductLinks gcUrl="" amzUrl="" />
  
  Product name: ${capitalizedAnimal}
  Review:`;
}



