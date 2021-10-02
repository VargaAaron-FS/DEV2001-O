(function() {
  console.log("Demo started!");

  const canvas = document.querySelector("#canvas-container");
  const ctx = canvas.getContext("2d");

  // ctx.beginPath();
  // ctx.strokeStyle = "#ff0000";
  // ctx.lineWidth = 2;
  // ctx.moveTo(0,canvas.height * .5);
  // ctx.lineTo(canvas.width,canvas.height * .5);
  // ctx.stroke();
  //
  // ctx.beginPath();
  // ctx.strokeStyle = "#00ff00";
  // ctx.lineWidth = 2;
  // ctx.moveTo(200,0);
  // ctx.lineTo(200,300);
  // ctx.stroke();
  // ctx.closePath();
  //
  // ctx.beginPath();
  // ctx.strokeStyle = "blue";
  // ctx.fillStyle = "yellow";
  // ctx.lineWidth = 4;
  // ctx.rect(200-20,150-20,40,40);
  // ctx.stroke();
  // ctx.fill();
  //
  // ctx.beginPath();
  // ctx.fillStyle = "blue";
  // ctx.lineWidth = 6;
  // ctx.arc(200,150,20,0,Math.PI*2)
  // ctx.stroke();
  // ctx.fill();

  // for (let i = 0; i < 1000; i++) {
  //   ctx.beginPath();
  //   let r = Math.floor(Math.random() * 255);
  //   let g = Math.floor(Math.random() * 255);
  //   let b = Math.floor(Math.random() * 255);
  //
  //   ctx.strokeStyle = `rgb(${r},${g},${b})`;
  //   ctx.lineWidth = 2;
  //   ctx.moveTo(Math.random() * 300 + 50, Math.random() * 200 + 50);
  //   ctx.lineTo(Math.random() * 300 + 50, Math.random() * 200 + 50);
  //   ctx.stroke();

  for (let i=0;i<5;i++){
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "yellow";
    ctx.lineWidth = 4;
    ctx.rect(60+i*60,150,40,40);
    ctx.stroke();
    ctx.fill();
  }

  // drawLine(ctx,0,0,400,300,"#ff0000", 8);

})();

function drawLine(ctx,x1,y1,x2,y2,color,lw=2){ // lw=2 defaults to 2 if left blank
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lw;
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
  ctx.closePath();
}