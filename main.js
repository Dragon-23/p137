

function setup()
{
    canvas = createCanvas(480, 280);
    canvas.position(400, 260);
  


}

function draw()
{
    image(video, 0,0, 480, 300);
}

function start()
{
   objectDetector = ml5.objectDetector('cocossd', modelLoaded)
   document.getElementById("status").innerHTML = ("Status: Detecting Objects");
}

function modelLoaded()
{

}