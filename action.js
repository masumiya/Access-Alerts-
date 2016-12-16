function alertAction(domain, site_domain) {
  regexp = new RegExp('(.*?)' + domain + '$', 'i');
  if (site_domain.match(regexp)) {
    alert('You accessed the "' + domain + '" !');
  }
}

var url = window.location.href;
var site_domain = url.replace(/https?:\/\/([^\/]+).*/, "$1");

chrome.runtime.sendMessage({method: "localStorage", key: "disabled"}, function(response) {
  if (response.data != "true") {
    chrome.runtime.sendMessage({method: "localStorage", key: "domains"}, function(response) {
      domains = response.data.split(/\r\n|\r|\n/);
      for (var i = 0; i < domains.length; i++) {
        if (domains[i].length > 0) alertAction(domains[i], site_domain);
      }
    });
  }
});
