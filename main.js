Webcam.set({
    width: 350,
    height:400,
    image_format: "png",
    image_quality: 90
});

camera=document.getElementById("camera");

webcam.attach("#camera")

    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        });
    }

    console.log(ml5.model,"ml5.model")
    classifier.classify("https://teachablemachine.withgoogle.com/models/rCtCOb77w/model.json",ModelLoaded);

    function ModelLoaded(){
        console.log("Model Loaded!");
    }
    function check(){
        img=document.getElementById('captured_image');
        classifier.classify(img, gotResult);
    }
    
    
    function speak(){
        var synth=window.speechSynthesis;
        speak_data_1="speech prediction 1 is"+ prediction_1;
        speak_data_2="speech prediction 2 is"+ prediction_2;
        var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        synth.speak(utterThis);
    }
    
    
    function gotResult(error,result){
        if(error){
            console.error(error);
        } else{
            console.log(result);
            document.getElementById("result_hand_gesture").innerHTML=result[0].label;
            document.getElementById("result_hand_gesture2").innerHTML=result[1].label;
            prediction_1=result[0].label;
            prediction_2=result[1].label;
            speak();
            if(result[0].label=="clap"){
                document.getElementById("update_emoji").innerHTML="&#128076;";
            }
            if(result[0].label=="ok"){
                document.getElementById("update_emoji").innerHTML="&#128077;";
            }
            if(result[0].label=="bump"){
                document.getElementById("update_emoji").innerHTML="&#128078;";
            }
        }}
