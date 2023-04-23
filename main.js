const originText = $(".text-content").html();
const endText = originText.substring(originText.length - 3, originText.length);
$(".text-empty").html(endText);
