console.log(`--------------------------Assignment 1---------------------`);
var monthOfYear = function (month) {
    switch (month) {
      case 1:
        console.log(`${month} - January`);
        console.log(`Junuary is the start of the the year.`);
        break;
      case 2:
        console.log(`${month} - February`);
        break;
      case 3:
        console.log(`${month} - March`);
        case 4:
        console.log(`${month} - April`);
        break;
      case 5:
        console.log(`${month} - May`);
          break;
          case 6:
        console.log(`${month} - June`);
        break;
        case 7:
        console.log(`${month} - July`);
        break;
        case 8:
        console.log(`${month} - Augast`);
        break;
        case 9:
        console.log(`${month} - Saptember`);
        break;
        case 10:
        console.log(`${month} - October`);
        break;
        case 11:
        console.log(`${month} - November`);
        break;
        case 12: 
            console.log(`${month} - December`);
            break;
      default:
          console.log(`${month} - in valide input------ please provide data.`);
        break;
    }
  }
  
  monthOfYear(0);
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);
  monthOfYear(null);
  monthOfYear(undefined);