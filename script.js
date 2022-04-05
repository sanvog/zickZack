window.onload = function () {

    //definitions
    let canvas = document.getElementById("draw-canvas");
    let ctx = canvas.getContext("2d");

    let pattern = ["yellow", "pink", "purple", "red"];

        for (let i = 0; i < pattern.length; i++) {
        ctx.strokeStyle = pattern[i];
        ctx.lineWidth = (10+i);
        ctx.beginPath();
        ctx.moveTo(-5, 5 + i * 40);
        ctx.lineTo(35, 45 + i * 40);
        ctx.lineTo(75, 5 + i * 40);
        ctx.lineTo(115, 45 + i * 40);
        ctx.lineTo(155, 5 + i * 40);
        ctx.stroke();
        }

}    