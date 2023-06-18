function generateImage() {
  // 获取用户输入的文本
  var inputText = document.getElementById("inputText").value;

  // 创建一个canvas元素
  var canvas = document.createElement("canvas");
  canvas.width = 360; // 设置画布宽度
  canvas.height = 360; // 设置画布高度

  // 获取canvas的上下文
  var context = canvas.getContext("2d");

  // 绘制红色背景
  context.fillStyle = "#990033";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // 绘制白色文字
  context.font = "bold 36px FangSong";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.letterSpacing = "10px"; // 设置字体间距
  var lines = inputText.split("\n");
  var lineHeight = 30; // 设置每行文字的行高
  var startY = (canvas.height - lineHeight * lines.length) / 2; // 计算文字垂直居中的起始位置
  for (var i = 0; i < lines.length; i++) {
    context.fillText(lines[i], canvas.width / 2, startY + lineHeight * i);
  }

  // 将canvas转换为图片并显示在页面上
  var resultImage = document.getElementById("resultImage");
  resultImage.src = canvas.toDataURL();
  resultImage.style.display = "block";
}
