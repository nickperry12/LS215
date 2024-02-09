// Email Validation

/*
Implement a function that checks whether an email address is valid. An email
address has two parts: A "local part" and a "domain part." An `@` sign separates
the two parts: `local-part@domain-part`. The local part is the name of the
mailbox; this is usually a username. The domain part is the domain name (e.g.,
gmail.com, yahoo.com.ph, or myCompanyName.com). The domain name contains a
server name (sometimes called the mail server name) and a top-level domain
(`.com`, `.ph`, etc.).

For this practice problem, use the following criteria to determine whether an
email address is valid:

- There must be one `@` sign.
- The local part must contain one or more letters (`A`-`Z`, `a`-`z`) and/or
  digits (`0`-`9`). It may not contain any other characters.
- The domain part must contain two or more components with a single dot (`.`)
  between each component. Each component must contain one or more letters
  (`A`-`Z`, `a`-`z`) only.

P:

We want to create a function that takes a string as an argument. The string
passed in will represent an email that needs to be validated. For the email to
be valid, these rules must be satisified:

- There must be only one `@` sign.
- The local part of the email (the username) must contain one or more letters
  (either uppercase or lowercase), and/or digits (`0`-`9`). It may not contain
  any other characters.
- The domain must contain two or more components with a single dot `.` between
  each component. Each component must contain only letters, one or more of them.

E:

isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@bar.....com');         // returns false
isValidEmail('Foo@mx.baz.com.ph');       // returns true

-- Modeling/Algorithm

Validate there are no special characters
- Find any character that matches a special character
- Return true if there are no matches

Validate there are alphabetics
- Find any matches for alphabetic characters
- Return true if there is at least 1

Validate the local-part/username
- Split the given string at the `@` character
- Set `username` to the string at the first index of the resulting array
- Check to see if there is at least one alphabetic character and that there are
  no special characters (characters other than alphabetics or alphanumerics)
    - Return `true` if this is the case

Validate the domain
- First validate that there no special characters aside from dots
  - Check to see if there are any characters that aren't alphabetics or a period
  - Return `true` if none are found, `false` if not
- Validate that there are no consecutive periods
  - Split the domain into a collection of characters
  - Iterate through each character
    - If the current character and the next character are both periods, return
      `false`
  - return `true` otherwise
- Validate that it includes at least one alphabetic

Validate the server name
- 

Validate the email
- Validate the domain
- Validate the username
- Return `true` if both are valid, and `false` otherwise
*/

function validateAlphabetics(string) {
  return string.match(/[A-Za-z]/g);
}

function validateNoSpecialChars(string) {
  let specialChars = string.match(/[^A-Za-z0-9]/g);
  return specialChars === null;
}

function validateUsername(username) {
  if (validateAlphabetics(username) && validateNoSpecialChars(username)) {
    return true;
  }

  return false;
}

function validateNoConsecutiveDots(domain) {
  let chars = domain.split('');
  for (let i = 0; i < chars.length; i += 1) {
    let nextChar = chars[i + 1];
    let currentChar = chars[i];

    if (currentChar === '.' && nextChar === '.') {
      return false;
    }
  }

  return true;
}

function validateServer(domain) {
  if (domain.match(/^[a-zA-Z]+(?:\.[a-zA-Z]+)+$/g)) {
    return true;
  } else {
    return false;
  }
}

function validateDomain(domain) {
  let status = false;

  if (validateNoConsecutiveDots(domain) &&
      validateAlphabetics(domain) &&
      validateServer(domain)) {
    status = true;
  } 

  return status;
}

function isValidEmail(email) {
  if (email.match(/[@]/g).length > 1) return false;

  let username = email.split('@')[0];
  let domain = email.split('@')[1];

  if (validateUsername(username) && validateDomain(domain)) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false