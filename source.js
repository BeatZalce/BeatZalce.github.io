var mic, recorder;
var b1, b2, b3, b4;
var slider1,slider2, slider3, slider4;
var sliderev1, sliderev2, sliderev3, sliderev4;
var sliderde1, sliderde2, sliderde3, sliderde4;
var sliderdi1, sliderdi2, sliderdi3, sliderdi4;
var button1_1, button1_2, button1_3;
var button2_1, button2_2, button2_3;
var button3_1, button3_2, button3_3;
var button4_1, button4_2, button4_3;
var soundFile1, soundFile2, soundFile3, soundFile4;
var val1, val2, val3, val4;
var valrev1, valrev2, valrev3, valrev4;
var valde1, valde2, valde3, valde4;
var valdi1, valdi2, valdi3, valdi4;

var Canvas1 = function( p ) { 

  
  p.setup = function() {
    p.createCanvas(windowWidth/4, windowHeight);
    button1_1 = createButton('Rec');
    button1_1.position(80, 100);
    button1_1.mousePressed(mouseRec1);
    button1_1.id('bt1_1');
  
    button1_2 = createButton('Stop');
    button1_2.position(80, 250);
    button1_2.mousePressed(mouseStop1);
    button1_2.id('bt1_2');

  
    button1_3 = createButton('Clear');
    button1_3.position(180, 250);
    button1_3.mousePressed(mouseClear1);
    button1_3.id('bt1_3');

    slider1 = createSlider(0, 1, 0.5, 0.05);
    slider1.position(70, 370);
    slider1.style('width', '180px');
  
    sliderev1 = createSlider(0, 1, 0, 0.05);
    sliderev1.position(70, 470);
    sliderev1.style('width', '180px');
  
    sliderde1 = createSlider(0, 0.5, 0, 0.005);
    sliderde1.position(70, 570);
    sliderde1.style('width', '180px');
  
    sliderdi1 = createSlider(0, 1, 0, 0.02);
    sliderdi1.position(70, 670);
    sliderdi1.style('width', '180px');


  };

  p.draw = function() {

    p.background(245,129,129);
    
    val1 = slider1.value();
    soundFile1.setVolume(val1);

    valrev1 = sliderev1.value();
    reverb1.amp(valrev1);

    valde1 = sliderde1.value();
    delay1.delayTime(valde1);

    valdi1 = sliderdi1.value();
    distortion1.set([amount=valdi1]);
  };

};

var Canvas2 = function( p ) { 

  p.setup = function() {
    p.createCanvas(windowWidth/4, windowHeight);
    button2_1 = createButton('Rec');
    button2_1.position(400, 100);
    button2_1.mousePressed(mouseRec2);
    button2_1.id('bt2_1');

  
    button2_2 = createButton('Stop');
    button2_2.position(400, 250);
    button2_2.mousePressed(mouseStop2);
    button2_2.id('bt2_2');
  
    button2_3 = createButton('Clear');
    button2_3.position(500, 250);
    button2_3.mousePressed(mouseClear2);
    button2_3.id('bt2_3');

  
    slider2 = createSlider(0, 1, 0.5, 0.05);
    slider2.position(390, 370);
    slider2.style('width', '180px');
  
    sliderev2 = createSlider(0, 1, 0, 0.05);
    sliderev2.position(390, 470);
    sliderev2.style('width', '180px');
  
    sliderde2 = createSlider(0, 0.5, 0, 0.005);
    sliderde2.position(390, 570);
    sliderde2.style('width', '180px');
  
    sliderdi2 = createSlider(0, 1, 0, 0.02);
    sliderdi2.position(390, 670);
    sliderdi2.style('width', '180px');
  };

  p.draw = function() {

    p.background(162,107,243);

    val2 = slider2.value();
    soundFile2.setVolume(val2);
  
    valrev2 = sliderev2.value();
    reverb2.amp(valrev2);
  
    valde2 = sliderde2.value();
    delay2.delayTime(valde2);
  
    valdi2 = sliderdi2.value();
    distortion2.set([amount=valdi2]);
  };

};

var Canvas3 = function( p ) { 

  p.setup = function() {
    p.createCanvas(windowWidth/4, windowHeight);
    button3_1 = createButton('Rec');
    button3_1.position(720, 100);
    button3_1.mousePressed(mouseRec3);
    button3_1.id('bt3_1');

    button3_2 = createButton('Stop');
    button3_2.position(720, 250);
    button3_2.mousePressed(mouseStop3);
    button3_2.id('bt3_2');

    button3_3 = createButton('Clear');
    button3_3.position(820, 250);
    button3_3.mousePressed(mouseClear3);
    button3_3.id('bt3_3');

    slider3 = createSlider(0, 1, 0.5, 0.05);
    slider3.position(710, 370);
    slider3.style('width', '180px');

    sliderev3 = createSlider(0, 1, 0, 0.05);
    sliderev3.position(710, 470);
    sliderev3.style('width', '180px');

    sliderde3 = createSlider(0, 0.5, 0, 0.005);
    sliderde3.position(710, 570);
    sliderde3.style('width', '180px');

    sliderdi3 = createSlider(0, 1, 0, 0.02);
    sliderdi3.position(710, 670);
    sliderdi3.style('width', '180px');
  };

  p.draw = function() {

    p.background(107,243,137);
    
    val3 = slider3.value();
    soundFile3.setVolume(val3);

    valrev3 = sliderev3.value();
    reverb3.amp(valrev3);

    valde3 = sliderde3.value();
    delay3.delayTime(valde3);

    valdi3 = sliderdi3.value();
    distortion3.set([amount=valdi3]);
  };

  
};

var Canvas4 = function( p ) { 

  p.setup = function() {
    p.createCanvas(windowWidth/4, windowHeight);
    button4_1 = createButton('Rec');
    button4_1.position(1040, 100);
    button4_1.mousePressed(mouseRec4);
    button4_1.id('bt4_1');

    button4_2 = createButton('Stop');
    button4_2.position(1040, 250);
    button4_2.mousePressed(mouseStop4);
    button4_2.id('bt4_2');

    button4_3 = createButton('Clear');
    button4_3.position(1140, 250);
    button4_3.mousePressed(mouseClear4);
    button4_3.id('bt4_3');

    slider4 = createSlider(0, 1, 0.5, 0.05);
    slider4.position(1030, 370);
    slider4.style('width', '180px');

    sliderev4 = createSlider(0, 1, 0, 0.05);
    sliderev4.position(1030, 470);
    sliderev4.style('width', '180px');

    sliderde4 = createSlider(0, 0.5, 0, 0.005);
    sliderde4.position(1030, 570);
    sliderde4.style('width', '180px');

    sliderdi4 = createSlider(0, 1, 0, 0.02);
    sliderdi4.position(1030, 670);
    sliderdi4.style('width', '180px');
  };

  p.draw = function() {

    p.background(243,230,107);
    
    val4 = slider4.value();
    soundFile4.setVolume(val4);
    
    valrev4 = sliderev4.value();
    reverb4.amp(valrev4);
  
    valde4 = sliderde4.value();
    delay4.delayTime(valde4);
   
    valdi4 = sliderdi4.value();
    distortion4.set([amount=valdi4]);
  };

};

var myp5 = new p5(Canvas1, 'c1');
var myp5 = new p5(Canvas2, 'c2');
var myp5 = new p5(Canvas3, 'c3');
var myp5 = new p5(Canvas4, 'c4');




function setup() {/////////////////////////////////////////SETUP//////////////////////////////////////
  
  soundFile1 = new p5.SoundFile;
  soundFile2= new p5.SoundFile;
  soundFile3 = new p5.SoundFile;
  soundFile4= new p5.SoundFile;

  mic = new p5.AudioIn();
  mic.start();
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);

  reverb1 = new p5.Reverb();
  reverb1.process(soundFile1, 3, 2);

  reverb2 = new p5.Reverb();
  reverb2.process(soundFile2, 3, 2);

  reverb3 = new p5.Reverb();
  reverb3.process(soundFile3, 3, 2);

  reverb4 = new p5.Reverb();
  reverb4.process(soundFile4, 3, 2);

  delay1 = new p5.Delay();
  delay1.process(soundFile1, .12, .7, 2300);

  delay2 = new p5.Delay();
  delay2.process(soundFile2, .12, .7, 2300);
  
  delay3 = new p5.Delay();
  delay3.process(soundFile3, .12, .7, 2300);

  delay4 = new p5.Delay();
  delay4.process(soundFile4, .12, .7, 2300);

  distortion1 = new p5.Distortion();
  distortion1.process(soundFile1);

  distortion2 = new p5.Distortion();
  distortion2.process(soundFile2);

  distortion3 = new p5.Distortion();
  distortion3.process(soundFile3);

  distortion4 = new p5.Distortion();
  distortion4.process(soundFile4);


}//////////////////////////////////////////////////////////SETUP//////////////////////////////////////

/////////////////// Channel 1 ///////////////////

function mouseRec1() { 
    recorder.record(soundFile1);
}

function mouseStop1(){
  recorder.stop();
  soundFile1.setVolume(val1);
  soundFile1.loop();
}

function mouseClear1(){
  soundFile1.stop();
}


/////////////////// Channel 2 ///////////////////

function mouseRec2() { 
  recorder.record(soundFile2);
}

function mouseStop2(){
  recorder.stop();
  soundFile2.loop();
}

function mouseClear2(){
  soundFile2.stop();
}

/////////////////// Channel 3 ///////////////////

function mouseRec3() { 
  recorder.record(soundFile3);
}

function mouseStop3(){
  recorder.stop();
  soundFile3.loop();
}

function mouseClear3(){
  soundFile3.stop();
}

/////////////////// Channel 4 ///////////////////

function mouseRec4() { 
  recorder.record(soundFile4);
}

function mouseStop4(){
  recorder.stop();
  soundFile4.loop();
}

function mouseClear4(){
  soundFile4.stop();
}

/////////////////// Key Typed for all channels ///////////////////

function keyTyped() {
  if (key === 'q') {
    recorder.record(soundFile1);
  }
    
    else if (key === 'w') {
      recorder.stop();
      soundFile1.setVolume(val1);
      soundFile1.loop();
    }

    else if (key === 's') {
      soundFile1.stop();
    }

    else if (key === 'e') {
      recorder.record(soundFile2);
    }

    else if (key === 'r') {
      recorder.stop();
      soundFile2.setVolume(val2);
      soundFile2.loop();
    }

    else if (key === 'f') {
      soundFile2.stop();
    }

    else if (key === 't') {
      recorder.record(soundFile3);
    }

    else if (key === 'y') {
      recorder.stop();
      soundFile3.setVolume(val3);
      soundFile3.loop();
    }

    else if (key === 'h') {
      soundFile3.stop();
    }

    else if (key === 'u') {
      recorder.record(soundFile4);
    }

    else if (key === 'i') {
      recorder.stop();
      soundFile4.setVolume(val4);
      soundFile4.loop();
    }

    else if (key === 'k') {
      soundFile4.stop();
    }
    
  return false;
}