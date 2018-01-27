

var toAdd = document.createDocumentFragment();
for(j=0;j<21;j++){
  offset= -340;
//var toAdd = document.createDocumentFragment();
for(i=0;i<21;i++){
  var newDic = document.createElement('div');
  newDic.id = "screen"+i;
  newDic.leftMargin=offset+'px';
  offset+=34;
  toAdd.appendChild(newDic);
}
//toAdd.appendChild(document.createElement('br');
//document.getElementById('cent').appendChild(toAdd);
}
document.getElementById('cent').appendChild(toAdd);
for(j=0;j<21;j++){
for(i=0;i<21;i++){
  document.getElementById("screen"+i).innerHTML = camera[0][i];
}

}
