a=0; //Пример 1
if (a == 1) window.alert(“1 найдено!”);

if (phone==””|| email==””) window.alert(“Ошибка!”); //Пример 2

etalon = 10; //Пример 3
if (data == etalon) 
{ 
  checkData = true;
}
else 
{ 
  alert("Произошла ошибка системы”); 
             checkData = false;
}

switch (a) //Пример 4
{ 
  case 1: 
    window.alert(”1”); 
    break;
  case 2: 
    window.alert(”2”); 
    break; 
  case 3: 
    window.alert(”3”); 
    break;
default: 
    window.alert(”Error!”);
}

for (i=1; i<10; i++) //Пример 5
{
  document.write(“Это строка No ”,i,”<br>”);
}

count=0; //Пример 6
value=3;
while (count<10) { count+=value; }

count=0; //Пример 7
value=3;
do { count+=value; } while (count<10);

