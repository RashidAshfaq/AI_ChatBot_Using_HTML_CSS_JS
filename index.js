
function init(){
 let res_elm = document.createElement('div');
 res_elm.innerHTML = 'Hello Myself RA, How can I Help you? ';
 res_elm.setAttribute('class','left');
 document.getElementById('msg').appendChild(res_elm);
}

document.getElementById('reply').addEventListener('click', async (e) => {
    e.preventDefault();

    var req = document.getElementById('msg_send').value;

    if(req == undefined || req == ""){
        return;
    } else {
     var res = "";

// chat gpt api
    const options = {
      method: 'POST',
      url: 'https://chatgpt-open-ai-nlp.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        Type: 'chatgpt4',
        'X-RapidAPI-Key': 'b248f0996fmsh8d03edec01fc826p17b86ejsnaabe1862af5e',
        'X-RapidAPI-Host': 'chatgpt-open-ai-nlp.p.rapidapi.com'
      },
      data: {
        prompt: req,
        temperature: '0.7'
      }
    };
    
    try {
      const response = await axios.request(options);
      res = response.data.answer;
      console.log(response.data.answer);
    } catch (error) {
      console.error(error);
    }

// exceed limit 20 per month
// const options = {
//     method: 'POST',
//     url: 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': 'b248f0996fmsh8d03edec01fc826p17b86ejsnaabe1862af5e',
//       'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
//     },
//     data: {
//       query: req
//     }
//   };
  
//   try {
//       const response = await axios.request(options);
//       res = response.data.response;
//     //   console.log(response.data.response);
//   } catch (error) {
//       console.error(error);
//   }

     let data_req = document.createElement('div');
     let data_res = document.createElement('div');

     let container1 = document.createElement('div');
     let container2 = document.createElement('div');

     container1.setAttribute('class','msg_con1');
     container2.setAttribute('class','msg_con2');

     data_req.innerHTML = req;
     data_res.innerHTML = res;

     data_req.setAttribute('class','right');
     data_res.setAttribute('class','left');

     let message = document.getElementById('msg');

     message.appendChild(container1);
     message.appendChild(container2);

     container1.appendChild(data_req);
     container2.appendChild(data_res);

     document.getElementById('msg_send').value = "";

     function scroll(){
        let scrollMsg = document.getElementById('msg');
        scrollMsg.scrollTop = scrollMsg.scrollHeight;
     }
     scroll();
    }
});