function GenerateInput(select){
    var input = $('input');
    input.removeAttr('readonly');
    input.attr('type', select.value);
}

function GenerateJson(){
    var obj = {data : $('input').val()};
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "data.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}