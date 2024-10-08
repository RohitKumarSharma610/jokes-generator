const jokes = [
    "डॉक्टर: आपको आराम की जरूरत है।   मरीज: डॉक्टर साहब, आराम कर-कर के तो मैं बोर हो गया हूँ!",
    
    "पत्नी: मैं तुम्हारे बिना क्या करूँगी?   पति: आराम से रहना, तुम्हें तो मेरी जरूरत नहीं है!",

    "पप्पू: यार, ये WiFi का पासवर्ड क्या है?   बबलू: शादी के बाद पता चलेगा, पहले तो 'राधे-राधे' है!",

    "टीचर: तुम स्कूल क्यों नहीं आए?   पप्पू: सर, घर में WiFi नहीं था।   टीचर: तो क्या तुमको घर पर काम नहीं करना चाहिए था?   पप्पू: सर, काम नहीं, डाटा था!",

    "पति: तुम हमेशा मेरे ऊपर क्यों चिल्लाती हो?   पत्नी: क्योंकि तुम मेरी सुनते नहीं!   पति: तो मैं क्या करूँ?   पत्नी: म्यूट कर दो!",

    "बबलू: मैं सुबह उठकर सीधे बाथरूम जाता हूँ।   पप्पू: क्यों?   बबलू: क्योंकि वहीं से मेरा दिन शुरू होता है... 'शावर' लेकर!",

    "पत्नी: मैं तुम्हें कभी अकेला नहीं छोड़ सकती।   पति: क्यों?   पत्नी: क्योंकि तुम बिना मुझे बताए घर में घुसकर भी साड़ी पहनने की कोशिश करोगे!",

    "पप्पू: मेरी बीवी मुझसे बहुत प्यार करती है।   बबलू: कैसे पता?   पप्पू: क्योंकि वो हमेशा मुझसे कहती है, 'मैं तुमसे बहुत प्यार करती हूँ'... जब मैं उसके पर्स में पैसे डालता हूँ!",

    "टीचर: तुम इतने लेट क्यों आए?   पप्पू: सर, मेरी गाड़ी का पेट्रोल खत्म हो गया था।   टीचर: तो तुमने पैदल क्यों नहीं आए?   पप्पू: सर, पैदल चलते-चलते मेरे जूते भी खत्म हो गए!",

    "पत्नी: तुमने मुझे बर्थडे पर क्या गिफ्ट दिया?   पति: मैंने तुम्हें मेरी प्यार भरी आंखों का नजराना दिया!   पत्नी: और क्या?   पति: वो भी तो अनमोल है!",

    "बबलू: यार, तुम्हारी बीवी बहुत सुंदर है!   पप्पू: हाँ, और जब वो गुस्से में होती है, तो और भी खूबसूरत लगती है!",

    "टीचर: बताओ, चाँद पर क्या है?   पप्पू: सर, चाँद पर कोई नहीं है, सब फेसबुक पर हैं!",

    "पति: तुम्हें मेरी कौन सी आदत सबसे ज्यादा पसंद है?   पत्नी: तुम्हारा सोना!   पति: क्यों?   पत्नी: क्योंकि तुम तब मुझे अकेला छोड़ देते हो!",

    "पप्पू: अगर मैं तुमसे शादी करूँ तो क्या तुम मुझसे प्यार करोगी?   बबलू: हाँ, पर पहले मुझे सच्चाई बताओ!",

    "पति: तुम्हारी सबसे बड़ी कमजोरी क्या है?   पत्नी: तुम्हारे बिना जीना!",

    "बबलू: यार, तुमने घर का काम क्यों नहीं किया?   पप्पू: मैंने तो सोचा था, तुम कर लोगी!",

    "टीचर: तुम स्कूल क्यों नहीं आए?   पप्पू: सर, मम्मी ने कहा था, 'आज छुट्टी है!'",

    "पत्नी: तुम हमेशा अपनी मम्मी के बारे में क्यों बातें करते हो?   पति: क्योंकि तुम्हें सुनना नहीं है!",

    "पप्पू: मेरी बीवी हमेशा मुझसे शिकायत करती है!  बबलू: क्यों?   पप्पू: क्योंकि मैं उसकी बात सुनता नहीं!",

    "पत्नी: तुम मेरे लिए क्या कर सकते हो?   पति: मैं तुम्हारे लिए सब कुछ कर सकता हूँ, पर टोकरी नहीं!",

    "बबलू: तुम इतनी खुश क्यों हो?   पप्पू: मैंने अपनी बीवी को मना लिया है!",

    "टीचर: तुम हमेशा पढ़ाई में क्यों फेल होते हो?   पप्पू: सर, मैं सिर्फ असाइनमेंट पर ध्यान देता हूँ!",

    "पति: तुम्हें हमेशा मेरे कपड़े क्यों पसंद नहीं आते?   पत्नी: क्योंकि तुम बिना बताये पहन लेते हो!",

    "पप्पू: तुम कब शादी करोगे?   बबलू: जब मेरी दादी कहेंगी, तब करूँगा!",

    "पति: तुम्हें हमेशा मेरे कपड़े क्यों पसंद नहीं आते?   पत्नी: क्योंकि तुम बिना बताये पहन लेते हो!",

    "टीचर: तुम स्कूल क्यों नहीं आए?   पप्पू: सर, मम्मी ने कहा था, 'आज छुट्टी है!'",

    "पत्नी: तुम हमेशा अपनी मम्मी के बारे में क्यों बातें करते हो?   पति: क्योंकि तुम्हें सुनना नहीं है!",

    "पप्पू: मेरी बीवी हमेशा मुझसे शिकायत करती है!   बबलू: क्यों?   पप्पू: क्योंकि मैं उसकी बात सुनता नहीं!"
    
];
  

let currentJokeIndex = 0;

function changeJoke() {
    currentJokeIndex = (currentJokeIndex + 1) % jokes.length; 
    document.getElementById('screen').innerText = jokes[currentJokeIndex]; 
}
function button(){
    document.getElementById("jokeButton").innerHTML = "Jokes😂";
}
document.getElementById('jokeButton').addEventListener('click', changeJoke);