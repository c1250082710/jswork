function sort(method){
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else if(method=='insert'){
        logs = inserSort(origin)
}
  showDiv = document.getElementById('Anim')
  logValues = logs.values()
  console.log(logValues.next())
  setTimeout("showLog(logValues,showDiv)",50)
}