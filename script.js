const apiKey ="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"
const apiUrl = "https://api.openai.com/v1/chat/completions";

async function sendMessage(message) {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  return json.choices[0].message.content;
}

const input = document.getElementById("search");
const button = document.getElementById("button");
const para=document.getElementById('text');
const loading=document.getElementById('loading');
button.addEventListener("click", async () => {
  const inputText = input.value;
  
//   const response=await sendMessage(
//     `According to the data till january 2021, tell the potential renewable energy source of ${inputText}  and how much is it produced till january 2021`
//   );
loading.classList.add('active');
try {
  const response=await sendMessage(`ideal sources of renewable energy in ${inputText} and amount of it produced.`)
  para.innerText=response;
  console.log(Response);
} catch (error) {
  console.log(error)
}
console.log('hii')
loading.classList.remove('active');
});


document.getElementById('searchbox').addEventListener('submit',(e)=>{
  e.preventDefault();
})
