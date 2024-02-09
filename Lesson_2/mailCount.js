// Mail Count

/*
The objective of this practice problem is to build a function that parses a
string of email data. The function takes an argument that contains the data,
parses it, then produces two basic statistics about the email:

- The number of email messages found in the string
- The date range of the email messages

The email messages string has the following characteristics:

- The string contains multiple email messages separated by the delimiter
  string `##||##`.

- Each email message has five parts. The delimiter string `#/#` separates the
  parts.

- The five parts are:
    
    - Sender
    - Subject
    - Date
    - Recipient
    - Body
- All five parts occur in the sequence shown above.

P:

We want to create a function that parses through a string that contains email
data. The function should parse through the data and return the number of email
messages found, and the data range of the email. The email messages within the
string will be separated by the delimiter `##||##`, and the delimiter `#/#` will
separate each part of the email.

-- Modeling/Algorithm

Find all email messages, and find the number of emails
- Separate the list of emails using the delimiter `##|##`
- Find the length of the list to get the number of emails

Get list of email dates
- Take the email data, split using the delimiter `'##||##'`
- Transform the split emails, into a list of emails that have been split into
  parts using the delimiter `'#/#'`
- Replace anything in the string that isn't a numerical data value with an empty
  string

Get range of dates
- Sort the list of email dates
  - To sort, create a new date object using the date values in the list
  - Sort by finding the difference of the first date object and the next
    date object

Get date string
- Transform the list of date objects into date strings


*/

var emailData = "From: foo@bar.com#/#\nSubject: Nunc in justo eros. Aliquam.#/#\nDate: 07-27-2016#/#\nTo: foo@bar.com#/#\nEtiam convallis commodo tortor, dapibus auctor dolor semper consequat. Sed lobortis eros nec ante porta, eu placerat sapien interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consectetur et odio vitae volutpat. Curabitur imperdiet orci metus, et dignissim nisl lacinia non. Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum. Quisque vel vulputate nisi. Nam a vestibulum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum leo id velit aliquet, at vestibulum ipsum molestie. Cras eu lobortis libero. In rutrum non leo id ultricies. Aliquam in ex ut nibh placerat sollicitudin vitae id magna.##||##\n\nFrom: baz@foo.com#/#\nSubject: Aenean cursus velit non arcu.#/#\nDate: 08-11-2016#/#\nTo: baz@foo.com#/#\nCras ex leo, faucibus id mollis a, dignissim sit amet metus. Sed dui massa, mollis in tristique ut, auctor quis tortor. Donec egestas velit purus, eget laoreet urna venenatis id. Etiam eget ultrices tortor. Duis venenatis leo mi, non porta est molestie at. Nulla lacus nisl, dapibus convallis massa ut, dignissim euismod lacus. Ut vel magna lectus. Morbi sit amet vulputate arcu. Cras non ante arcu. Nam tempor iaculis ipsum eget tincidunt. Praesent imperdiet varius dui, vel egestas ipsum porta in. Sed suscipit massa in neque lobortis congue.##||##\n\nFrom: qux@bar.com#/#\nSubject: Sed hendrerit felis in ex.#/#\nDate: 06-25-2016#/#\nTo: qux@bar.com#/#\nNulla quis est vitae orci tincidunt convallis sit amet ut libero. Sed eu facilisis justo. Maecenas sed ultrices urna. Sed malesuada justo sed magna sodales, eget congue dolor convallis. Vestibulum vel consectetur nunc. Morbi at tincidunt turpis, eget imperdiet orci. Curabitur laoreet ipsum a quam facilisis, eu aliquet lectus viverra. Maecenas ullamcorper rutrum dui, ac aliquet mi pulvinar sit amet.##||##\n\nFrom: quux@foo.com#/#\nSubject: Curabitur tincidunt elit nec risus.#/#\nDate: 07-24-2016#/#\nTo: quux@foo.com#/#\nCurabitur interdum dictum consectetur. Nulla facilisi. Quisque sed tellus consectetur, vestibulum quam sed, lacinia mauris. Nunc risus dolor, feugiat nec erat at, elementum tempor urna. Vivamus facilisis elementum congue. Cras dui libero, vehicula eget porttitor sed, sagittis quis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam lacinia nulla nisi, vel finibus ligula sodales quis. Maecenas vulputate, leo auctor venenatis pretium, lectus elit eleifend odio, nec molestie ligula ex eget tellus. Nullam a nibh ut enim efficitur elementum. Nunc non elit vitae tortor iaculis ornare in id risus. Integer finibus lobortis lorem, id rutrum elit congue id. In hac habitasse platea dictumst.##||##\n\nFrom: garply@foo.com#/#\nSubject: Integer nec nunc facilisis, ultricies.#/#\nDate: 07-03-2016#/#\nTo: garply@foo.com#/#\nFusce rhoncus purus nisi, vel blandit felis fermentum sed. Vestibulum ultricies rutrum dui nec vehicula. Proin quis semper nulla. Maecenas congue, leo nec feugiat dapibus, dui metus facilisis elit, non finibus leo nisl at est. Donec varius, turpis non pulvinar sodales, nulla nulla posuere ligula, nec eleifend quam metus ut tortor. Sed semper vestibulum mattis. Nullam et ornare eros. Aliquam sed pellentesque dui, ut consequat neque. Integer luctus turpis ultrices, congue erat mattis, vehicula tellus. Pellentesque tincidunt posuere nibh pretium tincidunt. In hac habitasse platea dictumst.";

function getEmailCount(emailData) {
  let emails = emailData.split('##||##');
  return emails.length;
}

function getEmailDates(emailData) {
  let emails = emailData.split('##||##')
  emails = emails.map(email => email.split('#/#'));
  let emailDates = emails.map(email => email[2].replace(/\n(Date: )/, ''));
  return emailDates;
}

function getRangeOfDates(dates) {
  let rangeOfDates = dates.slice().sort((a, b) => {
    let date1 = new Date(a);
    let date2 = new Date(b);

    return date1 - date2;
  })

  return rangeOfDates;
}

function getStringDates(dates) {
  dates = dates.map(date => new Date(date).toDateString());
  return dates;
}

function mailCount(emailData) {
  let emailCount = getEmailCount(emailData);
  let emailDates = getEmailDates(emailData);
  let rangeOfDates = getRangeOfDates(emailDates);
  let stringDates = getStringDates(rangeOfDates);

  return `Count of Email: ${emailCount}\n` +
  `Date Range: ${stringDates[0]} - ${stringDates[stringDates.length - 1]}`;
}

console.log(mailCount(emailData));

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016