const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(Array.isArray(members))) { return false }
  
  return members.reduce((result, member) => {
    if (typeof member === 'string' && member.trim().length > 0) {
      result.push(member.trim()[0].toUpperCase());
    }
    return result
  }, []).sort().join('');
};
