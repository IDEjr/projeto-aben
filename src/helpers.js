
const getPhoneNumber = phoneNumber => {
  const onlyNums = phoneNumber.replace(/[^0-9]/g, '');
  switch (onlyNums.length) {
    case 0:
      return "";
      break;
    case 1:
      return onlyNums.replace(
        /(\d{1})/,
        '($1'
      );
      break;
    case 2:
      return onlyNums.replace(
        /(\d{2})/,
        '($1'
      );
      break;
    case 3:
      return onlyNums.replace(
        /(\d{2})(\d{1})/,
        '($1) $2'
      );
      break;
    case 4:
      return onlyNums.replace(
        /(\d{2})(\d{2})/,
        '($1) $2'
      );
      break;
    case 5:
      return onlyNums.replace(
        /(\d{2})(\d{3})/,
        '($1) $2'
      );
      break;
    case 6:
      return onlyNums.replace(
        /(\d{2})(\d{4})/,
        '($1) $2'
      );
      break;
    case 7:
      return onlyNums.replace(
        /(\d{2})(\d{5})/,
        '($1) $2'
      );
      break;
    case 8:
      return onlyNums.replace(
        /(\d{2})(\d{5})(\d{1})/,
        '($1) $2-$3'
      );
      break;
    case 9:
      return onlyNums.replace(
        /(\d{2})(\d{5})(\d{2})/,
        '($1) $2-$3'
      );
      break;
    case 10:
      return onlyNums.replace(
        /(\d{2})(\d{5})(\d{3})/,
        '($1) $2-$3'
      );
      break;
    case 11:
      return onlyNums.replace(
        /(\d{2})(\d{5})(\d{4})/,
        '($1) $2-$3'
      );
      break;
  }
}
