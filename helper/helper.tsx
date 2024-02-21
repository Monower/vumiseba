import { num_bn_to_en } from "@/utils/helper";


export const num_en_to_bn = (english_number: any) => {
  const toEn = (n: any) =>
    n.toString().replace(/\d/g, (d: any) => "০১২৩৪৫৬৭৮৯"[d]);
  return toEn(english_number);

  //   var finalEnlishToBanglaNumber = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };

  //   String.prototype.getDigitBanglaFromEnglish = function () {
  //       var retStr = this;
  //       for (var x in finalEnlishToBanglaNumber) {
  //           retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
  //       }
  //       return retStr;
  //   };

  //   return english_number?.toString()?.getDigitBanglaFromEnglish()
};

export const ucFirst = (str = "") => {
  if (str == null) {
    return "";
  }
  if (parseInt(str)) {
    return str;
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

export const relativeImagePath = (file_name: string) => {
  return `/images/` + file_name;
};

export const dateFormat = (date: any) => {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
    
      // Split the input date string into day, month, and year parts

      if(date.length == 0){
        return 'চলমান';
      }


      const dateParts = date.split('/');
      if (dateParts.length !== 3) {
        return 'Invalid Date';
      }
    
      const day = parseInt(dateParts[0], 10);
      const monthIndex = parseInt(dateParts[1], 10) - 1;
      const year = parseInt(dateParts[2], 10);
    
      // Check if the date components are valid
      if (isNaN(day) || isNaN(monthIndex) || isNaN(year)) {
        return 'Invalid Date';
      }
    
      if (monthIndex < 0 || monthIndex > 11 || day < 1 || day > 31) {
        return 'Invalid Date';
      }
    
      const month = months[monthIndex];
      const daySuffix = getDaySuffix(day);
    
      return `${month} ${day}${daySuffix} ${year}`;
    }
    
    function getDaySuffix(day) {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
    
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
};


export const ymdTomdy = (date: any) => {
  if(date.length == 0) {
    return false;
  }else{
    const dateParts = date.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);

    return `${day}/${month}/${year}`;
  }
}

export const number_check2 = (number:any) => {
  number = num_bn_to_en(number);
  number = number?.split('').filter((n:any) => Number.isInteger(parseInt(n)) ?? false).join().replaceAll(',', '')

  var first_one = number.slice(0, 1);
  var first_two = number.slice(0, 2);
  var three_number_position = number.slice(2, 3);

  if (number.length > 2 || number.length > 3) {
      if (three_number_position == 0 || three_number_position == 1 || three_number_position == 2) {
          return false;
      }
      if (first_two != '01') {
          return false;
      }

      if (first_one != '0') {
          return false;
      }
  }

  return number;
}

