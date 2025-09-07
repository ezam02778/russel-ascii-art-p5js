let video;
let asciiDiv;
let density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(80, 60); 
  video.hide();
  asciiDiv = select('#ascii');
}

function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      let pixelIndex = (i + j * video.width) * 4;
      let r = video.pixels[pixelIndex + 0];
      let g = video.pixels[pixelIndex + 1];
      let b = video.pixels[pixelIndex + 2];
      let avg = (r + g + b) / 3;

      let len = density.length;
      let charIndex = floor(map(avg, 0, 255, len, 0));
      let c = density.charAt(charIndex);

      if (c == " ") c = "&nbsp;";
      asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
