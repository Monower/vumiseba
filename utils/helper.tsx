import ContactProps from '../models/Contact';


export const validate = (values) => {

  const errors:ContactProps = {
      name:'',
      phone:'',
      email:'',
      question:''
  };
  
  if (!values.name) {
    errors.name = "আপনার নাম লিখুন!";
  }
  if (!values.phone) {
      errors.phone = "আপনার মোবাইল নাম্বার লিখুন!";
  }
/*   if (!values.question) {
      errors.question = "আপনার প্রশ্ন লিখুন!";
  }
  if (!values.email) {
      errors.email = "আপনার ইমেইল লিখুন!";
  } */

  return errors;
};


export const number_check = (number: any) => {
  // const PATTERN = /[\w\s!@#$%^&*()\-+=\[\]{};:'",.<>?/\\|_~`]/;


  
  



    if(number.length < 11 || number.length > 11){
        return false;

    }

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

  return true;
}

export const num_bn_to_en = (number: any) => {
    const banglaToEnglishMap = {
        '০': '0',
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
      };

      let englishNumber = '';

      for (let i = 0; i < number.length; i++) {
        const digit = number[i];
        if (banglaToEnglishMap[digit]) {
          englishNumber += banglaToEnglishMap[digit];
        } else {
          // If the character is not a valid Bengali number, keep it as is
          englishNumber += digit;
        }
      }
    
      return englishNumber;
}
