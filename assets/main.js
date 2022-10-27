$("#enter").click(function (e) {
  let keyword = $('#keyword').val();
  if(keyword.trim() == ''){
    $('#keyword-label').html('Enter a keyword');
    $('#keyword').focus()
  } else {
    $('#keyword-label').html('');
    getCounter(keyword);
  }
});

$('#keyword').keypress(function (e) {
  var key = e.which;
  if (key == 13) {
    let keyword = $('#keyword').val();
    if(keyword.trim() == ''){
      $('#keyword-label').html('Enter a keyword');
      $('#keyword').focus()
    } else {
      $('#keyword-label').html('');
      getCounter(keyword);
    }
  }
});

function getCounter(keyword) {
  let baseUrl = window.location.pathname;
  baseUrl = baseUrl.replace('index.php', '');
  let url = baseUrl + 'api.php';
  let type = 'POST';
  let data = new FormData();
  data.append("keyword", keyword);
  function getCounter(res) {
    const response = JSON.parse(res.responseText);
    if (response.status) {
      var count = response.count;
      $('#count').html(count);
      $('#keyword-enter').html(keyword);
      createPattern(count);
     } else {
      $('#count').html(0);
      $('#keyword-enter').html('');
    }
  }
  xhrAPICall(url, type, getCounter, data);
}

function createPattern(count) {
  console.log(count);
}

// XHR API FUNCTION START
function xhrAPICall(url, type, callBackFunc = null, formdata = null) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callBackFunc(this);
    }
  };
  xhr.open(type, url, true);
  if (type === "POST") {
    xhr.send(formdata);
  } else {
    xhr.send();
  }
}
// XHR API FUNCTION END