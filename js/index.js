function GetResult(oper)
{ 
  let n1 = 0;
  let n2 = 0;
    	
  n1 = eval(calcform.num_01.value);   
  n2 = eval(calcform.num_02.value);   
  
  switch (oper)                       
  {                                   
    case 1:   
    {
      calcform.res.value = n1 + n2;
      break;
    }
    case 2:   
    {
      calcform.res.value = n1 - n2;
      break;
    }
    case 3:   
    {
      calcform.res.value = n1 * n2;
      break;
    }
    case 4:   
    {
      calcform.res.value = n1 / n2;
      break;
    }
  }
}